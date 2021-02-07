document.getElementById("search-button").addEventListener('click', function () {
    const searchMeal = document.getElementById("input-meal");
    const getMealValue = searchMeal.value;


    getMealApi(getMealValue);
})

getMealApi = (searchByLetter) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchByLetter}`)
        .then(response => response.json())
        .then(data => getMealName(data)
        
        )
}

getMealName = (datum) => {
    const mealsContainer = document.getElementById("meal-container");
    datum.meals.forEach(element => {
            const mealName = element.strMeal;
            const imageSource = element.strMealThumb;
            const mealId = element.idMeal;
            const mealDiv = document.createElement('div');
            const mealInfoDiv = `
                <div onclick = "showDetails('${mealId}')" class="image" style="background-image:url('${imageSource}')"></div>
                <h3>${mealName}</h3>`
            mealDiv.innerHTML = mealInfoDiv;
            mealsContainer.appendChild(mealDiv);
        }
    );
}

showDetails = (mealid) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`;
    fetch(url)
        .then(response => response.json())
        .then(data => getIngredients(data))
        

}

 getIngredients = (stack) => {
    const main = stack.meals[0]
    const ingredientsContainer = document.getElementById("ingredients-container")
    const imageSource = main.strMealThumb;
    const imageDiv = document.createElement('div')
    const imageSection = `
    <div class="image" style="background-image:url('${imageSource}')"></div>`
    imageDiv.innerHTML = imageSection;
    ingredientsContainer.appendChild(imageDiv);   
    let h1 = document.createElement('h1');
    h1.innerText = 'ingredients'
    ingredientsContainer.appendChild(h1)
    let ingredientList = [];
    
    const ingredient1 = main.strIngredient1;
    const ingredient2 = main.strIngredient2;
    const ingredient3 = main.strIngredient3;
    const ingredient4 = main.strIngredient4;
    const ingredient5 = main.strIngredient5;
    const ingredient6 = main.strIngredient6;
    const ingredient7 = main.strIngredient7;
    const ingredient8 = main.strIngredient8;
    const ingredient9 = main.strIngredient9;
    const ingredient10 = main.strIngredient10;

    ingredientList.push(ingredient1);
    ingredientList.push(ingredient2);
    ingredientList.push(ingredient3);
    ingredientList.push(ingredient4);
    ingredientList.push(ingredient5);
    ingredientList.push(ingredient6);
    ingredientList.push(ingredient7);
    ingredientList.push(ingredient8);
    ingredientList.push(ingredient9);
    ingredientList.push(ingredient10);

    ingredientList.forEach(element => {
        if (element !== '' && element !== null) {
            let li = document.createElement('li');
            li.innerText = element;
            ingredientsContainer.appendChild(li)
        }
    });

}