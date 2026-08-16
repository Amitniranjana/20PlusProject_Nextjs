# Project Context: 20Plus Next.js Mini Project Collection

## Overview
This project is a collection of small frontend experiments built using Next.js, React, and TypeScript. Instead of a single feature-heavy app, it is designed as a mini project gallery where different UI and browser API concepts are implemented in separate pages inside one application.

The repository is useful for learning and practicing frontend development, especially for concepts like state management, forms, media access, local UI logic, and browser integration.

## Purpose
The goal of this project is to create multiple independent mini-projects in one place so that a developer can quickly test ideas and improve frontend skills.

Examples of concepts covered:
- calculator logic and expression evaluation
- webcam access
- nested comment UI patterns
- demo of screen recording using browser APIs
- live video preview
- custom volume control UI
- multi-step form state management
- WebRTC starter flow
- future search feature area

## Project Structure

### App Router Pages
The app is built with Next.js App Router under src/app.

Primary pages include:
- src/app/page.tsx — landing page and navigation hub
- src/app/calculator/page.tsx — calculator UI and evaluation logic
- src/app/camera/page.tsx — webcam camera demo
- src/app/comment/page.tsx — nested comment implementation
- src/app/datapersisitent/page.tsx — multi-step form practice
- src/app/livescreenshot/page.tsx — camera preview demo
- src/app/screenrecorder/page.tsx — screen recording logic
- src/app/volume/page.tsx — custom volume bar interaction
- src/app/webrtc/page.tsx — WebRTC starter example
- src/app/search/page.tsx — empty placeholder for future feature

### Reusable Components
The project also contains reusable form-related components:
- src/component/profile.tsx
- src/component/interest.tsx
- src/component/setting.tsx

These are used for the tabbed form demo and illustrate how data can be passed between multiple sections.

## Technologies Used
- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- MathJS
- React Webcam
- Browser Media APIs

## Runtime Behavior
The app runs as a client-side interactive project in the browser. Most pages rely on hooks such as useState, useEffect, and useRef. Some pages access browser APIs like:
- navigator.mediaDevices.getUserMedia
- MediaRecorder
- getDisplayMedia
- WebRTC RTCPeerConnection

## Learning Value
This repository is especially helpful for:
- beginner to intermediate React learning
- understanding component state and interaction patterns
- experimenting with media and camera APIs
- building multiple small UI demos in a single project
- understanding project organization in Next.js app directory structure

## Current State
The project is a functional mini project collection and prototype playground. Several demos are educational examples and may still need cleanup, optimization, or stronger UI consistency. Some features are intentionally simple and are meant to demonstrate underlying concepts rather than production-level quality.

## Suggested Future Work
- add search functionality with debounce
- improve design consistency across all pages
- refactor repeated logic into reusable hooks/components
- add persistent storage or backend integration
- improve accessibility and responsiveness
- convert experimental pages into polished mini-apps

## Notes
This repository is ideal for learning, prototyping, and showing multiple interactive frontend experiments under one Next.js project. It is not yet a single polished production application, but it is a strong example of modular frontend experimentation.
