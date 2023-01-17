
// recupère les list des most clée
function listKeyWord(data) {
  const  list_ingredients = []
  const  list_utensils = []
  const  list_appliances = []
  let    all_lists = {}

  for(let i = 0; i < data.length; i++){
    // list ingredient
    const total = Object.keys(data[i].ingredients).length
    for(let j = 0; j < total; j++){
      list_ingredients.push(data[i].ingredients[j].ingredient)
    }
    return all_lists
}

function filter_tag(tags,valeur){
  let resulta = []
  return resulta = tags.filter(tag => tag.includes(valeur.toLowerCase()))
}

/**
 * 
 * @param {Array} recipes 
 * @param {Object} filterParams mainInput + tag 1 + tag 2 + tag 3
 * @return {Array} - resultat de data filtré
 */
 function searchData(recipes, filterParams) {

  const { input_value, list_tag_ingredient, list_tag_ustensil, list_tag_appliance} = filterParams;
  
  return recipes.filter((recipe) => {
    // mes conditions pour garder l'élement
    // TODO forcer la comparaison sans tenir compte de la casse
    // on vérifie si le texte est présent dans la description ou 1 ingrédient ou le nom
      
    if (input_main(recipe,input_value) === false) {
      return false;
    } 
   
    if (list_tag_ingredient.length != 0) {
      if(notInIngredients(list_tag_ingredient, recipe)){
        return false
      }
    }  

    if (list_tag_ustensil.length != 0) {
      if(notInUstensils(list_tag_ustensil, recipe)){
        return false
      }
    } 

    if (list_tag_appliance.length != 0) {
      if (list_tag_appliance.length < 2) {
        if(recipe.appliance.toLowerCase() != list_tag_appliance[0]){
          return false
        }
      }else{
        return false 
      }
    }   
    // garder item si on retourne true
    return true;
  });
}

function input_main(recipe,input_value){
  if( recipe.name.toLowerCase().indexOf(input_value) === -1
  && recipe.description.toLowerCase().indexOf(input_value) === -1
  && notInputInIngredients(input_value, recipe)
  ){
    return false
  }else{
    return true;
	}
}

searchRecipes(recipes, input_search, content_card)

   let list_tag_ingredient = arrayPushString(".tag_ingredient")
   let list_tag_ustensil = arrayPushString(".tag_ustensil")
   let list_tag_appliance = arrayPushString(".tag_appliance")
   let input_value = input_search.value.toLowerCase()

   let filterParams = { input_value, list_tag_ingredient, list_tag_ustensil, list_tag_appliance}

   let resulta =  searchData(data, filterParams)

  //filtre les tags qui reste dans la data restante 
  let list_tag = listKeyWord(resulta)

  // mise a jour des tags 
  actualise_tag(list_tag.ingredient, domDropdown.ingredient,"ingredient")
  actualise_tag(list_tag.ustensil, domDropdown.ustensil,"ustensil")
  actualise_tag(list_tag.appliance, domDropdown.appliance,"appliance")

  create_list_cards(resulta, content_resulta)
}
