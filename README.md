# Weather App

A simple Next.js Weather Application that fetches current weather data for a given city using the **OpenWeatherMap API**.
Deployed and accessible here: https://weather-app-psi-five-57.vercel.app/

---

## Features

- Displays current weather with descriptive icons.  
- Supports day and night weather icons.  
- Built using **Next.js App Router**.  
- Fetches weather data securely via **Next.js API routes**.  

---

## Temperature Unit

- All temperatures are displayed in **Celsius**.  

---
## Environment Variables
There is 2 env files, one for development and the other for production
| Name          | Definition  |
| ------------- |:-------------:|
| `OPENWEATHER_API_KEY`      | Third party  API key  |
| `NEXT_PUBLIC_WEATHER_API_BASE_URL` | Third party base API |

---

## Installation & Running Locally

1. Clone the repository
2. ```npm install```
3. ```npm run dev```

#### For Production build:
4. ```npm run build```
5. ```npm run start```


## Design Decisions & Tech Stack
#### Framework: Next.js (App Router)

- Reason: Next.js provides server-side rendering and API routes, allowing for a seamless full-stack experience within one framework.
- The App Router was used to leverage modern React features (such as server components and route handlers) for improved performance and maintainability.

#### API Route (/api/weather)

Instead of calling OpenWeatherMap directly from the client, a Next.js API route (/api/weather) was implemented.

Reason:

- It hides the API key on the server side for better security.
- It simplifies the client-side logic and provides a single endpoint to fetch city weather data.

#### Styling

Clean and minimal styling was applied using CSS modules (or Tailwind CSS if configured).

Reason: Keeps the focus on usability and readability while ensuring a modern look.

#### Units & Measurement

Temperatures are displayed in Celsius (°C), as it's the most widely used metric outside of the U.S.

#### Bonus Considerations

- A set of weather-specific SVG and icons (e.g., day_rain.svg, mist.svg) were added for better visual representation.
- The favicon was updated to a weather-themed icon for consistency.
