
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

    // list ustensible
    for(let l = 0; l < data.length; l++){
      for(let lj = 0; lj < data[l].ustensils.length; lj++){
        list_utensils.push(data[l].ustensils[lj])
      }
    }
    // list appliance
    list_appliances.push(data[i].appliance)
  }

   all_lists = {
    ingredient: sup_duplicate(list_ingredients),
    ustensils: sup_duplicate(list_utensils),
    appliances: sup_duplicate(list_appliances)
   }

  return all_lists
}



