const server = require('./src/app.js');

const port = 3001;

server.get('/');

server.listen(port, () => {
    console.log(`listening in ${port}`);
});