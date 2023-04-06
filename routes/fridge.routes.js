const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Ingredient = require("../models/Ingredient.model")





router.get("/ingredients", (req, res, next) => {
    Ingredient.find()
      .then((allIngredients) => res.json(allIngredients))
      .catch((err) => res.json(err));
  });

  router.get("/search", (req, res, next) => {
    Ingredient.find({ name: { $regex: req.query.name } })
      .then((response) => {
        res.json(response);
      })
      .catch((error) => res.json(error));
  });

  module.exports = router;