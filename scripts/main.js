const productTitle = document.querySelectorAll('p');
const row = document.querySelector('.displayRow');
const UL = document.querySelector('#Sn');
const ProductName = document.querySelector('#ProductName');
const mainBody = document.querySelector('.mainBody');
const userEmail = document.querySelector('.userEmail');
const FirstName = document.querySelector('.firstname');
const LastName = document.querySelector('.lastname');
const loginBtn = document.querySelector('.logInBtn');
const signUpBtn = document.querySelector('.signUp');
const signOut = document.querySelector('.signOut');
const profile = document.querySelector('.profile');
const navbarSection = document.querySelector('.navbar');



const url = "http://192.168.43.14:9000/hci.api/products";
let Allproducts;


$(document).ready(() => {
    let UserEmail = JSON.parse(localStorage.getItem('email'));
    let firstname = JSON.parse(localStorage.getItem('firstname'));
    let lastname = JSON.parse(localStorage.getItem('lastname'));
    if (UserEmail != null) {
        FirstName.innerHTML = firstname;
        LastName.innerHTML = lastname;
        userEmail.innerHTML = UserEmail;
        loginBtn.classList.toggle('d-none');
        signUpBtn.classList.toggle('d-none');
        profile.classList.toggle('d-inline');
        navbarSection.classList.toggle('mt-3');
    } else {
        profile.classList.toggle('d-none');
        navbarSection.classList.toggle('mt-3');
        signUpBtn.classList.toggle('d-none');
    }

    $.get(url, (products, error) => {

        if (error === "success") {
            let i = 0;
            Allproducts = products;
            // Looping through the products returned 
            products.forEach((product, i) => {
                let div = document.createElement('div');
                div.classList.add("col-xs-12");
                div.classList.add("col-sm-6");
                div.classList.add("col-md-4");
                div.classList.add("col-lg-3");

                let img = document.createElement('img');
                img.src = `${products[i].url}`;
                img.classList.add("img-fluid");
                img.classList.add("openImg");
                img.classList.add("open");

                // img.classList.add("img-thumbnail");
                // img.classList.add("border-danger");
                div.appendChild(img);
                row.append(div);
            });

            const openImg = document.querySelectorAll('.openImg');
            openImg.forEach((img, i) => {
                img.addEventListener('click', (event) => {
                    event.preventDefault();

                    localStorage.setItem('carName', JSON.stringify(Allproducts[i].name));
                    localStorage.setItem('price', JSON.stringify(Allproducts[i].price));
                    localStorage.setItem('weight', JSON.stringify(Allproducts[i].weight));
                    localStorage.setItem('waranty', JSON.stringify(Allproducts[i].waranty));
                    localStorage.setItem('model', JSON.stringify(Allproducts[i].model));
                    localStorage.setItem('companyMark', JSON.stringify(Allproducts[i].companyMark));
                    localStorage.setItem('duration', JSON.stringify(Allproducts[i].duration));
                    localStorage.setItem('isbn', JSON.stringify(Allproducts[i].isbn));
                    localStorage.setItem('url', JSON.stringify(Allproducts[i].url));
                    localStorage.setItem('quantity', JSON.stringify(Allproducts[i].quantity));

                    window.location = 'http://192.168.43.14:5500/Client_Side/src/Details/productDetails.html';

                });
            });
        } else {
            alert('Server still loading.... please be patient');
        }


    });

});