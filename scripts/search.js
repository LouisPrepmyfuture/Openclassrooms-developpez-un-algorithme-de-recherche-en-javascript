// recupère la list des tags toLowerCase
function listKeyWord(recipes) {
	const list_ingredients = []
	const list_utensils = []
	const list_appliances = []
	let all_lists = {}

	recipes.forEach(recipe => {
		// list tag ingredient
		recipe.ingredients.forEach(ingredient => {
			list_ingredients.push(ingredient.ingredient.toLowerCase())
		})

		// list tag ustensil appliance
		recipe.ustensils.forEach(ustensil => {
			list_utensils.push(ustensil.toLowerCase())
		})

		// list appliance tag 
		list_appliances.push(recipe.appliance.toLowerCase())

	})
	// sup duplicate
	all_lists = {
		ingredient: sup_duplicate(list_ingredients),
		ustensil: sup_duplicate(list_utensils),
		appliance: sup_duplicate(list_appliances)
	}

	return all_lists
}

function filter_tag(tags, valeur) {
	let resulta = []
	return resulta = tags.filter(tag => tag.includes(valeur.toLowerCase()))
}

/**
 * 
 * @param {Array} recipes 
 * @param {Object} filterParams mainInput + tag 1 + tag 2 + tag 3
 * @return {Array} - resultat de data filtré
 */
function search(recipes, filterParams) {

	const { input_value, list_tag_ingredient, list_tag_ustensil, list_tag_appliance } = filterParams;

	return recipes.filter((recipe) => {
		// mes conditions pour garder l'élement
		// TODO forcer la comparaison sans tenir compte de la casse
		// on vérifie si le texte est présent dans la description ou 1 ingrédient ou le nom

		if (input_main(recipe, input_value) === false) {
			return false;
		}

		if (list_tag_ingredient.length != 0) {
			if (notInIngredients(list_tag_ingredient, recipe)) {
				return false
			}
		}

		if (list_tag_ustensil.length != 0) {
			if (notInUstensils(list_tag_ustensil, recipe)) {
				return false
			}
		}

		if (list_tag_appliance.length != 0) {
			if (list_tag_appliance.length < 2) {
				if (recipe.appliance.toLowerCase() != list_tag_appliance[0]) {
					return false
				}
			} else {
				return false
			}
		}
		// garder item si on retourne true
		return true;
	});
}

// cherche un mot dans une data(ingredient description et name)
function input_main(recipe, input_value) {
	if (input_value === "") {
		return true
	}
	// search in ingredient 
	let ingredients = recipe.ingredients
	for (let i = 0; ingredients.length > i; i++) {
		let ingredient = ingredients[i]
		if (ingredient.ingredient === input_value) {
			return true
		}
	}
	// search in description
	if (recipe.name.toLowerCase().search(input_value) > -1) {
		return true
	}
	// search in title
	if (recipe.description.toLowerCase().search(input_value) > -1) {
		return true
	}
	return false
}

function notInUstensils(list_tag_ustensil, recipe) {
	let resulta = []
	let recipe_ustensils_lowCase = recipe.ustensils.map(u => u.toLowerCase())
	list_tag_ustensil.forEach(tag => {
		resulta.push(recipe_ustensils_lowCase.includes(tag))
	})
	return resulta.some(c => c === false)
}

function notInIngredients(list_tag_ingredient, recipe) {
	let resulta = []
	list_tag_ingredient.forEach(tag => {
		resulta.push(recipe.ingredients.some((ingredient) => ingredient.ingredient.toLowerCase().includes(tag)))
	})
	return resulta.some(c => c === false)
}

function notInputInIngredients(mainInput, recipe) {
	return !recipe.ingredients.some((ingredient) => ingredient.ingredient.toLowerCase().includes(mainInput));
}


function searchRecipes(data, input_search, content_resulta) {
	// recuperation des tag active

	let list_tag_ingredient = arrayPushString(".tag_ingredient")
	let list_tag_ustensil = arrayPushString(".tag_ustensil")
	let list_tag_appliance = arrayPushString(".tag_appliance")
	let input_value = input_search.value.toLowerCase()

	let filterParams = { input_value, list_tag_ingredient, list_tag_ustensil, list_tag_appliance }

	let resulta = search(data, filterParams)

	//filtre les tags qui reste dans la data restante 
	let list_tag = listKeyWord(resulta)

	// mise a jour des tags 
	actualise_tag(list_tag.ingredient, domDropdown.ingredient, "ingredient")
	actualise_tag(list_tag.ustensil, domDropdown.ustensil, "ustensil")
	actualise_tag(list_tag.appliance, domDropdown.appliance, "appliance")

	create_list_cards(resulta, content_resulta)
}
