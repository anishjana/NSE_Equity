const express= require('express');
const router = express.Router();
const nse = require('./nse.js')


router.get("/results", (req, res, next) => {
    nse.getResults()
      .then(function (server_response) {
        const json_response = server_response.data.replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g, '"$2": '); 
        const myObject = JSON.parse(json_response);
        res.send(myObject);
      });
  });

router.post("/api", (req, res, next) => {
  const Symbol_temp=req.body.symbol;
  const Symbol = Symbol_temp.toUpperCase();
  const Period_temp = req.body.period;
  const Period = Period_temp.replace(/ /g,"%20");
    nse.getListComp(Symbol,Period)
      .then(function (server_response) {
        const json_response = server_response.data.replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g, '"$2": '); 
        const myObject = JSON.parse(json_response);
        res.send(myObject);
        
      });
  });
  


module.exports = router;