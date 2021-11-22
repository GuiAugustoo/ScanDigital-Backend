const express = require('express'); 
const server = express(); 
const cors = require('cors'); 
const expressJwt = require('express-jwt');

server.use(cors())
server.use(express.json());

const Routes = require('./routes/routes'); 
server.use('/scandigital', Routes);

server.listen(3000, () => {
    console.log('API ONLINE');
});