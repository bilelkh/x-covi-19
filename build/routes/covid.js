"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const baseUrl = "https://covid19.mathdro.id/api";
class Covid {
    routes(app) {
        app.route('/')
            .get((req, res) => {
            axios_1.default.get(baseUrl).then(result => {
                const { data } = result;
                res.status(200).send(data);
            }, error => {
                res.status(400).send(error);
            });
        });
        app.route('/confirmed')
            .get((req, res) => {
            axios_1.default.get(`${baseUrl}/confirmed`).then(result => {
                const { data } = result;
                res.status(200).send(data);
            }, error => {
                res.status(400).send(error);
            });
        });
        app.route('/recovered')
            .get((req, res) => {
            axios_1.default.get(`${baseUrl}/recovered`).then(result => {
                const { data } = result;
                res.status(200).send(data);
            }, error => {
                res.status(400).send(error);
            });
        });
        app.route('/deaths')
            .get((req, res) => {
            axios_1.default.get(`${baseUrl}/deaths`).then(result => {
                const { data } = result;
                res.status(200).send(data);
            }, error => {
                res.status(400).send(error);
            });
        });
        app.route('/daily')
            .get((req, res) => {
            axios_1.default.get(`${baseUrl}/daily`).then(result => {
                const { data } = result;
                res.status(200).send(data);
            }, error => {
                res.status(400).send(error);
            });
        });
        app.route('/daily/:date')
            .get((req, res) => {
            axios_1.default.get(`${baseUrl}/daily/:${req.params.date}`).then(result => {
                const { data } = result;
                res.status(200).send(data);
            }, error => {
                res.status(400).send(error);
            });
        });
        app.route('/countries')
            .get((req, res) => {
            axios_1.default.get(`${baseUrl}/countries`).then(result => {
                const { data } = result;
                res.status(200).send(data);
            }, error => {
                res.status(400).send(error);
            });
        });
        app.route('/countries/:country')
            .get((req, res) => {
            axios_1.default.get(`${baseUrl}/countries/${req.params.country}`).then(result => {
                const { data } = result;
                res.status(200).send(data);
            }, error => {
                res.status(400).send(error);
            });
        });
        app.route('/countries/:country/confirmed')
            .get((req, res) => {
            axios_1.default.get(`${baseUrl}/countries/${req.params.country}/confirmed`).then(result => {
                const { data } = result;
                res.status(200).send(data);
            }, error => {
                res.status(400).send(error);
            });
        });
        app.route('/countries/:country/recovered')
            .get((req, res) => {
            axios_1.default.get(`${baseUrl}/countries/${req.params.country}/recovered`).then(result => {
                const { data } = result;
                res.status(200).send(data);
            }, error => {
                res.status(400).send(error);
            });
        });
        app.route('/countries/:country/recovered')
            .get((req, res) => {
            axios_1.default.get(`${baseUrl}/countries/${req.params.country}/deaths`).then(result => {
                const { data } = result;
                res.status(200).send(data);
            }, error => {
                res.status(400).send(error);
            });
        });
    }
}
exports.Covid = Covid;
