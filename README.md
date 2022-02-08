# Weather App built in React 🌦

First Frontend Module project with [Manchester Codes](https://www.manchestercodes.com/).

The goal was to build a weather-app which recives live weather information from API and has following features:

-   User should be able to see the name and country of the city the forecast is for.

-   User should be able to see 5 day weather forecast with a brief summary including date, general description and max temperature.

-   User should be able to click on one of the summaries to view more details for that day.

The app was built with React and Axios was used to fetch data from Manchester Codes weather API. Jest and RTL were used to test the app behaviour outside of the browser.

Screenshot of search results:

![alt text](screenshots/weatherapp.png 'Weather search results')

Screenshot of an error message when city is not found:
![alt text](screenshots/weatherapperrormessage.png 'Weather app error when city is not found')

**Set up**

To run the app locally clone this repo and install following:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes. You may also see any lint errors in the console.

To access weather forecast data install axios

### `npm install axios`

To run tests:

### `npm test`

**Project status**

Project is complete but if I have had more time I'd like to search a different API to show global weather forecast as the current one only searches UK weather. Improve the styling of the app so the background image would change dynamicly depending the forecast info and make styling mobile friendly.
