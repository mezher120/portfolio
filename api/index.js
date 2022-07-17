const server = require('./src/app.js');
require('dotenv').config();
const {PORT} = process.env;


server.get('/');

server.listen(process.env.PORT, () => {
    console.log(`listening in ${PORT}`);
});