const express = require("express");
const mongooseInitialize = require("./dbConfig");
const mentorsRouter = require("./routes/mentorsRoutes");

const app = express();
const port = 3001;

mongooseInitialize()
  .then(() => {
    app.use(express.json());
    app.use("/api", mentorsRouter);

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Error initializing MongoDB:", err);
  });
