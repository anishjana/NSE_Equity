const express = require('express');
const bodyParser= require('body-parser');
const cors= require('cors');
const app = express();

app.use(bodyParser.json());
app.use (cors());
app.use(bodyParser.urlencoded({ extended: true }));

// routes

const posts = require('./routes/api/get.js');
app.use('/', posts );

app.post('/api', (req,res) => {
    const Period_temp = req.body.period;
    const Period = Period_temp.replace(/ /g,"&");
    res.send({
        message: `${req.body.symbol} - ${req.body.period} `,
        url: `https://www1.nseindia.com/corporates/listDir/getListDirectEQ.jsp?Symbol=${req.body.symbol}&Industry=&Period=${Period}&symbol=${req.body.symbol}&listingPeriod=${Period}&segment=EQUITIES`

    })
});

// server start config
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Running on ${port}`));