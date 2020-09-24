import express from 'express';

import routes from './routes';

const app = express();

// Set up middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

// Register routes
app.use('/api/timeline', routes.timeline);
app.use('/api/user', routes.user);

export default app;
