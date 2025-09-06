# Weather App

A React-based weather application built with Vite, Material-UI, and OpenWeatherMap API.

## Features

- Real-time weather data
- City search functionality
- Responsive design with Material-UI
- Secure API key management

## Quick Start

1. **Clone and install:**
   ```bash
   git clone https://github.com/Kousik8436/Weather-App.git
   cd Weather-App
   npm install
   ```

2. **Setup environment:**
   ```bash
   cp .env.example .env
   ```
   Add your OpenWeatherMap API key to `.env`

3. **Run the app:**
   ```bash
   npm run dev
   ```

## Environment Variables

- `VITE_WEATHER_API_KEY` - Your OpenWeatherMap API key

## Security

- API keys are stored in environment variables
- `.env` files are excluded from version control
- See `SETUP.md` for detailed setup instructions

## Tech Stack

- React 18
- Vite
- Material-UI
- OpenWeatherMap API
