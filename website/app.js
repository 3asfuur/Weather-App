const baseURL = "https://api.openweathermap.org/data/2.5/weather?zip=";
const API_KEY = ",&appid=83111b78df694580970d1bfa2aa43833&units=metric";

// Function to get user input
function getUserInput() {
  // Get user input
  const zipCode = document.getElementById("zip-input").value;
  const feelings = document.getElementById("feelings-input").value;

  // Return user input as an object
  return {
    zipCode,
    feelings,
  };
}

async function getAndPostData(zipCode, feelings, currentDate) {
  // Make GET request to OpenWeatherMap API
  const weatherData = await getWeatherData(zipCode);
  // Return early if weatherData is null
  if (!weatherData) {
    return;
  }
  // Extract necessary data from API response
  const temperature = weatherData.main.temp;
  // Object with data to be sent to server
  const data = {
    temperature,
    currentDate,
    feelings,
  };
  // Make POST request to server with data
  const newData = await postData("/addData", data);
  // Update UI with data from POST request
  updateUI(newData);
}

// Async function to make GET request to OpenWeatherMap API
async function getWeatherData(zipCode) {
  try {
    const res = await fetch(`${baseURL}${zipCode}${API_KEY}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

// Async function to make POST request to server
async function postData(path, data) {
  const res = await fetch(path, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  try {
    const newData = await res.json();
    return newData;
  } catch (error) {
    console.log(error);
  }
}

// Async function to update UI
function updateUI(data) {
  // Convert temperature from Celsius to Fahrenheit
  const temperatureF = (data.temperature * 9) / 5 + 32;

  // Select necessary elements and update their values
  document.getElementById(
    "date-display"
  ).innerHTML = `${data.currentDate}`;
  document.getElementById(
    "temperature"
  ).innerHTML = ` ${temperatureF}°F`;
  document.getElementById(
    "user-feelings"
  ).innerHTML = `Feelings: ${data.userResponse}`;
}

// Event listener for generate button
document
  .getElementById("generate-button")
  .addEventListener("click", async () => {
    // Get user input
    const { zipCode, feelings } = getUserInput();
    // Get current date
    const date = new Date();
    const currentDate = `${date.getFullYear()}-${
      date.getMonth() + 1
    }-${date.getDate()}`;
    // Make GET and POST requests with user input
    await getAndPostData(zipCode, feelings, currentDate);
  });
