const express= require('express');
const axios = require('axios');

const router = express.Router();
const nse = require('./nse.js');
const DomParser = require('dom-parser');
const parser = new DomParser();
// const fetch = require('node-fetch');




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
  
router.post("/announce", (req, res, next) => {
  const Symbol=req.body.symbol;
  // console.log(Symbol)
  nse.announces(Symbol)
      .then(function (json_response) {
        const str = JSON.stringify(json_response.data)
        const myObject = JSON.parse(str)
        res.send(myObject)
        
      });
  });

  router.post('/corpinfo', (req,res,next)=> {
    const Symbol='TCS';
  // console.log(Symbol)
  nse.corpinfo(Symbol)
      .then(response => response.data)
      .then(html => {
        var doc = parser.parseFromString(html, "text/html");
        res.send(doc.rawHTML);
      })
      .catch(function(err) {
        console.log("Failed to fetch page: ", err);
      });

  });




module.exports = router;