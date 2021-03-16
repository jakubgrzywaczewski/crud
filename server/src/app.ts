import * as express from 'express';
import * as cors from 'cors';
import * as helmet from 'helmet';
import * as session from 'express-session';
import * as passport from 'passport';

import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { json } from 'body-parser';

import db from './db/index';
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from './common/env';
import ROUTES from './common/constants';

class App {
  public app: express.Application;
  public port: number;

  constructor(routes: express.Router[], port: number) {
    this.app = express();
    this.port = port;

    this.initializeMiddlewares();
    this.initializeGoogleAuth();
    this.initializeRoutes(routes);
    this.initializeDB();
  }

  private initializeMiddlewares() {
    this.app.use(json());
    this.app.use(
      cors({
        origin: ROUTES.DOMAIN,
        credentials: true,
      }),
    );
    this.app.use(
      session({
        secret: 'secretcode',
        resave: true,
        saveUninitialized: true,
      }),
    );
    this.app.use(helmet());
    this.app.use(passport.initialize());
    this.app.use(passport.session());

    passport.serializeUser((user, done) => done(null, user));
    passport.deserializeUser((user, done) => done(null, user));
  }

  private initializeGoogleAuth() {
    passport.use(
      new GoogleStrategy(
        {
          clientID: GOOGLE_CLIENT_ID,
          clientSecret: GOOGLE_CLIENT_SECRET,
          callbackURL: ROUTES.GOOGLE_CALLBACK,
        },
        function (accessToken: string, refreshToken: string, profile: any, cb: any) {
          console.log(profile);
          cb(null, profile);
        },
      ),
    );
  }

  private initializeRoutes(routes) {
    routes.forEach((route) => {
      this.app.use(route);
    });
  }

  private initializeDB() {
    db.initializeMongo();
  }

  public listen(): void {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }
}

export default App;
