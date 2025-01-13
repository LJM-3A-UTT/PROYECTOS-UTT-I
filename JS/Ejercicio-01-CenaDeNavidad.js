function organizeChristmasDinner(dishes) {
  const ingredientCounts = {};

  dishes.forEach(([dish, ...ingredients]) => {
    ingredients.forEach((ingredient) => {
      ingredientCounts[ingredient] = (ingredientCounts[ingredient] || 0) + 1;
    });
  });

  const repeatedIngredients = Object.entries(ingredientCounts)
    .filter(([ingredient, count]) => count >= 2)
    .map(([ingredient]) => ingredient)
    .sort();

  const result = repeatedIngredients.map((ingredient) => {
    const relatedDishes = dishes
      .filter(([dish, ...ingredients]) => ingredients.includes(ingredient))
      .map(([dish]) => dish)
      .sort();

    return [ingredient, ...relatedDishes];
  });

  return result;
}


