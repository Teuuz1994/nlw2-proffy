import { Router } from 'express';

const routes = Router();
import ClassesController from './controllers/CreateClassesController';

const classesControler = new ClassesController();

routes.post('/classes', classesControler.create);
routes.get('/classes', classesControler.index);

export default routes;
