import { Router } from 'express';
import * as passport from 'passport';

const AuthRouter: Router = Router();

AuthRouter.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }));

AuthRouter.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  function (req, res) {
    res.redirect('http://localhost:3000');
  },
);

export default AuthRouter;
