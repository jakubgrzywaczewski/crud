import App from './app';
import RootRouter from './routes/root';
import AuthRouter from './routes/auth';
import UserRouter from './routes/user';

const PORT = Number(process.env.PORT) || 5000;
const app = new App([AuthRouter, RootRouter, UserRouter], PORT);

app.listen();
