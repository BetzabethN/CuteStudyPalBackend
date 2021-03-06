const path = require("path");
const express = require("express");

const PORT = process.env.PORT || 3000;

const app = express();


// have node serve files for built react app
app.use(express.static(path.resolve(__dirname, '../client/build')));


// handle GEt requests to /api route
app.get("/", (req, res) => {
    res.json({message: "Hello from server!"});
});


// all other GET requests not handled before will return react app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});


//app.listen(PORT, () => {
  //console.log(`Server listening on ${PORT}`);
//});