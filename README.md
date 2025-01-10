# Jupyter-style Shortcuts Chrome Extension

## Installation Instructions

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable "Developer mode" (toggle switch in the top-right corner)
3. Click "Load unpacked" button
4. Select the directory containing these extension files

## Files
- `manifest.json`: Extension configuration
- `content.js`: Keyboard shortcut handling

## Features
### Command Mode
- Enter command mode: `Ctrl+B`
- Exit command mode: `Escape`

### Navigation (while in command mode)
- Move down: `j` or `↓` (down arrow)
- Move up: `k` or `↑` (up arrow)
- Delete current card: `x`
- Edit current card: `e` (exits command mode and focuses on editor)

## Current Features
- Vim-style navigation between cards
- Visual highlight of currently selected card
- Quick deletion with x key
- Quick edit mode access with e key
