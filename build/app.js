"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser"); //use to parse the form data that you pass in the request
const covid_1 = require("./routes/covid");
class App {
    constructor() {
        this.covidRoutes = new covid_1.Covid();
        this.app = express(); //TK
        this.config();
        this.covidRoutes.routes(this.app);
    }
    config() {
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({
            extended: false
        }));
    }
}
const app = new App().app;
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
});
