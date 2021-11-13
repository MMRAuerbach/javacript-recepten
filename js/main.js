const sidebar = document.querySelector('.sidebar');
const toggleSidebar = document.querySelectorAll('.toggle-sidebar');
const recipeBlock = document.querySelector('.food-container');
const recipeModal = document.querySelector('.preparation-modal');
const closeModalBtn = document.querySelector('.close-modal');
const ingredientPar = document.querySelector('.ingredients');
const preparationPar = document.querySelector('.preparation');
const imagePar = document.querySelector('.modal-image');

toggleSidebar.forEach(function(element) {
    element.addEventListener('click', function() {    
        sidebar.classList.toggle('hidden');
    })
});


let addBlock = '';
let i = 0;
do {
    const useRecipe = recipes[i];

    if (i % 4 === 0) {
        if (i !== 0) {
            addBlock += '</div>';
        }
        addBlock += '<div class="w3-row-padding w3-padding-16 w3-center">';
    }

    addBlock += ' <div class="w3-quarter single-recipe" data-recipe_id="' + i + '">';
    addBlock += ' <img src="'+ useRecipe.image +'" alt="' + useRecipe.title + '" data-recipe_id="' + i + '" class="food-image">';
    addBlock += ' <h3 data-recipe_id="' + i + '">' + useRecipe.title + '</h3>';
    addBlock += ' <p data-recipe_id="' + i + '">' + useRecipe.description + '</p>';
    addBlock += ' </div>';

    i++;
} while (i < recipes.length);

addBlock.innerHTML += '</div>';
recipeBlock.innerHTML = addBlock;

allRecipies = document.querySelectorAll('.single-recipe');
allRecipies.forEach(function(recipe) {
    recipe.addEventListener('click', function(event) {
        showRecipeBlock(event.target);
    });
});

function showRecipeBlock(target) {
    const recipeID = target.dataset.recipe_id;
    const useRecipe = recipes[recipeID];
    ingredientPar.innerHTML = '<ol>';
    for (let i = 0; i < useRecipe.ingredients.length; i++) {
        ingredientPar.innerHTML += '<li>' + useRecipe.ingredients[i] + '</li>';
    }
    ingredientPar.innerHTML += '</ol>';
    preparationPar.innerHTML = useRecipe.preparation;
    imagePar.src = useRecipe.image;
    recipeModal.style.display = 'block';
}

closeModalBtn.addEventListener('click', function() {
    recipeModal.style.display = 'none';
});

// Place JavaScript code above this line
console.log('Main JS loaded');