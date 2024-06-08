
function transformString() {
    const inputString = document.getElementById("inputString").value;
    const length = inputString.length;
    let result;

    if (length % 15 === 0) {
        result = inputString.split('').reverse().map(char => char.charCodeAt(0)).join(' ');
    } else if (length % 3 === 0) {
        result = inputString.split('').reverse().join('');
    } else if (length % 5 === 0) {
        result = inputString.split('').map(char => char.charCodeAt(0)).join(' ');
    } else {
        result = inputString;
    }

    document.getElementById("result").textContent = result;
}
