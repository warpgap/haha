const express = require("express");
const next = require("next");
const mongoose = require("mongoose");
const cors = require('cors')

const Course = require('./routes/api/Course');
require("dotenv").config();

const port = process.env.PORT || 9000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const mongooseOptions = {
  useNewUrlParser: true
};

mongoose
  .connect(process.env.MONGO_URI, mongooseOptions)
  .then(() => console.log("DB connected"));

mongoose.connection.on("error", err => {
  console.log(`DB connection error: ${err.message}`);
});

app.prepare().then(() => {
  const server = express();
  server.use(cors())
  server.use(express.json());

  /* give all Next.js's requests to Next.js server */
  // server.get("/_next/*", (req, res) => {
  //   handle(req, res);
  // });

  // server.get("/static/*", (req, res) => {
  //   handle(req, res);
  // });

 server.use("/api/course", Course);

  /* Error handling from async / await functions */
  
  server.use((err, req, res, next) => {
    const { status = 500, message } = err;
    res.status(status).json(message);
  });

  /* create custom routes with route params */
  server.get("/course/:coursename", (req, res) => {
   // const routeParams = Object.assign({}, req.params, req.query);
   const queryParams = { coursename: req.params.coursename }
    return app.render(req, res, "/tcourse", queryParams);
  });

  server.get("*", (req, res) => {
    handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`Server listening on ${port}`);
  });


}).catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })
