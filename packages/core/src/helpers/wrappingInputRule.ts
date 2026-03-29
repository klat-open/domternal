/**
 * Wrapping Input Rule Helper
 *
 * Drop-in replacement for ProseMirror's wrappingInputRule that exposes
 * the `undoable` option so extension authors can opt out of Backspace undo.
 */
import { InputRule } from '@domternal/pm/inputrules';
import { findWrapping, canJoin } from '@domternal/pm/transform';
import type { NodeType, Node, Attrs } from '@domternal/pm/model';

export interface WrappingInputRuleOptions {
  /**
   * The regex pattern to match. Should start with `^` so it only
   * fires at the start of a textblock.
   */
  find: RegExp;

  /**
   * The node type to wrap in.
   */
  type: NodeType;

  /**
   * Whether Backspace can undo this input rule immediately after it fires.
   * @default true
   */
  undoable?: boolean;

  /**
   * Node attributes, or a function that computes them from the match.
   */
  getAttributes?: Attrs | null | ((match: RegExpMatchArray) => Attrs | null);

  /**
   * Predicate that decides whether to join with an adjacent node of
   * the same type above the newly wrapped node.
   */
  joinPredicate?: (match: RegExpMatchArray, node: Node) => boolean;
}

/**
 * Creates an input rule that wraps a textblock in a given node type.
 *
 * @example
 * // `> ` at start of line wraps in blockquote
 * wrappingInputRule({
 *   find: /^\s*>\s$/,
 *   type: schema.nodes.blockquote,
 * });
 *
 * @example
 * // Non-undoable wrapping rule
 * wrappingInputRule({
 *   find: /^\s*>\s$/,
 *   type: schema.nodes.blockquote,
 *   undoable: false,
 * });
 */
export function wrappingInputRule(options: WrappingInputRuleOptions): InputRule {
  const { find, type, getAttributes = null, joinPredicate, undoable } = options;

  return new InputRule(
    find,
    (state, match, start, end) => {
      const attrs = getAttributes instanceof Function ? getAttributes(match) : getAttributes;
      const tr = state.tr.delete(start, end);
      const $start = tr.doc.resolve(start);
      const range = $start.blockRange();
      const wrapping = range && findWrapping(range, type, attrs);
      if (!wrapping) return null;
      tr.wrap(range!, wrapping);
      const before = tr.doc.resolve(start - 1).nodeBefore;
      if (before && before.type === type && canJoin(tr.doc, start - 1) &&
          (!joinPredicate || joinPredicate(match, before))) {
        tr.join(start - 1);
      }
      return tr;
    },
    undoable !== undefined ? { undoable } : {},
  );
}
