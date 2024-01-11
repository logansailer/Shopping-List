//event listener for button press. When pressed, move item from input to UL and delete from input
const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

function press() {
    let inputText = input.value;
    input.value = "";
    let li = document.createElement("li");
    let spanText = document.createElement("span");
    let deleteButton = document.createElement("button")
    li.appendChild(spanText);
    li.appendChild(deleteButton);
    spanText.textContent = inputText;
    deleteButton.textContent = "Delete"
    list.appendChild(li);
    deleteButton.addEventListener('click', () => {
        list.removeChild(li);
    });
    input.focus();
}

button.addEventListener('click', press);