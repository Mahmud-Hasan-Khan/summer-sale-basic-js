let total = 0;

function handleAddToCart(target) {
    const selectedItemContainer = document.getElementById('selected-items');
    const itemName = target.childNodes[3].childNodes[3].innerText;
    const count = selectedItemContainer.childElementCount;
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td class="text-2xl font-medium pr-2">${count + 1}.</td>
    <td><h2 class="text-2xl font-medium">${itemName}</h2></td>
`;
    selectedItemContainer.appendChild(tr);
    // calculate total price
    const itemPrice = target.childNodes[3].childNodes[5].innerText.split(" ")[0];
    total = parseFloat(total) + parseFloat(itemPrice);
    const totalPrice = parseFloat(total).toFixed(2);
    document.getElementById('total-price').innerText = totalPrice;

    updateButtonState();
}

// document.getElementById("btn-purchase").addEventListener('click', function () {
//     if (total > 0) {
//         // document.getElementById("btn-purchase").setAttribute('disabled', true);
//         document.getElementById("btn-purchase").removeAttribute('disabled');
//     }
// })

document.getElementById("btn-purchase").addEventListener('click', function () {
    // Your purchase logic here
});

function updateButtonState() {
    if (total > 0) {
        document.getElementById("btn-purchase").removeAttribute('disabled');
        console.log('ccccc');
    } else {
        document.getElementById("btn-purchase").setAttribute('disabled', true);

    }
}

// Call this function whenever the total changes
updateButtonState();


