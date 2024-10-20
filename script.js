function createProductsPage(data){
    var Card = document.getElementById("col");
    Card.innerHTML = "";
    products = data.products;
    for (let i = 0; i < products.length; i++) {
        let desc = products[i].description;
        let image = products[i].image;
        let url = products[i].url;
        let imageAlt = products[1].imageAlt;

        // construct the HTML element
        let AddCard = document.createElement("div");
        AddCard.classList.add("col"); // Add Bootstrap class to the column
        AddCard.innerHTML = `
            <div class="card shadow-sm">
            <img src="${image}" alt="${imageAlt}">
            <div class="card-body">
              <p class="card-text">${desc}</p>
              <a href="${url}" target="_blank">Purchase</a>
            </div>
          </div>
        `;
        Card.appendChild(AddCard);
    }
}

function createRobotsPage(data){
  var dCard = document.getElementById("deltaBots");
  var oCard = document.getElementById("otherBots");
  dCard.innerHTML = "";
  oCard.innerHTML = "";
  temp = data.deltasRobots;
  for (let i = 0; i < temp.length; i++) {
      let desc = temp[i].description;
      let image = temp[i].image;
      let url = temp[i].url;
      let imageAlt = temp[1].imageAlt;

      // construct the HTML element
      let AddCard = document.createElement("div");
      AddCard.classList.add("col"); // Add Bootstrap class to the column
      AddCard.innerHTML = `
          <div class="card shadow-sm">
          <img src="${image}" alt="${imageAlt}">
          <div class="card-body">
            <p class="card-text">${desc}</p>
            <a href="${url}" target="_blank">Purchase</a>
          </div>
        </div>
      `;
      dCard.appendChild(AddCard);
  }

  temp = data.otherRobots;
  for (let i = 0; i < temp.length; i++) {
      let desc = temp[i].description;
      let image = temp[i].image;
      let url = temp[i].url;
      let imageAlt = temp[1].imageAlt;

      // construct the HTML element
      let AddCard = document.createElement("div");
      AddCard.classList.add("col"); // Add Bootstrap class to the column
      AddCard.innerHTML = `
          <div class="card shadow-sm">
          <img src="${image}" alt="${imageAlt}">
          <div class="card-body">
            <p class="card-text">${desc}</p>
            <a href="${url}" target="_blank">Purchase</a>
          </div>
        </div>
      `;
      oCard.appendChild(AddCard);
  }
}

function createIdeasPage(data){
  var Card = document.getElementById("col");
  Card.innerHTML = "";
  temp = data.ideas;
  for (let i = 0; i < temp.length; i++) {
      let title = temp[i].title;
      let mainT = temp[i].mainText;
      let subT = temp[i].subText;

      // construct the HTML element
      let AddCard = document.createElement("div");
      AddCard.classList.add("col"); // Add Bootstrap class to the column
      AddCard.innerHTML = `
        <div class="card shadow-sm">
          <div class="card-body">
            <h2>${title}</h2>
            <p class="card-text">${mainT}</p>
            <p class="card-text">${subT}</p>
          </div>
        </div>
      `;
      Card.appendChild(AddCard);
  }
}

function createPeoplePage(data){
  var Card = document.getElementById("col");
  Card.innerHTML = "";
  temp = data.people;
  for (let i = 0; i < temp.length; i++) {
      let name = temp[i].name;
      let email = temp[i].email;
      let prof = temp[i].profession;
      let git = temp[i].github;

      // construct the HTML element
      let AddCard = document.createElement("div");
      AddCard.classList.add("col"); // Add Bootstrap class to the column
      AddCard.innerHTML = `
        <div class="card shadow-sm">
          <div class="card-body">
            <h2>${name}</h2>
            <p class="card-text">${email}</p>
            <p class="card-text">${prof}</p>
            <p class="card-text"><a href= "${git}">Check out our other Git projects!</a></p>
          </div>
        </div>
      `;
      Card.appendChild(AddCard);
  }
}


addEventListener("DOMContentLoaded",(event)=>{
  if(document.title == "Products"){
    fetch("./data.json")
    .then((response) => response.json())
    .then((data) => createProductsPage(data))
    .catch((error) => console.log("Error: " + error))
  } else if (document.title == "Robots") {
    fetch("./data.json")
    .then((response) => response.json())
    .then((data) => createRobotsPage(data))
    .catch((error) => console.log("Error: " + error))
  } else if (document.title == "Ideas") {
    fetch("./data.json")
    .then((response) => response.json())
    .then((data) => createIdeasPage(data))
    .catch((error) => console.log("Error: " + error))
  } else if (document.title == "Students") {
    fetch("./data.json")
    .then((response) => response.json())
    .then((data) => createPeoplePage(data))
    .catch((error) => console.log("Error: " + error))
  }
  
});
