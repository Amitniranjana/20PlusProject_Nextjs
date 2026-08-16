# 20Plus Next.js Mini Project Collection

This project is a small frontend playground built with Next.js, React, TypeScript, and Tailwind CSS. It contains multiple mini applications and UI experiments created to practice browser APIs, interactive UI logic, and modern frontend development patterns.

The goal of this repository is not just one app but a collection of separate mini projects inside a single Next.js project, so different ideas can be tested quickly in one place.

## Project Overview

This repository includes a variety of feature demos such as:

- Calculator with expression evaluation
- Webcam camera demo
- Nested comment system
- Screen recording demo
- Volume control UI
- Live screenshot preview
- Multi-step form flow
- WebRTC starter demo
- Search page placeholder for future enhancement

## Main Features by Page

### 1. Home Dashboard
Location: src/app/page.tsx

- Landing page of the project
- Displays links to multiple mini projects
- Acts as navigation hub for the entire app

### 2. Calculator App
Location: src/app/calculator/page.tsx

- Handles numeric keypad interaction
- Evaluates math expressions using mathjs
- Keeps a simple calculation history
- Shows output and expression state in UI

### 3. Camera/Webcam Feature
Location: src/app/camera/page.tsx

- Accesses browser camera using getUserMedia
- Displays live video feed
- Lets user capture an image preview from the camera
- Basic webcam interaction for frontend learning

### 4. Nested Comment System
Location: src/app/comment/page.tsx

- Allows adding new comments
- Supports replying to existing comment threads
- Uses nested data structure to display comments and replies
- Good example of local state management in React

### 5. Multi-Step Data Form
Location: src/app/datapersisitent/page.tsx

- Displays a tabbed multi-step form
- Supports profile, interest, and settings sections
- Shows how form data can be managed through a shared state object
- Good example of component-driven form architecture

### 6. Live Screenshot / Camera Preview
Location: src/app/livescreenshot/page.tsx

- Starts a camera stream from the browser
- Shows live video preview on screen
- Basic example of media access in front-end apps

### 7. Screen Recorder
Location: src/app/screenrecorder/page.tsx

- Requests screen share permission from the browser
- Records the shared screen using MediaRecorder
- Captures video chunks and downloads the final webm file
- Demonstrates browser capture APIs

### 8. Volume Bar UI
Location: src/app/volume/page.tsx

- Provides a custom volume-style bar
- Calculates width based on click position
- Demonstrates interaction based on pointer position

### 9. WebRTC Starter Demo
Location: src/app/webrtc/page.tsx

- Uses STUN servers for WebRTC connection setup
- Demonstrates local camera stream and remote stream binding
- Shows the offer creation flow for peer connection setup
- Useful for understanding video call architecture in browser apps

### 10. Search Page
Location: src/app/search/page.tsx

- Currently a placeholder
- Intended for adding a search feature or debounce-based UI in the future

## Folder Structure

```bash
src/
├─ app/
│  ├─ calculator/
│  ├─ camera/
│  ├─ comment/
│  ├─ datapersisitent/
│  ├─ livescreenshot/
│  ├─ screenrecorder/
│  ├─ search/
│  ├─ volume/
│  ├─ webrtc/
│  ├─ globals.css
│  ├─ layout.tsx
│  └─ page.tsx
├─ component/
│  ├─ interest.tsx
│  ├─ profile.tsx
│  └─ setting.tsx
└─ ...
```

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- MathJS
- React Webcam
- Browser Media APIs

## Installation

```bash
npm install
```

## Run the Project

```bash
npm run dev
```

Then open:

```bash
http://localhost:3000
```

## Notes

- This is a learning and experimentation project.
- Some pages are basic proofs of concept and can be improved further.
- The project is useful for practicing frontend concepts such as state management, media access, forms, and browser APIs.
- It is suitable for learning, prototyping, and building small UI demos.

## Purpose of the Project

This repository shows how multiple frontend features can be built inside a single Next.js app. It is especially useful for:

- learning React and Next.js concepts
- practicing component-based UI design
- experimenting with browser media APIs
- creating UI mini-projects in one codebase
- understanding how small interactive features are structured

## Future Improvements

Possible improvements include:

- adding a proper search input with debounce
- refactoring repeated logic into reusable hooks
- improving styling consistency across all pages
- adding backend integration or persistence
- turning some demos into full production-ready features
