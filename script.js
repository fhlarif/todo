var button = document.getElementById("enter");
var clear = document.getElementById("clear");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var items = document.querySelector("#items");


function inputLength() {
    return input.value.length
}

function createListElement() {



    var item = document.createElement("li");
    var deleteButton = document.createElement("button");

    deleteButton.appendChild(document.createTextNode("Delete"));
    deleteButton.classList.add("remove");
    item.appendChild(document.createTextNode(input.value));
    item.classList.add("item");

    
    item.appendChild(deleteButton);
    items.appendChild(item)
    ul.appendChild(items);


    input.value = "";

    item.addEventListener('click', function (e) {
        item.classList.toggle("done");
    });

    deleteButton.addEventListener("click", function (e) {
        this.parentNode.parentNode.removeChild(this.parentNode);

    })

}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeyPress(event) {
    if (inputLength() > 0 && event.which === 13) {
        createListElement();
    }

}

function clearAll(){
    while (items.firstChild) {
        items.removeChild(items.firstChild);
    }
}



button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeyPress);

clear.addEventListener("click",clearAll)




