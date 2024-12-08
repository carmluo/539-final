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
instructions.forEach(function(text){
    text.value = 0;
    text.addEventListener('click', function(){
        let instruction = text.innerText;
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
