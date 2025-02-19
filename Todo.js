let todolist = [];

function addtodo() {
    let inputElement = document.querySelector("#todo_input");
    let dateElement = document.querySelector("#tododate");

    let todoitem = inputElement.value;
    let tododate = dateElement.value;

    if (todoitem === "") {
        alert("Please enter a todo item!");
        return;
    }

    todolist.push({ item: todoitem, duedate: tododate });

    inputElement.value = "";
    dateElement.value = "";

    displayItems();
}

function displayItems() {
    let containerElement = document.querySelector(".todo_container");
    let newHtml = "";

    for (let i = 0; i < todolist.length; i++) {
        let { item, duedate } = todolist[i];

        newHtml += `
            <span>${item}</span>
            <span>${duedate}</span>
            <button class="bun_delete" onclick="deleteItem(${i});">Delete➖</button>
        `;
    }

    containerElement.innerHTML = newHtml;
}

function deleteItem(index) {
    todolist.splice(index, 1);
    displayItems();
}
