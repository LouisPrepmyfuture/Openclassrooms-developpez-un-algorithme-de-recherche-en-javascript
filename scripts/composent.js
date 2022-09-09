function create_dropdoown(array, element){
  let content_list = document.querySelector( '#content_list_ingredients' )
  let input = document.querySelector( '#search-ingredient' )
  let li 

  for(let i = 0 ;i < array.length; i++){
    li = document.createElement('li')
    li.classList.add("dropdown-item"); 
    li.textContent = array[i]
    content_list.appendChild(li)
  }


  element.addEventListener('click', ()=>{
    if(content_list.style.display === "none" ){
      content_list.style.display = "block"; 
      input.style.display = "block"
    }
  })
}


function create_cards(data){

  content_card = document.querySelector("#content_card")

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

  card.setAttribute("style","width: 380px;")
  img.setAttribute("src","https://picsum.photos/380/178")
  card_header.setAttribute("class","d-flex justify-content-between align-items-center");
  content_description.setAttribute("class","d-flex justify-content-between");

  card.classList.add("card");
  img.classList.add("card-img-top");
  card_body.classList.add("card-body");

  title.classList.add("card-title");
  time.classList.add("time");
  description.classList.add("card-title");

  ul.classList.add("ul");

  
  for(let i = 0; data.length > i ; i++){
    title.textContent = data[i].name;
    time.textContent = data[i].time;
    description.textContent = data[i].description

    for(let j = 0; data[i].ingredients.length > j ; j++ ) {
      li = document.createElement("li")
      b = document.createElement("b")
      b.textContent = data[i].ingredients[j].ingredient 
      if(data[i].ingredients[j].quantity ){
        li.textContent += " "+data[i].ingredients[j].quantity
        if( data[i].ingredients[j].unit ){
          li.textContent += data[i].ingredients[j].unit
        }
      }
      li.prepend(b)
      ul.appendChild(li);
    }

    content_card.appendChild(card)
    card.appendChild(img)
    card.appendChild(card_body)
    card_body.appendChild(card_header)
    card_header.appendChild(title)
    card_header.appendChild(time)
    card_body.appendChild(content_description)
    content_description.appendChild(ul)
    content_description.appendChild(description)

    
  }
}