// Accessing Dom Elements for signup
const signUpEmail = document.querySelector('.signUpEmail');
const firstName = document.querySelector('.firstName');
const lastName = document.querySelector('.lastName');
const Address = document.querySelector('.address');
const Phone = document.querySelector('.phone');
const signUpPassword = document.querySelector('.signUpPassword');
const cpassword = document.querySelector('.cpassword');
const signUpBtn = document.querySelector('.signUpBtn');

const ajax = new XMLHttpRequest();
const signUp_url = 'http://192.168.43.14:9000/hci.api/users/registerUser';

// Post User Details
signUpBtn.addEventListener('click', (event) => {
    event.preventDefault();

    let firstname = firstName.value;
    let lastname = lastName.value;
    let email = signUpEmail.value;
    let address = Address.value;
    let phone = Phone.value;
    let password = signUpPassword.value;

    let validEmail = new RegExp('@').test(email)


    // Create new user object
    const NewUser = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: signUpEmail.value,
        address: Address.value,
        phone: Phone.value,
        password: signUpPassword.value
    }

    if (firstname == '') {
        firstname.style.border = '3px solid red';
        return;
    } else {
        if (lastname == '') {
            lastname.style.border = '3px solid red';
            return;
        } else {
            if (email == '' || !email) {
                email.style.border = '3px solid red';
                return;
            } else {
                if (address == '') {
                    address.style.border = '3px solid red';
                    return;
                } else {
                    if (phone == '') {
                        phone.style.border = '3px solid red';
                        return;
                    } else {
                        if (password == '') {
                            password.style.border = '3px solid red';
                            return;
                        } else {
                            if (cpassword.value == '') {
                                cpassword.style.border = '3px solid red';
                                return;
                            } else {
                                if (cpassword.value != password) {
                                    alert('Your Passwords don\'t match')
                                    return;
                                } else {

                                    if (password.length < 7) {
                                        alert('Password Should be greater 7 characters')
                                        return;
                                    } else {
                                        $(document).ready(() => {

                                            $.post(signUp_url, NewUser, (error, user) => {
                                                window.location = `http://192.168.43.14:5500/Client_Side/UserRegistration/login.html`;

                                            });
                                        });
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

    }

});






// console.log(NewUser);
// const User = `firstName='${firstName.value}'&lastName='${lastName.value}'&email='${signUpEmail.value}'&password='${signUpPassword.value}'&address='${Address.value}'&phone='${Phone.value}'`;

// ajax.open("POST", signUp_url, true);
// ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
// ajax.onload = function () {
//     if (this.readyState == ajax.DONE && this.status == 200) {
//         alert('success');
//         console.log(JSON.parse(this.responseText));
//          window.location = 'http://localhost:5500/Client_Side/UserRegistration/login.html';

//     } else {
//         alert('submission error');
//     }
// }
// ajax.send(User);