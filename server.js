const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const path = require("path");
//dotev config
dotenv.config();
//mongodb connection
connectDB();
//rest object
const app = express();

//middlewares
app.use(express.json());
app.use(morgan("dev"));

//routes
// app.get("/", (req, res) => {
//   res.status(200).send({
//     message: "server runing",
//   });
// });

app.use("/api/vi/user", require("./routes/userRoutes"));
app.use("/api/vi/admin", require("./routes/adminRoutes"));
app.use("/api/vi/doctor", require("./routes/doctorRoutes"));
//static files
app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
//port
const port = process.env.PORT || 8084;
//listen port
app.listen(port, () => {
  console.log(
    `Server Runing in ${process.env.NODE_MODE} Mode on port ${process.env.PORT}`
      .bgCyan.white
  );
});
