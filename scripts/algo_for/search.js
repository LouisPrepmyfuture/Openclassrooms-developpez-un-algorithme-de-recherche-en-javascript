
// recupère la list des tags
function listKeyWord(data) {
  const  list_ingredients = []
  const  list_utensils = []
  const  list_appliances = []
  let    all_lists = {}

  for(let i = 0; i < data.length; i++){
    // list ingredient tag
    const total = Object.keys(data[i].ingredients).length
    for(let j = 0; j < total; j++){
      list_ingredients.push(data[i].ingredients[j].ingredient.toLowerCase())
    }

    // list ustensible tag
    for(let l = 0; l < data.length; l++){
      for(let lj = 0; lj < data[l].ustensils.length; lj++){
        list_utensils.push(data[l].ustensils[lj].toLowerCase())
      }
    }
    // list appliance tag 
    list_appliances.push(data[i].appliance.toLowerCase())
  }

  // sup duplicate
   all_lists = {
    ingredient: sup_duplicate(list_ingredients),
    ustensil: sup_duplicate(list_utensils),
    appliance: sup_duplicate(list_appliances)
   }

  return all_lists
}

function filter_tag(data,valeur){
  let resulta = []
  for(let i = 0; data.length > i; i++){
    if(data[i].includes(valeur.toLowerCase())){    
      resulta.push(data[i])
    }
  }
  return resulta
}

function searchIngredient(data,list_tag_ingredient){
  let resulta = []
  if(list_tag_ingredient.length === 0){
    return data
  }
    let counte
    for(let i = 0 ; data.length > i ; i++){
      counte = 0
      
        for(let j = 0 ; data[i].ingredients.length > j ; j++){

           for(let k = 0; list_tag_ingredient.length > k ;k++){

             let ingrediente_lowerCase = data[i].ingredients[j].ingredient.toLowerCase()


             if( ingrediente_lowerCase ===  list_tag_ingredient[k]){ 
               counte++
               if(list_tag_ingredient.length === counte){
                 resulta.push(data[i])
               }
             }
           } 
         } 

      }
    return resulta;
}

function searchUstensible(data,tableau_tag_ustensible){
  let resulta = []
  if(tableau_tag_ustensible.length === 0){
    return data
  }
    let counte
     for(let i = 0 ; data.length > i ; i++){
        counte = 0
        for(let j = 0 ; data[i].ustensils.length > j ; j++){
           for(let k = 0; tableau_tag_ustensible.length > k ;k++){
            data_ustensils = data[i].ustensils[j].toLowerCase()
             if(data_ustensils ===  tableau_tag_ustensible[k]){ 
                 counte++
               
                 if(tableau_tag_ustensible.length === counte){
                  resulta.push(data[i])
               }
             }
           } 
         } 
      }
      
    return resulta;
}

function searchAppareil(data,appareil_tag){
  let resulta = []
  if(appareil_tag.length === 0){
    return data
  }
  for(let i = 0 ; data.length > i ; i++){

    
    for(let j = 0; appareil_tag.length > j; j++){
      
      data_appliance = data[i].appliance.toLowerCase()
      if(data_appliance === appareil_tag[j]){
        resulta.push(data[i])
      } 

    }
  }
  
  return resulta;
}


// cherche un mot dans une data(ingredient description et name)
function inputSearch(data, search_input){
  let resulta = []
  let data_name_LowerCase
  let data_ingredient_LowerCase
  let data_description_LowerCase

  if(search_input.value === ""){
    return data
  }

  resulta_input_lowerCase =  search_input.value.toLowerCase()

  for(let n = 0; data.length > n; n++){
  
      data_name_LowerCase = data[n].name.toLowerCase()
      data_description_LowerCase = data[n].description.toLowerCase()
  
      if(data_name_LowerCase.search(resulta_input_lowerCase) > -1 ){
        resulta.push(data[n])
      }else if(data_description_LowerCase.search(resulta_input_lowerCase) > -1 ){
        resulta.push(data[n])
      }else{
        for(let j = 0 ; data[n].ingredients.length > j ; j++){
         data_ingredient_LowerCase = data[n].ingredients[j].ingredient.toLowerCase()
         if(data_ingredient_LowerCase.search(resulta_input_lowerCase) > -1 ){
          resulta.push(data[n])
         }
        }
      }
      
  
  }
  return resulta
}

function searchRecipes(data, input_search, content_resulta){

  let list_tag_ingredient=[]
  let list_tag_ustensil=[]
  let list_tag_appliance=[]
  
  // recuperation des tag active
   list_tag_ingredient = arrayPushString(".tag_ingredient")
   list_tag_ustensil = arrayPushString(".tag_ustensil")
   list_tag_appliance = arrayPushString(".tag_appliance")


  // appelle des diferante function de recherche
  let resulta = inputSearch(data, input_search)
  resulta = searchIngredient(resulta,list_tag_ingredient)
  
  resulta = searchUstensible(resulta, list_tag_ustensil)
	resulta = searchAppareil(resulta, list_tag_appliance)

  //filtre les tags qui reste dans la data restante 
  let list_tag = listKeyWord(resulta)

  // mise a jour des tags 
  actualise_tag(list_tag.ingredient, domDropdown.ingredient,"ingredient")
  actualise_tag(list_tag.ustensil, domDropdown.ustensil,"ustensil")
  actualise_tag(list_tag.appliance, domDropdown.appliance,"appliance")


  create_list_cards(resulta, content_resulta)

}
