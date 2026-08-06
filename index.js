const express = require("express");
const app = express();
const PORT = 3000;
const genreRoute = require('./routes/genreRoute');
const connectDatabase = require('./config/db');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", require("./routes/api"));
app.use("/api/genres", genreRoute);

async function startServer() {
    await connectDatabase();
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}

startServer();