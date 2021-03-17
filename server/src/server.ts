import App from './app';
import RootRouter from './routes/root';
import AuthRouter from './routes/auth';
import UserRouter from './routes/user';
import LogoutRouter from './routes/logout';
import MoviesRouter from './routes/movies';

const PORT = Number(process.env.PORT) || 5000;
const app = new App([AuthRouter, LogoutRouter, MoviesRouter, RootRouter, UserRouter], PORT);

app.listen();
