import express from 'express';

const app = express();
const PORT = 3000;


app.listen(PORT, () => {
  console.log(`TaskApp is running at https://localhost:${PORT}`);
});