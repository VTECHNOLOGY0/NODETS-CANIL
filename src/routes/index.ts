import express from 'express';
import * as PageController from '../controllers/pageController';
import * as SearchController from '../controllers/searchController';

const router = express.Router();

router.get('/', PageController.home);
router.get('/cachorros', PageController.dogs);
router.get('/gatos', PageController.cats);
router.get('/peixes', PageController.fishes);

router.get('/pesquisa', SearchController.search);

export default router;