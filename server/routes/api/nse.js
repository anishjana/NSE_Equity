const axios = require('axios');

function getResults() {
  const url = `https://www1.nseindia.com/corporates/listDir/getListDirectEQ.jsp?Symbol=&Industry=&Period=Last%201%20month&symbol=&listingPeriod=Last%201%20month&segment=EQUITIES`
  return axios.get(url,  {
    headers: {
      Referer: 'https://www1.nseindia.com/corporates/listDir/listDirectory.html',
      'X-Requested-With': 'XMLHttpRequest'
    }
    }).catch(err => {
      console.log(err);
    })
}

function getListComp(Symbol,Period) {
  const list_url = `https://www1.nseindia.com/corporates/listDir/getListDirectEQ.jsp?Symbol=${Symbol}&Industry=&Period=${Period}&symbol=${Symbol}&listingPeriod=${Period}&segment=EQUITIES`
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
      getResults: getResults,
      getListComp: getListComp
  }

  module.exports = nse;