const express = require('express');
const {
  createPage,
  getAllPages,
  getSinglePage,
} = require('../controllers/pageController');
const router = express.Router();

router.post('/create', createPage);
router.get('/', getAllPages);
router.get('/:id', getSinglePage);

module.exports = router;
