import app from './config/express';

const PORT = 6000;

app.listen(PORT, () => {
  console.log(`Started listening on port ${PORT}`);
});
