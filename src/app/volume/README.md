# Volume Feature

## Overview

The volume page provides a simple interactive slider experience built with React and Next.js. Users can click anywhere inside a bar to set the volume level as a percentage.

## What It Does

- Displays the current volume percentage.
- Lets users click on a horizontal bar to update the value.
- Visually fills the bar based on the clicked position.

## How It Works

The component uses a `ref` to measure the width of the clickable bar and calculates the clicked percentage from the mouse position. That percentage is then applied as the width of an inner fill element.

## Files

- [src/app/volume/page.tsx](page.tsx) - Main implementation for the volume interaction.

## Usage

1. Open the volume page in the app.
2. Click anywhere on the bar.
3. The displayed percentage and fill width update instantly.

## Notes

This example is intentionally lightweight and demonstrates a basic click-based volume indicator using client-side React state.
