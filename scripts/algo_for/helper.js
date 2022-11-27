
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

function sup_child(parent){
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function actualise_tag(new_tag,content_old_list, type_tag){
  sup_child(content_old_list.content_list)
  create_dropdoown(new_tag, content_old_list, type_tag)
}


// renvoi un tableau de tag selon le tag recherche a l'aide de sa .class
function arrayPushString(tag){
  let tag_array = []
  let list_tag = document.querySelectorAll(tag)
  for(let k = 0; list_tag.length > k; k++){
    tag_array.push(list_tag[k].innerHTML.toLowerCase())
  }
  return tag_array
}