const express= require('express');
const router = express.Router();
const nse = require('./nse.js')


router.get("/nse", (req, res, next) => {
    nse.getQuoteInfo()
      .then(function (response) {
        console.log(response.data);
      });
  });

router.get("/nse/get_list", (req, res, next) => {
    nse.getListComp()
      .then(function (server_response) {
        const json_response = server_response.data.replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g, '"$2": '); 
        const myObject = JSON.parse(json_response);
        res.send(myObject);
        
      });
  });
  


module.exports = router;