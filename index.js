
const ul = document.querySelector('ul');
var itemArray = [];
document.getElementById("button-addon2").addEventListener("click",function li_Maker(){

/* adding a list item */
const li = document.createElement('li');
li.id = 1;
const form = document.querySelector('input');
para_li_Maker = form.value;
li.innerHTML= para_li_Maker;
ul.appendChild(li);


  itemArray.push(para_li_Maker);
  localStorage.setItem("mylist", JSON.stringify(itemArray));
  const data = JSON.parse(localStorage.getItem("mylist"));


/* adding clear button to each list*/
  const button = document.createElement('button');
button.innerHTML= "clear";
li.appendChild(button);

/* reseting the form after each submit */
    document.getElementById("form_id").reset();


});


/* clear all list */
document.getElementById("btn_clear").addEventListener("click",function clear_lists(){

  while (ul.hasChildNodes()) {
    ul.removeChild(ul.firstChild);
  }

});

/* clear each item */
document.querySelector("ul").addEventListener("click", function (event){

  if (ul.hasChildNodes()) {
    console.log(event.target.parentNode.id);
    ul.removeChild(ul.childNodes[event.target.parentNode.id]);


  }

 }
);
