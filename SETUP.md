# Weather App Setup Guide

## Environment Setup

1. Clone the repository:
```bash
git clone https://github.com/Kousik8436/Weather-App.git
cd Weather-App
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Add your OpenWeather API key to `.env`:
```
VITE_WEATHER_API_KEY=your_actual_api_key_here
```

5. Start the development server:
```bash
npm run dev
```

## Getting API Key

1. Visit [OpenWeatherMap](https://openweathermap.org/api)
2. Sign up for a free account
3. Generate an API key
4. Add it to your `.env` file

## Security Note

Never commit your `.env` file to version control. The API key should remain private.