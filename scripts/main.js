console.log('yfyifu')
const list_Key_Word = listKeyWord(recipes);

console.log(list_Key_Word.ingredient);
const content_ingredients = document.querySelector('#content_ingredients') 

create_dropdoown(list_Key_Word.ingredient, content_ingredients,"ingredient")



