var express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.json('success');
})

app.listen(80, function () {
    console.log('express server has started on port 80');
});
