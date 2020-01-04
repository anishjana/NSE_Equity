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
  const list_url = `https://www.nseindia.com/corporates/listDir/getListDirectEQ.jsp?Symbol=${Symbol}&Industry=&Period=${Period}&symbol=${Symbol}&listingPeriod=${Period}&segment=EQUITIES`
    return axios.get(list_url, {
      headers: {
        Referer: 'https://www1.nseindia.com/corporates/listDir/listDirectory.html',
        'X-Requested-With': 'XMLHttpRequest'
      }
    }).catch(error => {
        console.log(error);
    });
  }

  function actions(Symbol) {
    let url_action = `https://www1.nseindia.com/live_market/dynaContent/live_watch/get_quote/companySnapshot/getCorporateActions${Symbol}.json`
    return axios.get(url_action, {
      headers: {
        // Referer: 'https://www.nseindia.com/live_market/dynaContent/live_watch/get_quote/GetQuote.jsp?symbol=INFY&illiquid=0&smeFlag=0&itpFlag=0',
        'X-Requested-With': 'XMLHttpRequest',
        Host: 'www1.nseindia.com',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    }).catch(errors => {
      console.log(errors)
    })
  }
  
  function announces(Symbol) {
    let url_announce = `https://www1.nseindia.com/live_market/dynaContent/live_watch/get_quote/companySnapshot/getAnnouncements${Symbol}.json`
    return axios.get(url_announce, {
      headers: {
        // Referer: 'https://www.nseindia.com/live_market/dynaContent/live_watch/get_quote/GetQuote.jsp?symbol=INFY&illiquid=0&smeFlag=0&itpFlag=0',
        'X-Requested-With': 'XMLHttpRequest',
        Host: 'www1.nseindia.com',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    }).catch(errors => {
      console.log(errors)
    })
  }
  function corpinfo(Symbol,Series) {
    let url_info= `https://www1.nseindia.com/marketinfo/companyTracker/compInfo.jsp?symbol=${Symbol}&series=${Series}`;
    console.log(url_info)
    return axios.get(url_info).catch(errors => {
      console.log(errors)
    })
  }

  function series(Symbol){
    let url_info= `https://www.nseindia.com/api/quote-equity?symbol=${Symbol}`;
    console.log(url_info)
    return axios.get(url_info).catch(errors => {
      console.log(errors)
    })
  }
  

var nse = {
      getResults: getResults,
      getListComp: getListComp,
      actions: actions,
      announces: announces,
      corpinfo: corpinfo,
      series: series
  }

  module.exports = nse;