const express = require("express");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3000;

// Endpoint do pobierania liczby postów
app.get("/posts/count", async (req, res) => {
  try {
    // Pobranie danych z JSONPlaceholder API
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    // Zwrócenie liczby postów
    res.json({ count: response.data.length });
  } catch (error) {
    // Obsługa błędów
    console.error("Błąd podczas pobierania danych:", error);
    res.status(500).json({ error: "Wystąpił błąd podczas pobierania danych." });
  }
});

app.listen(PORT, () => {
  console.log(`Serwer na porcie ${PORT}`);
});
