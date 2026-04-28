import expres from 'express';
import { newWord, translateWord, getAllTranslations } from '../controllers/translationControllers.js';

const router = expres.Router();

router.route('/').post(newWord).get(getAllTranslations);
router.route('/translate').get(translateWord);
export default router;