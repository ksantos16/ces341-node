const express = require('express');
// const mongoose = require('mongoose');
// require('dotenv').config();
const app = express();

// mongoose.connect(`mongodb://<dbuser>:<dbpassword>@ds241658.mlab.com:41658/test_db`,(err)=>{
// if(err) throw err;
// console.log("DB Connected Successfully");
// })

const port = process.env.PORT || 3001;

app.use('/', require('./routes'))

app.listen(port, () => {
    console.log(`Running on port ${port}`)
})
