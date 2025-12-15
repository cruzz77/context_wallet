const express = require('express');
const router = express.Router();
const {
    createContext,
    getContexts,
    getContextById,
    updateContext,
    deleteContext,
    searchContext,
} = require('../controllers/contextController');
const { protect } = require('../middlewares/authMiddleware');

router.use(protect); // All context routes are protected

// NOTE: Specific routes (like /search) must come BEFORE parametric routes (/:id)
router.get('/search', searchContext);

router.route('/').get(getContexts).post(createContext);
router.route('/:id').get(getContextById).put(updateContext).delete(deleteContext);

module.exports = router;
