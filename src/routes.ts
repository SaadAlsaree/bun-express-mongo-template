import { type Application } from 'express';

import { serverAdapter } from '@service/queues/base.queue';
import { valueRoutes } from '@value/routes/value.routes';




const BASE_PATH = '/api/v1';

export default (app: Application) => {
  const routes = () => {
    // Queues routes
    app.use('/queues', serverAdapter.getRouter());

    // Values routes
    app.use(BASE_PATH, valueRoutes.routes());


  };
  routes();
};
