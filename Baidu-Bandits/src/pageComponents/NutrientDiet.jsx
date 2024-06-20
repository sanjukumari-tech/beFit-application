// src/NutrientDiet.js
import React, { useState, useEffect } from 'react';
// import './NutrientDiet.css';

const meals = [
  { name: 'Breakfast', items: ['Eggs', 'Toast', 'Coffee'] },
  { name: 'Lunch', items: ['Salad', 'Chicken', 'Juice'] },
  { name: 'Dinner', items: ['Soup', 'Steak', 'Wine'] },
];

const NutrientDiet = () => {
  const [currentMealIndex, setCurrentMealIndex] = useState(0);
  const [completedItems, setCompletedItems] = useState({
    breakfast: [],
    lunch: [],
    dinner: [],
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMealIndex((prevIndex) => (prevIndex + 1) % meals.length);
    }, 10800000); // 3 hours in milliseconds

    return () => clearInterval(interval);
  }, []);

  const handleCheckboxChange = (mealName, item) => {
    setCompletedItems((prevItems) => {
      const meal = mealName.toLowerCase();
      const updatedItems = prevItems[meal].includes(item)
        ? prevItems[meal].filter((i) => i !== item)
        : [...prevItems[meal], item];

      return {
        ...prevItems,
        [meal]: updatedItems,
      };
    });
  };

  const currentMeal = meals[currentMealIndex];
  const mealKey = currentMeal.name.toLowerCase();

  return (
    <div className="nutrient-diet-container">
      <h2>{currentMeal.name}</h2>
      <ul>
        {currentMeal.items.map((item, index) => (
          !completedItems[mealKey].includes(item) && (
            <li key={index}>
              <label>
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange(currentMeal.name, item)}
                />
                {item}
              </label>
            </li>
          )
        ))}
      </ul>
    </div>
  );
};

export default NutrientDiet;
