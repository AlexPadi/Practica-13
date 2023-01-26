const express=require('express');
const app=express();
//const morgan=require('morgan');
const cors=require('cors');

require('./database');

app.use(cors);
app.use(express.json());

app.use('/api-user',require('./routes/server.routes'));

app.listen('3000');

console.log('Server corriendo en el puerto', 3000);

