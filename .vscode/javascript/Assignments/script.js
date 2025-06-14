let recipes = JSON.parse(localStorage.getItem('recipes')) || [];

const form = document.getElementById('recipeForm');
const nameInput = document.getElementById('name');
const ingredientsInput = document.getElementById('ingredients');
const instructionsInput = document.getElementById('instructions');
const recipeList = document.getElementById('recipeList');
const editIndexInput = document.getElementById('editIndex');

function saveToLocalStorage() {
  localStorage.setItem('recipes', JSON.stringify(recipes));
}

function renderRecipes() {
  recipeList.innerHTML = '';
  recipes.forEach((recipe, index) => {
    const recipeDiv = document.createElement('div');
    recipeDiv.className = 'recipe';
    recipeDiv.innerHTML = `
      <h3>${recipe.name}</h3>
      <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
      <p><strong>Instructions:</strong> ${recipe.instructions}</p>
      <div class="actions">
        <button onclick="editRecipe(${index})">Edit</button>
        <button onclick="deleteRecipe(${index})">Delete</button>
      </div>
    `;
    recipeList.appendChild(recipeDiv);
  });
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = nameInput.value.trim();
  const ingredients = ingredientsInput.value.trim();
  const instructions = instructionsInput.value.trim();
  const editIndex = editIndexInput.value;

  if (!name || !ingredients || !instructions) return alert('All fields are required!');

  const newRecipe = {
    name,
    ingredients,
    instructions,
  };

  if (editIndex === '') {
    // Create
    recipes.push(newRecipe);
  } else {
    // Update
    recipes[editIndex] = newRecipe;
    editIndexInput.value = '';
  }

  saveToLocalStorage();
  renderRecipes();
  form.reset();
});

function editRecipe(index) {
  const recipe = recipes[index];
  nameInput.value = recipe.name;
  ingredientsInput.value = recipe.ingredients;
  instructionsInput.value = recipe.instructions;
  editIndexInput.value = index;
}

function deleteRecipe(index) {
  if (confirm('Are you sure you want to delete this recipe?')) {
    recipes.splice(index, 1);
    saveToLocalStorage();
    renderRecipes();
  }
}

renderRecipes();
