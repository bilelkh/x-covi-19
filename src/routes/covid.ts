import { Request, Response } from "express";
import axios from 'axios'
const baseUrl = "https://covid19.mathdro.id/api"

export class Covid {
    public routes(app): void {

        app.route('/')
            .get((req: Request, res: Response) => {
                axios.get(baseUrl).then(result => {
                    const { data } = result;
                    res.status(200).send(data);
                }, error => {
                    res.status(400).send(error);
                })
            })

        app.route('/confirmed')
            .get((req: Request, res: Response) => {
                axios.get(`${baseUrl}/confirmed`).then(result => {
                    const { data } = result;
                    res.status(200).send(data);
                }, error => {
                    res.status(400).send(error);
                })
            })


        app.route('/recovered')
            .get((req: Request, res: Response) => {
                axios.get(`${baseUrl}/recovered`).then(result => {
                    const { data } = result;
                    res.status(200).send(data);
                }, error => {
                    res.status(400).send(error);
                })
            })


        app.route('/deaths')
            .get((req: Request, res: Response) => {
                axios.get(`${baseUrl}/deaths`).then(result => {
                    const { data } = result;
                    res.status(200).send(data);
                }, error => {
                    res.status(400).send(error);
                })
            })
        app.route('/daily')
            .get((req: Request, res: Response) => {
                axios.get(`${baseUrl}/daily`).then(result => {
                    const { data } = result;
                    res.status(200).send(data);
                }, error => {
                    res.status(400).send(error);
                })
            })

        app.route('/daily/:date')
            .get((req: Request, res: Response) => {
                axios.get(`${baseUrl}/daily/:${req.params.date}`).then(result => {
                    const { data } = result;
                    res.status(200).send(data);
                }, error => {
                    res.status(400).send(error);
                })
            })
        app.route('/countries')
            .get((req: Request, res: Response) => {
                axios.get(`${baseUrl}/countries`).then(result => {
                    const { data } = result;
                    res.status(200).send(data);
                }, error => {
                    res.status(400).send(error);
                })
            })

        app.route('/countries/:country')
            .get((req: Request, res: Response) => {
                axios.get(`${baseUrl}/countries/${req.params.country}`).then(result => {
                    const { data } = result;
                    res.status(200).send(data);
                }, error => {
                    res.status(400).send(error);
                })
            })


        app.route('/countries/:country/confirmed')
            .get((req: Request, res: Response) => {
                axios.get(`${baseUrl}/countries/${req.params.country}/confirmed`).then(result => {
                    const { data } = result;
                    res.status(200).send(data);
                }, error => {
                    res.status(400).send(error);
                })
            })



        app.route('/countries/:country/recovered')
            .get((req: Request, res: Response) => {
                axios.get(`${baseUrl}/countries/${req.params.country}/recovered`).then(result => {
                    const { data } = result;
                    res.status(200).send(data);
                }, error => {
                    res.status(400).send(error);
                })
            })


        app.route('/countries/:country/recovered')
            .get((req: Request, res: Response) => {
                axios.get(`${baseUrl}/countries/${req.params.country}/deaths`).then(result => {
                    const { data } = result;
                    res.status(200).send(data);
                }, error => {
                    res.status(400).send(error);
                })
            })
    }
}