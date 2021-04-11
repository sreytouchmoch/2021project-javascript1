




function deleteFood(event) {
    const buttonName = event.target.className;
   if (buttonName == "delete") {
    const delbtn = event.target.parentElement;
    delbtn.remove();
  }
   
  }
  function addFood(event) {
    event.preventDefault();
    let item = document.querySelector("#add-food-textfield");
    let food=document.querySelector('#NameFood');
    let foodId=document.querySelector('#NameId');
    let price=document.querySelector('#price');
    let priceId=document.querySelector('#priceId');

    let nameOfItem = item.value;
    if (nameOfItem != "") {
      let foodName = document.createElement("span");
      foodName.className = "name";
      foodName.textContent = nameOfItem;
      let deletebtn = document.createElement("span");
      deletebtn.className = "delete";
      deletebtn.textContent = "delete"
      let li = document.createElement("li");
      li.textContent=NameFood.value + " | " + NameId.value + " | " + price.value + " | " + priceId.value + " | ";
      li.appendChild(foodName);
      li.appendChild(deletebtn);
      foodList.appendChild(li);
    } else {
      window.confirm("Please write the Name of food")
    }
    item.value = "";
  }
  
  function searchFood(event) {
    let input = document.querySelector("#search-Foods input");
    let filter = input.value.toUpperCase();
    let ul = document.querySelector("#food-list ul");
    let li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
      let span = li[i].getElementsByTagName("span")[0];
      let txtValue = span.textContent || span.innerText;
      if (txtValue.toUpperCase().indexOf(filter) >= 0) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }
  
  let foodList = document.querySelector("#food-list ul");
  foodList.addEventListener("click", deleteFood);
  
  let addForm = document.getElementById("add-food");
  addForm.addEventListener("submit", addFood);
  
  let searchFoodInput = document
    .getElementById("search-Foods")
    .querySelector("input");
  searchFoodInput.addEventListener("keyup", searchFood);
  