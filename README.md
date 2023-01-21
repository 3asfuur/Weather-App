### Weather Journal App

This is a simple web app that allows users to view the current weather for a given zip code and add their own thoughts about the weather. The app makes use of the OpenWeatherMap API to retrieve the weather data and an express server to store the user's input.

### Getting Started

- Clone this repository or download the zip file.
- Run npm install to install the required dependencies.
- Enter your OpenWeatherMap API key in the apiKey variable in the website/app.js file.
- Run node server.js to start the server.
- Open index.html in your web browser to view the app.
  Using the App
- To view the weather for a particular zip code, enter the zip code in the input field and click the "Generate" button. The current temperature and date will be displayed, and you can add your own thoughts about the weather in the "Feelings" input field. Click the "Add" button to submit your response and see it displayed on the page.

### Built With

*OpenWeatherMap API - used to retrieve weather data
*Express - used to set up the server and handle routes
*Body-Parser - used to parse request bodies
*Cors - used to handle cross-origin resource sharing

### Author

Mohamed Alhinawi - developed the code for this app
