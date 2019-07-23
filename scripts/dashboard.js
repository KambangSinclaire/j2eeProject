$(document).ready(() => {

  const username = document.querySelector('.username');
  username.innerHTML = 'Welcome ' + JSON.parse(localStorage.getItem('usernameA'));
  console.log(username);

  //Getting DOM elements
  const detailsDiv = document.querySelector('.detailsContainer');
  const operationsDiv = document.querySelector('.operations');
  const searchinput = document.querySelector('.search-input');
  const searchbtn = document.querySelector('.search-button');
  const api_url_car = 'http://192.168.56.1:6900/taximan/api/car';
  const api_url_user = 'http://192.168.43.14:6900/taximan/api/userId/8';
  const api_url_driver = 'http://192.168.56.1:6900/taximan/api/driver';







  const carInfoForm = `<div class="container">
    <h2 class ="text-center text-success text-capitalize my-4">Update Car Info</h2>
    <form action="">
      <div class="form-group">
        <label for="model">Model</label>
        <input type="email" class="form-control" id="model" placeholder="Car model" name="email">
      </div>
      <div class="form-group">
        <label for="platenum">Plate Number</label>
        <input type="password" class="form-control" id="platenum" placeholder="Plate number" name="pswd">
      </div>
      <div class="form-group">
        <label for="numseats">Number of seats</label>
        <input type="password" class="form-control" id="numseats" placeholder="Number of seats" name="pswd">
      </div>
      <div class="form-group">
        <input type = "checkbox" checked>
        <label for="pwd" class = "pr-4">Status</label>
      </div>
      <button type="submit" class="btn btn-primary m-auto">Save</button>
    </form>
  </div>`;

  const driverInfoForm = `<div class="container">
  <h2 class ="text-center text-success text-capitalize my-4">Update Driver Info</h2>
  <form action="">
    <div class="form-group">
      <label for="fname">First Name</label>
      <input type="text" class="form-control" id="fname" placeholder="First Name" name="email">
    </div>
    <div class="form-group">
      <label for="lname">Last Name</label>
      <input type="text" class="form-control" id="lname" placeholder="Last Name" name="pswd">
    </div>
    <div class="form-group">
      <label for="phone">Phone</label>
      <input type="number" class="form-control" id="phone" placeholder="Contact" name="pswd">
    </div>
    <button type="submit" class="btn btn-primary m-auto">Save</button>
  </form>
</div>`;

  const customerInfoForm = `<div class="container">
<h2 class ="text-center text-success text-capitalize my-4">Update Customer Info</h2>
<form action="">
  <div class="form-group">
    <label for="fname">First Name</label>
    <input type="text" class="form-control" id="fname" placeholder="${localStorage.getItem('firstname')}" readonly name="email">
  </div>
  <div class="form-group">
    <label for="lname">Last Name</label>
    <input type="text" class="form-control" id="lname" placeholder="${localStorage.getItem('lastname')}" readonly name="pswd">
  </div>
  <div class="form-group">
    <label for="lname">UserName</label>
    <input type="text" class="form-control" id="lname" placeholder="${localStorage.getItem('username')}" readonly name="pswd">
  </div>
  <div class="form-group">
    <label for="phone">Phone</label>
    <input type="number" class="form-control" id="phone" placeholder="${localStorage.getItem('phone')}" readonly name="pswd">
  </div>
  <button type="submit" class="btn btn-primary m-auto">Save</button>
</form>
</div>
</div>`;

  searchbtn.addEventListener("click", (event) => {
    event.preventDefault();
    input = searchinput.value.toLowerCase();
    if (input === "customer") {
      $.get(api_url_user, (user, error) => {
        if (user) {
          localStorage.setItem("firstname", user[0].firstname);
          localStorage.setItem("lastname", user[0].lastname);
          localStorage.setItem("username", user[0].username);
          localStorage.setItem("phone", user[0].phone);

          detailsDiv.innerHTML = customerInfoForm;
        }
        else {
          alert("error connecting to Database");
        }
      });
    }
    else {
      if (input === "driver") {
        detailsDiv.innerHTML = driverInfoForm;
      }
      else {
        if (input === "car") {
          detailsDiv.innerHTML = carInfoForm;
        }
        else {
          alert("invalid search category");
        }
      }
    }
  });












});


