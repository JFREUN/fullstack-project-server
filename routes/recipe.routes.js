const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const MealDay = require("../models/MealDay.model")
const Recipe = require("../models/Recipe.model")


router.post("/recipes",(req, res, next)=>{
    const {name, image, instruction, ingredients, cookingTime} = req.body;

    Recipe.create({name, image, instruction, ingredients, cookingTime })
    .then ((response) => res.json(response))
    .catch((err)=> res.json(err));

})

router.get("/recipes", (req,res, next)=>{
    Recipe.find()
    .then((allRecipes) => res.json(allRecipes))
    .catch((err)=> res.json(err));
})

router.get("/recipes/:recipeId", (req, res, next) => {
    const { recipeId } = req.params;

    
  if (!mongoose.Types.ObjectId.isValid(recipeId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
}

Recipe.findById(recipeId)
    .then((recipe) => res.status(200).json(recipe))
    .catch((error) => res.json(error));
});
router.put("/recipes/:recipeId", (req, res, next) => {
    const { recipeId } = req.params;
  
    if (!mongoose.Types.ObjectId.isValid(recipeId)) {
      res.status(400).json({ message: "Specified id is not valid" });
      return;
    }
  
    Recipe.findByIdAndUpdate(recipeId, req.body, { new: true })
      .then((updatedRecipe) => res.json(updatedRecipe))
      .catch((error) => res.json(error));

    });

    router.delete("/recipes/:recipeId", (req, res, next) => {
        const { recipeId } = req.params;
      
        if (!mongoose.Types.ObjectId.isValid(recipeId)) {
          res.status(400).json({ message: "Specified id is not valid" });
          return;
        }
      
        Recipe.findByIdAndRemove(recipeId)
          .then(() =>
            res.json({
              message: `Recipe with ${recipeId} is removed successfully.`,
            })
          )
          .catch((error) => res.json(error));
      });

module.exports = router;