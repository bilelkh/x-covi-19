import * as express from 'express';
import * as bodyParser from 'body-parser'; //use to parse the form data that you pass in the request
import { Covid } from "./routes/covid";

class App {

     public app: express.Application;

     public covidRoutes: Covid = new Covid();

     constructor() {
          this.app = express(); //TK
          this.config();

          this.covidRoutes.routes(this.app);
     }

     private config(): void {
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
})