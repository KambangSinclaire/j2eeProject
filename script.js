$(document).ready(function () {
	$('.nav-button').click(function () {
		$('.nav-button').toggleClass('change');
	});




	const username = document.querySelector('.username');
	username.innerHTML = 'Welcome ' + JSON.parse(localStorage.getItem('username'));
	console.log(username);

	//Getting DOM elements
	const detailsDiv = document.querySelector('.detailsContainer');
	const customers = document.querySelector('.customers');
	const drivers = document.querySelector('.drivers');
	const cars = document.querySelector('.cars');
	const searchinput = document.querySelector('.search-input');
	const searchbtn = document.querySelector('.search-button');


	const api_url_car = 'https://group1-j2eeproject.herokuapp.com/taximan/api/car';
	const api_url_user = 'https://group1-j2eeproject.herokuapp.com/taximan/api/userId/8';
	const api_url_driver = 'https://group1-j2eeproject.herokuapp.com/taximan/api/driver';













	customers.addEventListener("click", (event) => {
		event.preventDefault();
		detailsDiv.innerHTML = setCustomer();
	});

	drivers.addEventListener("click", (event) => {
		event.preventDefault();
		detailsDiv.innerHTML = setDriver();
	});

	cars.addEventListener("click", (event) => {
		event.preventDefault();
		detailsDiv.innerHTML = setCar();
	});



	searchbtn.addEventListener("click", (event) => {
		event.preventDefault();
		input = searchinput.value.toLowerCase();
		if (input === "customer") {
			$.get(api_url_user, (user, error) => {
				if (user) {
					JSON.stringify(localStorage.setItem("firstname", user[0].firstname));
					JSON.stringify(localStorage.setItem("lastname", user[0].lastname));
					JSON.stringify(localStorage.setItem("username", user[0].username));
					JSON.stringify(localStorage.setItem("phone", user[0].phone));

					detailsDiv.innerHTML = setCustomer();
				}
				else {
					alert("error connecting to Database");
				}
			});
		}
		else {
			if (input === "driver") {
				detailsDiv.innerHTML = setDriver();
			}
			else {
				if (input === "car") {
					detailsDiv.innerHTML = setCar();
				}
				else {
					alert("invalid search category");
				}
			}
		}
	});


	function setCustomer() {
		return customerInfoForm = `<div class="container bg-light">
<h2 class ="text-center text-success text-capitalize my-4">Update Customer Info</h2>
<form action="">
  <div class="form-group">
    <label for="fname">First Name</label>
    <input type="text" class="form-control" id="fname" placeholder="firstname" name="email">
  </div>
  <div class="form-group">
    <label for="lname">Last Name</label>
    <input type="text" class="form-control" id="lname" placeholder="lastname" name="pswd">
  </div>
  <div class="form-group">
    <label for="lname">UserName</label>
    <input type="text" class="form-control" id="lname" placeholder="username" name="pswd">
  </div>
  <div class="form-group">
    <label for="phone">Phone</label>
    <input type="number" class="form-control" id="phone" placeholder="phone">
  </div>
  <button type="submit" class="btn btn-primary m-auto">Save</button>
</form>
</div>
</div>`;
	}

	function setDriver() {
		return `<div class="container bg-light">
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
	}

	function setCar() {
		return `<div class="container bg-light">
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
	}


});