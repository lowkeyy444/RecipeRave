const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');
const { restrictToLoggedinUserOnly } = require('../../middlewares/auth');

/**
 * App Routes 
*/
router.get('/', recipeController.homepage);
router.get('/recipe/:id', recipeController.exploreRecipe );
router.get('/categories', recipeController.exploreCategories);
router.get('/categories/:id', recipeController.exploreCategoriesById);
router.post('/search', restrictToLoggedinUserOnly, recipeController.searchRecipe);
router.get('/explore-latest', recipeController.exploreLatest);
router.get('/explore-random', recipeController.exploreRandom);
router.get('/submit-recipe', restrictToLoggedinUserOnly, recipeController.submitRecipe);
router.post('/submit-recipe', recipeController.submitRecipeOnPost);
router.get('/signup', (req, res)=>{
    return res.render("signup");
});
router.get('/login', (req, res)=>{
    return res.render("login");
});

 
module.exports = router;