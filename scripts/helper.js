
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

function strUcFirst(a){
  return (a+'').charAt(0).toUpperCase()+a.substr(1);
}


function sup_child(parent){
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

