
function addItem() {
    const studentList = document.querySelector("#studentList");

    const newItem = document.createElement("li");

    newItem.textContent = "New Student ";

    studentList.appendChild(newItem);
}

function removeItem() {
    const studentList = document.querySelector("#studentList");

    const lastItem = studentList.lastElementChild;

    if (lastItem) {
        studentList.removeChild(lastItem);
    }
}