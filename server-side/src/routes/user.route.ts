import {Router} from 'express'
import { 
    createUser,
    sample
} from '../controllers/user.controller'

const router = Router();

router.post('/api/user', createUser);
router.get('/sample', sample)

export default router;