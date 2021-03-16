import App from './app';
import RootRouter from './routes/root';
import AuthRouter from './routes/auth';

const PORT = Number(process.env.PORT) || 5000;
const app = new App([AuthRouter, RootRouter], PORT);

app.listen();
