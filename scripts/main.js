
const list_Key_Word = listKeyWord(recipes);
const content_ingredients = document.querySelector('#content_ingredients') 
const content_list_ingredients = document.querySelector('#content_list_ingredients') 
let input = document.querySelector("#search-ingredient")
let result = search(list_Key_Word.ingredient,input.value)

create_dropdoown(result, content_ingredients)

const input_ingredients = document.querySelector('#search-ingredient') 


content_ingredients.addEventListener("input", ()=>{
  sup_child(content_list_ingredients)
  console.log(input.value) 
  let result = search(list_Key_Word.ingredient,input.value)
  create_dropdoown(result, content_ingredients)

})

const test = [
  {
      "id": 1,
      "name" : "Limonade de Coco",
      "servings" : 1,
      "ingredients": [
          {
              "ingredient" : "Lait de coco",
              "quantity" : 400,
              "unit" : "ml"
          },
          {
              "ingredient" : "Jus de citron",
              "quantity" : 2
          },
          {
              "ingredient" : "Crème de coco",
              "quantity" : 2,
              "unit" : "cuillères à soupe"
          },
          {
              "ingredient" : "Sucre",
              "quantite" : 30,
              "unit" : "grammes"
          },
          {
              "ingredient": "Glaçons"
          }
      ],
      "time": 10,
      "description": "Mettre les glaçons à votre goût dans le blender, ajouter le lait, la crème de coco, le jus de 2 citrons et le sucre. Mixer jusqu'à avoir la consistence désirée",
      "appliance": "Blender",
      "ustensils": ["cuillère à Soupe", "verres", "presse citron" ]
  }
]
create_cards(test)