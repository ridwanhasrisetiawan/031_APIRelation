
const genreRoute = require('./routes/genreRoute');


app.use("/api", require("./routes/api"));
app.use("/api/genres", genreRoute);

