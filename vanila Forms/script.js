let names = '';
let lname = '';
let email = '';
let password = '';
let tel = '';
let city = '';
let gender = '';

const userArray = [];

function sendConsole() {

  names = document.getElementsByName('name')[0].value;
  lname = document.getElementsByName('lname')[0].value;
  email = document.getElementsByName('email')[0].value;
  password = document.getElementsByName('password')[0].value;
  tel = document.getElementsByName('tel')[0].value;
  city = document.getElementsByName('city')[0].value;

  let genderRadio = document.querySelector('input[name="gender"]:checked');
  gender = genderRadio ? genderRadio.value : '';

  if (!names || !lname || !email || !password || !tel || !city || !gender) {
    alert('გთხოვთ შეავსოთ ყველა ველი.')
  } else {
    userArray.push({
      Name: names,
      LastName: lname,
      Email: email,
      Password: password,
      Phone: tel,
      City: city,
      Gender: gender
    });

    console.log('User Information:', userArray);
    clearForm();
  }

}

function clearForm() {
  document.getElementsByName('name')[0].value = '';
  document.getElementsByName('lname')[0].value = '';
  document.getElementsByName('email')[0].value = '';
  document.getElementsByName('password')[0].value = '';
  document.getElementsByName('tel')[0].value = '';
  document.getElementsByName('city')[0].value = '';
  document.querySelectorAll('input[name="gender"]').forEach(input => input.checked = false);
}