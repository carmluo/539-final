let ingredientCheckbox = document.querySelectorAll("input[type=checkbox]")
let resetBtn = document.querySelector("#reset")

// if ingredient is checked off, add line crossthrough and move it to the bottom of the list
ingredientCheckbox.forEach(function(checkbox){
    checkbox.addEventListener('change', function(){
        let ingredient = checkbox.parentElement;
        if (checkbox.checked === true){
            console.log(`checked: ${ingredient.innerText}`);
            ingredient.style.order = 1;
            ingredient.style.textDecoration = "line-through";
            ingredient.style.color = "#929989";
        } else {
            console.log(`unchecked: ${ingredient.innerText}`);
            ingredient.style.order = 0;
            ingredient.style.textDecoration = "none";
            ingredient.style.color = "#000000";
        }
    })
})

// reset button js
resetBtn.addEventListener("click", function(event){
    event.preventDefault();
    ingredientCheckbox.forEach(function(checkbox){
        checkbox.checked = false;
        let ingredient = checkbox.parentElement;
        ingredient.style.order = 0;
        ingredient.style.textDecoration = "none";
        ingredient.style.color = "#000000";
    })
})

// if instruction is clicked, add cross through
let instructions = document.querySelectorAll(".instruction")
let tip = document.querySelector(".tip")
instructions.forEach(function(text){
    text.value = 0;
    text.addEventListener('click', function(){
        let instruction = text.innerText;
        tip.style.opacity = 0;
        if (text.value == 0){
            text.value = 1;
            console.log(`!was clicked !value is ${text.value}`)
            text.style.textDecoration = "line-through #F25B50 2px";
            // text.style.textDecorationColor = "#F25B50";
            text.style.color = "#929989";
        } else {
            console.log(`unclicked`)
            text.value = 0;
            text.style.textDecoration = "none";
            text.style.color = "#000000"
        }
    })
})

// set the focus of mobile skip to recipe button
let recipeButton = document.querySelector('#skipRecipeButton')
let buttonColor = document.querySelector('#skipRecipeIcon');
let textColor = document.querySelector('#skipRecipePath')
recipeButton.addEventListener('focus', function(){
    console.log("set focus on recipe");
    buttonColor.style.backgroundColor = '#FEFAE0';  
    textColor.style.fill = '#482728';
    // buttonColor.style.border = '#F25B50 3px solid';
    buttonColor.style.color = '#482728';
})

recipeButton.addEventListener('blur', function(){
    console.log("unfocus on recipe");
    buttonColor.style.backgroundColor = '#482728';
    textColor.style.fill = '#FEFAE0';
    buttonColor.style.border = 'none';
    buttonColor.style.color = '#FEFAE0';
})

let lastTechniqueBlock = document.querySelector('#gluten')
let verticalNav = document.querySelector('.page-nav')
window.onscroll = function(){
    // when scrolled into last technique block (just before the vertical nav hits the ingredients), turn off opacity of nav 
    if(lastTechniqueBlock.getBoundingClientRect().top <= 400){
        // console.log("TRIGGER: top of div reached.");
        verticalNav.style.opacity = '0';
    }

    // if scrolled back up, reappears
    if(lastTechniqueBlock.getBoundingClientRect().top > -400){
        verticalNav.style.opacity = '1';
        // console.log("TRIGGER: bottom of div reached.");
    }
}

// when the page is loaded, do function
window.onload = function() {
    console.log(`this is your first entrance`)
}