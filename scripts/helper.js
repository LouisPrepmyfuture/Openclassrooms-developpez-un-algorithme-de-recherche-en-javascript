
// supprime les doublons d'un tableau 
function sup_duplicate(list){
  let list_sort =[]
  for(let l = 0; l < list.length; l++){
    if(list_sort.includes(list[l]) === false){
      list_sort.push(list[l])
    }
  }
  return list_sort
}

// function strUcFirst(a){
//   return (a+'').charAt(0).toUpperCase()+a.substr(1);
// }


function sup_child(parent){
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function actualise_tag(new_tag,content_old_list,  type_tag){
  sup_child(content_old_list.content_list)
  // console.log(new_tag)
  create_dropdoown(new_tag, content_old_list, type_tag)
}

// compte le nombre de cards afficher
function nbCards() {
  var count = document.getElementById(
      "content_card").childElementCount;

  document.getElementById("GFG").innerHTML
      = "Total Number of Child node: "
      + count;
}

// renvoi un tableau de tag selon le tag recherche a l'aide de sa .class
function arrayPushString(tag){
  let tag_array = []
  let list_tag = document.querySelectorAll(tag)
  console.log(list_tag)
  for(let k = 0; list_tag.length > k; k++){
    tag_array.push(list_tag[k].innerHTML)
  }
  return tag_array
}

 // event si je click sur un des ingredients mes cette ingredients 
 function addEventListDropdown(list_tag, type_tag){
  for(let j = 0; j < list_tag.length; j++ ){
    list_tag[j].addEventListener("click", function(){
      create_btn_search(this.textContent,  type_tag)
    })
  }
}