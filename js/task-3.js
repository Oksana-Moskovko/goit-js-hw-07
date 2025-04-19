const textInput = document.querySelector('input#name-input');
const output = document.querySelector("span#name-output");


textInput.addEventListener("input", () => {
    const trimmedValue = textInput.value.trim();

    if (trimmedValue === "") {
        output.textContent = 'Anonymous';
    } else {
        output.textContent = trimmedValue;
    }
});