const button = document.getElementById("btn");
const nameInput = document.getElementById("nameInput");
const result = document.getElementById("result");

button.addEventListener("click", function () {
    const name = nameInput.value.trim();

    if (name === "") {
        result.textContent = "Пожалуйста, введите имя";
        return;
    }

    result.textContent = "Привет, " + name + "!";
});