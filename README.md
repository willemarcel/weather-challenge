# Weather App

The Weather App shows the forecast for the next 5 days with 3-hour step. The application is initially configured to present the forecast to Munich, Germany.

The weather forecast data comes from the [OpenWeatherMap API](https://openweathermap.org/forecast5).

This app is built on top of [React 17](https://reactjs.org/) and [Tailwind CSS](https://tailwindcss.com/docs).

## Configuration

### Application data

The Weather Forecast API endpoint and the API access key can be defined in the `.env` file.

### Style customization

The color palette and fonts can be easily modified on the [tailwind.config.js](./tailwind.config.js) file. Check the [Tailwind CSS documentation](https://tailwindcss.com/docs/configuration) for more details.

## Available Scripts

In the project directory, you can run:

### `yarn`

Install the dependencies.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Run the lint command and launches the test runner in the interactive watch mode.\

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
