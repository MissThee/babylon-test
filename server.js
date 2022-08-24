const express = require('express');
const compression = require('compression') //gzip
const app = express();
const port = 3000

app.use(compression());
app.use(express.static(__dirname))
app.listen(port, function () {
    console.log(`listening on port ${port}!`);
    console.log(`view http://localhost:${port}/docs`);
});
