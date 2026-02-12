const express = require("express");
const app = express();

app.use(express.text({ type: "*/*" }));

let latestSignal = "";

// TradingView POST
app.post("/", (req, res) => {
    latestSignal = req.body.trim();
    console.log("Received:", latestSignal);
    res.send("ok");
});

// MT5 GET
app.get("/", (req, res) => {
    res.send(latestSignal);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server running on port", PORT);
});
