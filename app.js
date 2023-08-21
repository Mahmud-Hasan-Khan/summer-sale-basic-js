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
    applyCoupon();
}

// apply coupon (20% discount) when price is more than 200 tk
document.getElementById("btn-coupon").addEventListener('click', function () {
    console.log('clicked');
    const couponInputField = document.getElementById('coupon-input-field');
    const couponValue = couponInputField.value;
    if (couponValue === "SELL200") {
        const discount = parseFloat(total * 0.20).toFixed(2);
        const discountPrice = parseFloat(total - discount).toFixed(2);

        document.getElementById('discount').innerText = discount;
        document.getElementById('total').innerText = discountPrice;
    } else {
        alert("You Have Provided Wrong Coupon Code!, Please provide proper Coupon Code")
    }
    couponInputField.value = "";
})


// "Apply Coupon" button Disable & Enable
function applyCoupon() {
    if (total >= 200) {
        document.getElementById("btn-coupon").removeAttribute('disabled');
    } else {
        document.getElementById("btn-coupon").setAttribute('disabled', true);
    }
}

// "Make Purchase" Button Disable & Enable
function updateButtonState() {
    if (total > 0) {
        document.getElementById("btn-purchase").removeAttribute('disabled');
    } else {
        document.getElementById("btn-purchase").setAttribute('disabled', true);
    }
}
updateButtonState();

// Reload page after clicking modal "Go Home" button
function goHome() {
    location.reload();
}


