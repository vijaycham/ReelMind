🎬 ReelMind

AI-powered movie discovery platform

ReelMind is a modern movie discovery web application built with React (Vite), Firebase Authentication, Redux Toolkit, and TMDB APIs.
The project was initially inspired by popular streaming UIs for learning purposes and later evolved into a feature-rich, scalable application with plans for AI-powered movie recommendations.

🔗 Live Demo: https://reel-mind-vijay.web.app


🚀 Tech Stack

Frontend: React (Vite), Tailwind CSS

State Management: Redux Toolkit

Authentication: Firebase Auth

APIs: TMDB API (Movies & Trailers)

Deployment: Firebase Hosting

Routing: React Router

✨ Key Features (Implemented)
🔐 Authentication

User Sign Up / Login / Logout

Firebase Authentication

Protected routes

Redirects unauthenticated users to login

Prevents logged-in users from accessing auth pages

User profile update (display name & profile photo)

Proper cleanup using onAuthStateChanged unsubscribe

🎥 Browse Experience

Hero section with:

Random movie trailer in the background

Autoplay, mute, and loop enabled

Now Playing Movies fetched from TMDB

Secondary container with multiple movie rows

Reusable movie cards using TMDB Image CDN

Smooth and responsive UI using Tailwind CSS

🧠 State & Architecture

Centralized Redux store

userSlice for auth state

movieSlice for movie & trailer data

Custom hooks for:

Fetching now-playing movies

Managing side effects cleanly

Constants file for configuration values

🛠️ What’s Coming Next (Planned)
🤖 AI-Powered Movie Recommendations

Prompt-based movie discovery (mood, genre, preferences)

LLM integration (OpenAI / Gemini)

AI-generated movie suggestions

TMDB API chaining for posters & metadata

🔍 Smart Search

Search bar with AI-assisted suggestions

Personalized recommendations

🧱 Application Structure
Browse Page

MainContainer

VideoBackground (Trailer)

VideoTitle (Title & description)

SecondaryContainer

MovieList × N

MovieCard components


