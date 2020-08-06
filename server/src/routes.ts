import { Router } from 'express';

import ClassesController from './controllers/CreateClassesController';
import ConnectionsController from './controllers/ConnectionsController';

const routes = Router();

const classesControler = new ClassesController();
const connectionsController = new ConnectionsController();

routes.post('/classes', classesControler.create);
routes.get('/classes', classesControler.index);

routes.get('/connections', connectionsController.index);
routes.post('/connections', connectionsController.create);

export default routes;
