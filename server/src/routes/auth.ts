import { Router } from 'express';
import * as passport from 'passport';

import ROUTES from '../common/constants';

const AuthRouter: Router = Router();

AuthRouter.get(ROUTES.GOOGLE_AUTH, passport.authenticate('google', { scope: ['profile'] }));

AuthRouter.get(
  ROUTES.GOOGLE_CALLBACK,
  passport.authenticate('google', { failureRedirect: '/login' }),
  function (req, res) {
    res.redirect(ROUTES.DOMAIN);
  },
);

export default AuthRouter;
