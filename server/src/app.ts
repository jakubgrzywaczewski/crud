import * as express from 'express';
import * as cors from 'cors';
import * as helmet from 'helmet';

import { json } from 'body-parser';

class App {
  public app: express.Application;
  public port: number;

  constructor(routes, port: number) {
    this.app = express();
    this.port = port;

    this.initializeMiddlewares();
    this.initializeRoutes(routes);
  }

  private initializeMiddlewares() {
    this.app.use(json());
    this.app.use(cors());
    this.app.use(helmet());
  }

  private initializeRoutes(routes) {
    routes.forEach((route) => {
      this.app.use(route);
    });
  }

  public listen(): void {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }
}

export default App;
