
const express = require('express');
const webpush = require('web-push');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'client')));

app.use(bodyParser.json());

const publicVapidKey = 'BMdD-XnbKsYWBzV2UP7MCOSW8p5cAPh-3Q7f2XI5GVwpme1R1XJH4K0xWFazlfKKW8OYQVmPLufejjo9M6Ga-Os';
const privateVapidKey = 'hfUqVnvDfTIdMhei8Z0fDhF5jsP1Kx2lcK3RT6tuf1c';

webpush.setVapidDetails('mailto:test@test.com', publicVapidKey, privateVapidKey);

app.post('/subscribe', (req, res) =>{
    const subscription = req.body;

    res.status(201).json({});

    console.log('Yes')

    const payload = JSON.stringify({title: 'Push Test'})

    webpush.sendNotification(subscription, payload).catch(err => console.error(err));
});

const port = 5000;



app.listen(port, () => console.log(`Example app listening on port ${port}!`)) 