const express = require("express");

const { PORT } = require("./config/config") || 5000;
const routes = require("./routes");
const errorHandler = require('./middleware/errorHandler');

const app = express();

require("./config/mysql");

app.use("/", routes);

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));
