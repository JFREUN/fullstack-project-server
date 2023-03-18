const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const mealDaySchema = new Schema({
  day: {
    type: String,
    enum: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"],
  },
  mealType: {
    type: String,
    enum: ["Breakfast","Lunch","Dinner"]
  },
  recipe: { type: Schema.Types.ObjectId, ref: "Recipe" }
});

module.exports = model("Mealday", mealDaySchema);