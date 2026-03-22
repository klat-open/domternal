import { useCallback } from 'react';
import type { ToolbarController } from '@domternal/core';

export function useKeyboardNav(
  controllerRef: React.RefObject<ToolbarController | null>,
  toolbarRef: React.RefObject<HTMLDivElement | null>,
  closeDropdown: () => void,
) {
  const focusCurrentButton = useCallback(() => {
    const idx = controllerRef.current?.focusedIndex ?? 0;
    const buttons = toolbarRef.current?.querySelectorAll('.dm-toolbar-button') as NodeListOf<HTMLButtonElement> | undefined;
    buttons?.[idx]?.focus();
  }, [controllerRef, toolbarRef]);

  const onKeyDown = useCallback((event: React.KeyboardEvent) => {
    const controller = controllerRef.current;
    if (!controller) return;

    switch (event.key) {
      case 'ArrowRight':
        event.preventDefault();
        controller.navigateNext();
        focusCurrentButton();
        break;
      case 'ArrowLeft':
        event.preventDefault();
        controller.navigatePrev();
        focusCurrentButton();
        break;
      case 'Home':
        event.preventDefault();
        controller.navigateFirst();
        focusCurrentButton();
        break;
      case 'End':
        event.preventDefault();
        controller.navigateLast();
        focusCurrentButton();
        break;
      case 'Escape':
        if (controller.openDropdown) {
          event.preventDefault();
          closeDropdown();
          focusCurrentButton();
        }
        break;
    }
  }, [controllerRef, closeDropdown, focusCurrentButton]);

  return { onKeyDown, focusCurrentButton };
}
