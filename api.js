const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const apiRoutes = require('./apiRoutes/apiLinks');
const port = process.env.PORT;
if (port == null || port == "") {
    port = 6900;
}





/**
 * CALLING SOME MIDDLEWARES
 */
app.use(cors());
app.use(bodyParser.urlencoded({ urlencoded: false }));
app.use(bodyParser.json());
app.use('/taximan', apiRoutes);
app.use(express.static("public"));




/**
 * STARTING THE EXPRESS SERVER
 */
app.listen(port, () => {
    console.log("Server started on port " + port);

});