import express from 'express';
import router from './routes';

const app = express();
const PORT = 3000;

app.use(router)

app.listen(PORT, () => {
  console.log(`TaskApp is running at https://localhost:${PORT}`);
});