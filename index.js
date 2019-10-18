const express=require('express');
const app= new express();
app.get('/', function (req, res) {
	  res.send('Hello World!');
});

app.listen(8180, function () {
	  console.log('Example app listening on port 8180!');
});
