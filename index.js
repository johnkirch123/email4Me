const express = require("express");
const keys = require("./config/keys");
const mongoose = require("mongoose");
require("./services/passport");

mongoose.connect(keys.MongoURI, () => {
  console.log(`Mongo Database connected...`);
});

const app = express();

require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
