const axios = require('axios');
const list_url = 'https://www1.nseindia.com/corporates/listDir/getListDirectEQ.jsp?Symbol=INFY&Industry=&Period=More%20than%205%20Years&symbol=INFY&listingPeriod=More%20than%205%20Years&segment=EQUITIES';



function getListComp() {
    return axios.get(list_url, {
      headers: {
        Referer: 'https://www1.nseindia.com/corporates/listDir/listDirectory.html',
        'X-Requested-With': 'XMLHttpRequest'
      }
    }).catch(error => {
        console.log(error);
    });
  }


var nse = {
      getListComp: getListComp
  }

  module.exports = nse;