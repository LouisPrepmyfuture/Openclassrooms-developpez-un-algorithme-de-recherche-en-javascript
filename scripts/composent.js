function create_dropdoown(tags, element, type){
  let li 
  tags.forEach(tag => {
    li = document.createElement('li')
    li.classList.add("dropdown-item")
    li.setAttribute("class", type)
    li.textContent = tag
    element.content_list.appendChild(li)
  });


  const list_tag = document.querySelectorAll("."+type)

  list_tag.forEach(tag => {
    tag.addEventListener("click", function(event){
      event.stopPropagation()
      create_btn_search(tag.textContent, type)
    })
  });
 
  element.container.addEventListener('click', (e)=>{
    let open = document.querySelector(".open") 
    let arrow = document.querySelector(".open") 
    if(open != null){
      open.classList.remove("open");
    }
    if(element.container.classList != "open" ){
      element.container.classList.add("open");
    }
  })
  
}


function create_cards(data, content_card){

  let card = document.createElement('div') 
  let img = document.createElement('img') 
  let card_body = document.createElement('div')
  let title = document.createElement("h5") 
  let time = document.createElement("time") 
  let card_header = document.createElement("div") 
  let content_description = document.createElement("div") 
  let description = document.createElement("p") 
  let ul = document.createElement("ul")
  let li 
  let b

  img.setAttribute("src","https://picsum.photos/380/178")
  card_header.setAttribute("class","d-flex justify-content-between align-items-center");
  content_description.setAttribute("class","d-flex justify-content-between");
  description.setAttribute("class","col-6");
  ul.setAttribute("class","p-0 col-6" )

  card.classList.add("card");
  img.classList.add("card-img-top");
  card_body.classList.add("card-body");

  title.classList.add("card-title");
  time.classList.add("time");
  description.classList.add("card-title");

  ul.classList.add("ul");


    title.textContent = data.name;
    time.textContent = data.time;
    description.textContent = data.description.substring(1,100);

  data.ingredients.forEach(ingredient => {
    li = document.createElement("li")
    b = document.createElement("b")

    b.textContent = ingredient.ingredient 

    if(ingredient.quantity ){
      li.textContent += " "+ingredient.quantity
      if( ingredient.unit ){
        li.textContent += ingredient.unit
      }
    }
    li.prepend(b)
    ul.appendChild(li);
    

    content_card.appendChild(card)
    card.appendChild(img)
    card.appendChild(card_body)
    card_body.appendChild(card_header)
    card_header.appendChild(title)
    card_header.appendChild(time)
    card_body.appendChild(content_description)
    content_description.appendChild(ul)
    content_description.appendChild(description)
  });
}

function create_btn_search(name,type_tag){
  let verif = document.querySelectorAll('.tag_'+type_tag) 
  let exsiste =  false;
  // vérifie qu'il n'est pas déjà dans la liste
  if(verif.length > 0){
    verif.forEach(tag => {
      if(tag.textContent === name){
        exsiste = true;
      }
    });
  }
  
  // si il est pas dans la list le crée un bouton tag 
  if(exsiste === false){

    let content_search = document.querySelector('#list_search_tag') 
    let btn = document.createElement("button")
    let icon = document.createElement("i")
		
    btn.setAttribute("class", "btn btn-primary mr-2 tag_" + type_tag)
		icon.setAttribute("class", "far fa-times-circle pr-2")
		
    
    btn.addEventListener("click", function(){
			btn.remove();
      sup_child(content_card)
      searchRecipes(recipes, input_search, content_card)
    })
    let open = document.querySelector('.open') 
    open.classList.remove("open");
		btn.textContent = name;
		btn.prepend(icon);
    content_search.appendChild(btn);
  }
 
}

// Si il est pas dans la list le crée un bouton tag 
function create_list_cards(resulta, content_resulta){
  
  sup_child(content_card)

  if(resulta.length === 0 ){
    const message = document.createElement("p") 
    message.setAttribute("class","mx-auto mt-5 h3 fw-bold")
    message.textContent = "Il n'y a pas de resulta pour cette recherche"
    content_resulta.appendChild(message)
  }else{

    resulta.forEach( recipe => {
      create_cards(recipe,content_resulta)
    });
    
  }
}