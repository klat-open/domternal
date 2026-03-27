# @domternal/extension-table

[![Version](https://img.shields.io/npm/v/@domternal/extension-table.svg)](https://www.npmjs.com/package/@domternal/extension-table)
[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/domternal/domternal/blob/main/LICENSE)

A lightweight, extensible rich text editor toolkit built on [ProseMirror](https://prosemirror.net/). Framework-agnostic headless core with first-class **Angular** support. Use it headless with vanilla JS/TS, add the built-in toolbar and theme, or drop in ready-made Angular components. Fully tree-shakeable, import only what you use, unused extensions are stripped from your bundle.

**[Website](https://domternal.dev)** · **[Documentation](https://domternal.dev/v1/introduction)** · **[StackBlitz (Vanilla TS)](https://stackblitz.com/edit/domternal-vanilla-full-example)** · **[StackBlitz (Angular)](https://stackblitz.com/edit/domternal-angular-full-example)**

## Features

See [Packages & Bundle Size](https://domternal.dev/v1/packages) for a full breakdown of all packages and what each one includes.

- **Headless core** - use with any framework or vanilla JS/TS
- **Angular components** - editor, toolbar, bubble menu, floating menu, emoji picker (signals, OnPush, zoneless-ready)
- **57 extensions across 10 packages** - 23 nodes, 9 marks, and 25 behavior extensions
- **140+ chainable commands** - `editor.chain().focus().toggleBold().run()`
- **Full table support** - cell merging, column resize, row/column controls, cell toolbar, all free and MIT licensed
- **Tree-shakeable** - import only what you use, your bundler strips the rest
- **~38 KB gzipped** (own code), [~108 KB total](https://domternal.dev/v1/packages) with ProseMirror
- **TypeScript first** - 100% typed, zero `any`
- **4,200+ tests** - 2,675 unit tests and 1,550 E2E tests across 34 Playwright specs
- **Light and dark theme** - 70+ CSS custom properties for full visual control
- **Inline styles export** - `getHTML({ styled: true })` produces inline CSS ready for email clients, CMS, and Google Docs
- **SSR helpers** - `generateHTML`, `generateJSON`, `generateText` for server-side rendering

## Documentation

- [Getting Started](https://domternal.dev/v1/getting-started) - install and create your first editor
- [Introduction](https://domternal.dev/v1/introduction) - core concepts, architecture, and design decisions
- [Packages & Bundle Size](https://domternal.dev/v1/packages) - what each package includes and bundle size breakdown
- [Blog](https://domternal.dev/blog)

## License

[MIT](https://github.com/domternal/domternal/blob/main/LICENSE)
