const express = require("express");
csrfRoute = express.Router();

csrfRoute.get("/", (req, res)=>{
  res.json({csrfToken: req.csrfToken()})
});

module.exports = csrfRoute;