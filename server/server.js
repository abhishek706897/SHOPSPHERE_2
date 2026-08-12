const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('Shopsphere server chal raha hai! 🚀');
});



app.listen(5000, () => {
    console.log(`✅ Server port 5000 par chal raha hai`);
});