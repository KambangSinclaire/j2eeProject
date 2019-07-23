// Acessing Dom elements for login
const email = document.querySelector('.email');
const password = document.querySelector('#password');
const sendBtn = document.querySelector('.send');
const loginBtn = document.querySelector('.login');
const signup_link = document.querySelector('.signup_link');
const error_para = document.querySelector('.error');
const myEmailShow = document.querySelector('.myEmail');
// console.log(sendBtn);


const signUp_url = 'https://group1-j2eeproject.herokuapp.com/taximan/api/admin/registerUser';
const login_url = 'https://group1-j2eeproject.herokuapp.com/taximan/api/admin/login';
var counter = 0;
var user = [];



$(document).ready(() => {

    loginBtn.addEventListener('click', (event) => {
        event.preventDefault();


        const Admindetails = {
            email: email.value,
            password: password.value
        }

        $.post(login_url, Admindetails, (admin, status) => {

            if (admin) {
                localStorage.setItem('username', JSON.stringify(admin[0].username));
                window.location = '../../index.html';
                return;
            } else {
                alert('Hello... Error logging in')
            }
        });

    });

});




// loginBtn.addEventListener('click', (event) => {
//     event.preventDefault();
//     ajax.onload = function () {
//         if (this.status == 200) {
//             let user_returned = JSON.parse(this.responseText);
//             console.log(JSON.parse(this.responseText));

//         } else {
//             alert("Login unsuccessful. Server Error");
//         }
//     }
//     ajax.open('GET', login_url + '/' + email.value, true);
//     ajax.send();
// });



// loginBtn.addEventListener('click', (event) => {
//     event.preventDefault();
//     if (password.value == user[0].password) {
//         localStorage.setItem("email", JSON.stringify(user[0].email));
//         localStorage.setItem("firstname", JSON.stringify(user[0].firstName));
//         localStorage.setItem("lastname", JSON.stringify(user[0].lastName));
//         window.location = 'http://192.168.43.14:5500/Client_Side/index.html';
//     } else {
//         error_para.innerHTML = 'Password not valid'
//         error_para.classList.add('d-inline');
//         password.style.border = '3px solid red';
//     }
// });