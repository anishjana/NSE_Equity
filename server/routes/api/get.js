const express= require('express');
const router = express.Router();
const nse = require('./nse.js');



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

router.post("/actions", (req, res, next) => {
  const Symbol=req.body.symbol;
  // console.log(Symbol)
  nse.actions(Symbol)
      .then(function (json_response) {
        const str = JSON.stringify(json_response.data)
        const myObject = JSON.parse(str)
        res.send(myObject)
        
      });
  });
  
  //   router.get("/actions", (req,res,next) => {
  //     nse.actions()
  //     .then(function (myObject) {
  //       res.send(myObject.data.rows);
  //     });
  // });




module.exports = router;