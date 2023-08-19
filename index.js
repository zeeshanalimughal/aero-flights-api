const express = require("express");
const axios = require("axios");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT || 4000;
const flightAwareApiBaseUrl = process.env.AERO_API_BASE_URL
// Middleware to parse JSON
app.use(express.json());

// Function to call FlightAware API
async function callFlightAwareApi(
  path,
  headers = {
    "x-apikey": process.env.AERO_FLIGHT_API_KEY,
  }
) {
  try {
    const response = await axios.get(
      `${flightAwareApiBaseUrl}${path}`,
      { headers }
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}

// Define routes

// Flights
app.get("/flights/:id/map", async (req, res) => {
  const { id } = req.params;
  try {
    const data = await callFlightAwareApi(`/flights/${id}/map`);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/flights/:id/position", async (req, res) => {
  const { id } = req.params;
  try {
    const data = await callFlightAwareApi(`/flights/${id}/position`);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/flights/:id/route", async (req, res) => {
  const { id } = req.params;
  try {
    const data = await callFlightAwareApi(`/flights/${id}/route`);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/flights/:id/track", async (req, res) => {
  const { id } = req.params;
  try {
    const data = await callFlightAwareApi(`/flights/${id}/track`);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/flights/:ident", async (req, res) => {
  const { ident } = req.params;
  try {
    const data = await callFlightAwareApi(`/flights/${ident}`);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/flights/:ident/canonical", async (req, res) => {
  const { ident } = req.params;
  try {
    const data = await callFlightAwareApi(`/flights/${ident}/canonical`);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/flights/search", async (req, res) => {
  try {
    const data = await callFlightAwareApi("/flights/search");
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/flights/search/advanced", async (req, res) => {
  try {
    const data = await callFlightAwareApi("/flights/search/advanced");
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/flights/search/count", async (req, res) => {
  try {
    const data = await callFlightAwareApi("/flights/search/count");
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/flights/search/positions", async (req, res) => {
  try {
    const data = await callFlightAwareApi("/flights/search/positions");
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Foresight
app.get("/foresight/flights/:id/position", async (req, res) => {
  const { id } = req.params;
  try {
    const data = await callFlightAwareApi(`/foresight/flights/${id}/position`);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/foresight/flights/:ident", async (req, res) => {
  const { ident } = req.params;
  try {
    const data = await callFlightAwareApi(`/foresight/flights/${ident}`);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/foresight/flights/search/advanced", async (req, res) => {
  try {
    const data = await callFlightAwareApi("/foresight/flights/search/advanced");
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Airports
app.get("/airports", async (req, res) => {
  try {
    const data = await callFlightAwareApi("/airports");
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/airports/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const data = await callFlightAwareApi(`/airports/${id}`);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/airports/:id/canonical", async (req, res) => {
  const { id } = req.params;
  try {
    const data = await callFlightAwareApi(`/airports/${id}/canonical`);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/airports/:id/delays", async (req, res) => {
  const { id } = req.params;
  try {
    const data = await callFlightAwareApi(`/airports/${id}/delays`);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/airports/:id/flights", async (req, res) => {
  const { id } = req.params;
  try {
    const data = await callFlightAwareApi(`/airports/${id}/flights`);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add more routes here...

// Operators
app.get("/operators", async (req, res) => {
  try {
    const data = await callFlightAwareApi("/operators");
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/operators/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const data = await callFlightAwareApi(`/operators/${id}`);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/operators/:id/canonical", async (req, res) => {
  const { id } = req.params;
  try {
    const data = await callFlightAwareApi(`/operators/${id}/canonical`);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/operators/:id/flights", async (req, res) => {
  const { id } = req.params;
  try {
    const data = await callFlightAwareApi(`/operators/${id}/flights`);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add more routes here...

// History
app.get("/history/aircraft/:registration/last_flight", async (req, res) => {
  const { registration } = req.params;
  try {
    const data = await callFlightAwareApi(
      `/history/aircraft/${registration}/last_flight`
    );
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/history/flights/:id/map", async (req, res) => {
  const { id } = req.params;
  try {
    const data = await callFlightAwareApi(`/history/flights/${id}/map`);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/history/flights/:id/route", async (req, res) => {
  const { id } = req.params;
  try {
    const data = await callFlightAwareApi(`/history/flights/${id}/route`);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/history/flights/:id/track", async (req, res) => {
  const { id } = req.params;
  try {
    const data = await callFlightAwareApi(`/history/flights/${id}/track`);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/history/flights/:ident", async (req, res) => {
  const { ident } = req.params;
  try {
    const data = await callFlightAwareApi(`/history/flights/${ident}`);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add more routes here...

// Miscellaneous
app.get("/aircraft/:ident/owner", async (req, res) => {
  const { ident } = req.params;
  try {
    const data = await callFlightAwareApi(`/aircraft/${ident}/owner`);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/aircraft/types/:type", async (req, res) => {
  const { type } = req.params;
  try {
    const data = await callFlightAwareApi(`/aircraft/types/${type}`);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/disruption_counts/:entity_type", async (req, res) => {
  const { entity_type } = req.params;
  try {
    const data = await callFlightAwareApi(`/disruption_counts/${entity_type}`);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/disruption_counts/:entity_type/:id", async (req, res) => {
  const { entity_type, id } = req.params;
  try {
    const data = await callFlightAwareApi(
      `/disruption_counts/${entity_type}/${id}`
    );
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/schedules/:date_start/:date_end", async (req, res) => {
  const { date_start, date_end } = req.params;
  try {
    const data = await callFlightAwareApi(
      `/schedules/${date_start}/${date_end}`
    );
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Alerts
// Alerts
app.get("/alerts", async (req, res) => {
  try {
    const data = await callFlightAwareApi("/alerts");
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/alerts", async (req, res) => {
  const alertData = req.body;
  try {
    const response = await axios.post(
      `${flightAwareApiBaseUrl}/alerts`,
      alertData
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/alerts/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const data = await callFlightAwareApi(`/alerts/${id}`);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put("/alerts/:id", async (req, res) => {
  const { id } = req.params;
  const alertData = req.body;
  try {
    const response = await axios.put(
      `${flightAwareApiBaseUrl}/alerts/${id}`,
      alertData
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete("/alerts/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.delete(
      `${flightAwareApiBaseUrl}/alerts/${id}`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/alerts/endpoint", async (req, res) => {
  try {
    const data = await callFlightAwareApi("/alerts/endpoint");
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put("/alerts/endpoint", async (req, res) => {
  const endpointData = req.body;
  try {
    const response = await axios.put(
      `${flightAwareApiBaseUrl}/alerts/endpoint`,
      endpointData
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete("/alerts/endpoint", async (req, res) => {
  try {
    const response = await axios.delete(
      `${flightAwareApiBaseUrl}/alerts/endpoint`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhot:${port}`);
});
