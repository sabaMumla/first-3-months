let cardName = '';
let cardNumber = '';
let data = '';
let cvc = '';
let country = '';
let zip = '';

const addCardArray = []

function catchValue() {
    cardName = document.getElementById('cardName').value;
    cardNumber = document.getElementById('cardNumber').value;
    data = document.getElementById('data').value;
    cvc = document.getElementById('cvc').value;
    country = document.getElementById('country').value; 
    zip = document.getElementById('zip').value;
}


function fillTheArray() {
    addCardArray.push({
        cardName: cardName,
        CardNumber: cardNumber,
        Data: data,
        Cvc: cvc,
        Country: country,
        Zip: zip
    })

    console.log('Card Info:', addCardArray)
}

function clearLInes() {
    document.getElementById('cardName').value = '';
    document.getElementById('cardNumber').value = '';
    document.getElementById('data').value = '';
    document.getElementById('cvc').value = '';
    document.getElementById('country').value = '';
    document.getElementById('zip').value = '';
}



function addCard() {
    catchValue();
    if (cardName && cardNumber && data && cvc && country && zip) {
        fillTheArray();
        clearLines();
    } else {
        alert('ბარათის დასამატებლად შეავსეთ ველები სრულად');
    }
}






















//regax
//cardNamber validations and sintax. is testing by 'W3 school'
document.getElementById('cardNumber').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 16) {
        value = value.slice(0, 16);
    }
    let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
    e.target.value = formattedValue;
});
document.getElementById('data').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, ''); 
    if (value.length > 4) {
        value = value.slice(0, 4);
    }
    let formattedValue = value.replace(/(\d{2})(\d{0,2})/, '$1/$2');
    e.target.value = formattedValue;
});
document.getElementById('cvc').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, ''); 
    if (value.length > 3) {
        value = value.slice(0, 3);
    }
    e.target.value = value;
});
