const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const recipeSchema = new Schema({
  name: { type: String, unique: true, required: true },
  image: { type: String, required: true },
  ingredients: { type: String, required: true },
  instruction: { type: String, required: true },
  cookingTime: { type: Number, required: true },
  userId: { type: Schema.Types.ObjectId, ref: "User" }
});

module.exports = model("Recipe", recipeSchema);