const mongoose = require('mongoose');

const MealSchema = new mongoose.Schema({
  name: { type: String, required: true },
  mealType: { type: String, required: true },
  calories: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Meal = mongoose.model('Meal', MealSchema);

module.exports = Meal;
