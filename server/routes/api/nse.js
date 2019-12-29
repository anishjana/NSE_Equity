const axios = require('axios');



function getListComp(Symbol,Period) {
  const list_url = `https://www1.nseindia.com/corporates/listDir/getListDirectEQ.jsp?Symbol=${Symbol}&Industry=&Period=${Period}&symbol=${Symbol}&listingPeriod=${Period}&segment=EQUITIES`
  console.log(list_url)
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