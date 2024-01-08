const express = require("express");
const path = require("path");
const app = express();

const mainRouter = require("./routes/mainRouter");

app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "../public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server in port: ${PORT}`);
});

app.use(mainRouter);
