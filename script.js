function learnMore() {
  alert("Welcome to Universal Cannabis Hub Malawi!");
}

function toggleDarkMode() {

  document.body.classList.toggle("dark");
}

function searchContent() {
  let input = 
    document.getElementById("searchInput");
  let search = 
    input.value.toLowerCaase();

  let cards = 
    document.querySelectorAll(".card");

  cards.forEach(function(card) {

    let text = 
      card.innerText.toLowerCaase();

    if (text.includes(search)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

function openDashboard(type) {

  let massage =
    document.getElementById("dashboardMessage");

  massage.innerText =
    "You selected the" + type + "dashboard.";
}

document.getElementById("loginForm").addEventListener(
  "submit",function(event) {
    event.preventDefault();

    let email =
      document.getElementById("loginEmail").value;
    let password =
      document.getElementById("loginPassword").value;

    if (email === "" || password === "") {

      document.getElementById("loginMessage")
      .innerText = "Please fill in all fields.";

      return;
    }

    document.getElementById("loginMessage")
    .innerText =
      "Login demo successeful!";
  });

    document.getElementById("registerForm").addEventListener(
    "submit", function(event) {

      event.preventDefault();

      let name =
        document.getElementById("registerName").value;
      let email =
        document.getElementById("registerEmail").value;
      let password =
        document.getElementById("registerPassword").value;

      if (name === "" || email === "" || password === "") {

        document.getElementById("registerMessage")
        .innerText =
          "Please fill in all fields.";

        return;
      }

      document.getElementById("registerMessage")
      .innerText =
        "Registration demo successeful!";
 
    })
      