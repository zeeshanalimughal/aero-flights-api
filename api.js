const axios = require("axios");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

mongoose.connect(process.env.MONGO_URL);
const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB.");
});

const flightSchema = new mongoose.Schema({
  data: { type: Object },
});

const Flight = mongoose.model("Flight", flightSchema);

async function callFlightAwareApi(ident) {
  const url = `${process.env.AERO_API_BASE_URL}/flights/${ident}?ident_type=fa_flight_id`;

  const headers = {
    "x-apikey": process.env.AERO_FLIGHT_API_KEY,
  };

  try {
    const response = await axios.get(url, { headers });
    return response.data;
  } catch (error) {
    console.error("Error calling FlightAware API:", error.response.data);
    return null;
  }
}

(async () => {
  const flightIdent = "UAL4";
  const flightData = await callFlightAwareApi(flightIdent);
  console.log(flightData?.flights.length);

  if (flightData?.flights.length) {
    for (let i = 0; i < flightData?.flights.length; i++) {
      const newFlight = new Flight({ data: flightData?.flights[i] });
      await newFlight.save();
    }
  } else {
    console.log("No data to save.");
    mongoose.connection.close();
  }
})();
