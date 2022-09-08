function create_dropdoown(array, element, name){
  const button = document.createElement( 'button' )
  let content_list = document.createElement( 'ul' )

  content_list.style.display = "none";
  button.textContent = name;
  let li 
  
  for(let i = 0 ;i < array.length; i++){
    li = document.createElement('li') 
    li.textContent = array[i]
    content_list.appendChild(li)
  }
  
  element.appendChild(content_list)
  element.appendChild(button)

  element.addEventListener('click', ()=>{
    if(content_list.style.display === "none" ){
      content_list.style.display = "block"; 
    }else{
      content_list.style.display = "none";
    }
  })
  
}

