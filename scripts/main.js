  const input_search = document.querySelector("#search_input")
  const list_all_tag = listKeyWord(recipes)
  const content_card = document.querySelector("#content_card")
  const arrows = document.querySelectorAll('dropdown-toggle')
  let arrow = ""
  
// CREATION DOM
  
const domDropdown = {
  "ingredient": {
    "container": document.querySelector('#container_ingredient'),
    "content_list": document.querySelector('#content_list_ingredient'),
    "input": document.querySelector('#search_ingredient')
  },
  "ustensil": {
    "container": document.querySelector('#container_ustensil'),
    "content_list": document.querySelector('#content_list_ustensil'),
    "input": document.querySelector('#search_ustensil')
  },
  "appliance": {
    "container": document.querySelector('#container_appliance'),
    "content_list": document.querySelector('#content_list_appliance'),
    "input": document.querySelector('#search_appliance')
  }
}



create_dropdoown(list_all_tag.ingredient , domDropdown.ingredient,"ingredient")
create_dropdoown(list_all_tag.ustensil, domDropdown.ustensil,"ustensil")
create_dropdoown(list_all_tag.appliance,  domDropdown.appliance,"appliance")

create_list_cards(recipes, content_card);

// END CREATION DOM


// Evement input filtre liste tag
domDropdown.ingredient.container.addEventListener("input", ()=>{
  actualise_tag(filter_tag(list_all_tag.ingredient, domDropdown.ingredient.input.value), domDropdown.ingredient,"ingredient")
})
domDropdown.ustensil.container.addEventListener("input", ()=>{
  actualise_tag(filter_tag(list_all_tag.ustensil, domDropdown.ustensil.input.value), domDropdown.ustensil,"ustensil")
})
domDropdown.appliance.container.addEventListener("input", ()=>{
  actualise_tag(filter_tag(list_all_tag.appliance, domDropdown.appliance.input.value), domDropdown.appliance,"appliance")
})


// Evement main input search  
search_input.addEventListener('input', (event) => {
  event.preventDefault
  if(event.target.value.length >= 3){
    sup_child(content_card)
    searchRecipes(recipes, input_search, content_card)
  }else{
    create_list_cards(recipes, content_card);
  }
})

let list_search_tag = document.querySelector('#list_search_tag')

// Evenemt add DOMNodeInserted buttom tag
list_search_tag.addEventListener("DOMNodeInserted", ()=>{
   sup_child(content_card)
   searchRecipes(recipes, input_search, content_card)
 })

// Si buttom tag Evenemt remove DOMNodeRemoved buttom tag
list_search_tag.addEventListener("DOMNodeRemoved", ()=>{
  sup_child(content_card)
  searchRecipes(recipes, input_search, content_card)
})


