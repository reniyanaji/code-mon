
const ul = document.querySelector('ul');
const form = document.querySelector('form');
const input = document.querySelector('input');

let itemsArray = localStorage.getItem('items') ?
JSON.parse(localStorage.getItem('items')) : []

localStorage.setItem('items', JSON.stringify(itemsArray))
const data = JSON.parse(localStorage.getItem('items'))


function li_Maker(text) {

 /*adding a list item*/
const li = document.createElement('li');
li.id = 1;
li.innerHTML= text;
ul.appendChild(li);


/* adding clear button to each list*/
const button = document.createElement('button');
button.innerHTML= "clear";
li.appendChild(button);


}


document.getElementById("button-addon2").addEventListener("click",function(event){

   event.preventDefault();

  itemsArray.push(input.value);
  localStorage.setItem('items', JSON.stringify(itemsArray));

  li_Maker(input.value);

  /* reseting the form after each submit*/
  document.getElementById("form_id").reset();



});

data.forEach(i=> {
  li_Maker(i)
})

/* clear each item*/
ul.addEventListener("click", function (event){

  if (ul.hasChildNodes()) {
    console.log(event.target.parentNode.id);
    ul.removeChild(ul.childNodes[event.target.parentNode.id]);


  }

 }
);



/* clear all list */
document.getElementById("btn_clear").addEventListener("click",function clear_lists(){
localStorage.clear();
  while (ul.hasChildNodes()) {
    ul.removeChild(ul.firstChild);
  }

});
