// Fonctionnalité 1
/*
document.getElementsByTagName('footer')[0].addEventListener("click", function(e){
  
  console.log("clique");
  e.stopPropagation();
});
*/

// Fonctionnalité 1-bis

let i = 0;
document.getElementsByTagName('footer')[0].addEventListener("click", function(){
  console.log(`clic numéro ${++i}`);
});


// Fonctionnalité 2

document.getElementsByClassName("navbar-toggler")[0].addEventListener("click", function(){
  document.getElementById("navbarHeader").classList.toggle("collapse");
});


// Fonctionnalité 3

let cardOne = document.getElementsByClassName('card-body')[0];
cardOne.getElementsByTagName('button')[1].addEventListener("click", function(){
  cardOne.getElementsByTagName('p')[0].style.color = "red";
});


// Fonctionnalité 4

let cardTwo = document.getElementsByClassName('card-body')[1];
cardTwo.getElementsByTagName('button')[1].addEventListener("click", function(){
  if (cardTwo.getElementsByTagName('p')[0].style.color == "rgb(33, 37, 41)") {
    cardTwo.getElementsByTagName('p')[0].style.color = "green";
  } else {
    cardTwo.getElementsByTagName('p')[0].style.color = "rgb(33, 37, 41)";
  }
  
});

// Fonctionnalité 5

document.getElementsByTagName('header')[0].addEventListener("dblclick", function(){
  if (document.getElementsByTagName("link")[0].rel == "stylesheet") {
    document.getElementsByTagName("link")[0].rel = "disabled";
  } else {
    document.getElementsByTagName("link")[0].rel = "stylesheet";
  }
});


// Fonctionnalité 6
let viewButtons = document.getElementsByClassName('btn btn-sm btn-success');
for (let i = 0; i < viewButtons.length; i++){
  viewButtons[i].addEventListener('mouseover', function(){
    document.getElementsByClassName('card-text')[i].classList.toggle('d-none');
    if (document.getElementsByClassName('card-img-top')[i].style.width == "100%") {
      document.getElementsByClassName('card-img-top')[i].style.width = "20%";
    } else {
      document.getElementsByClassName('card-img-top')[i].style.width = "100%";
    }
  });
}


// Fonctionnalité 7

document.getElementsByClassName('btn btn-secondary my-2')[0].addEventListener("click", function(){
  let cardDiv = document.getElementsByClassName('col-md-4')[0];
  let last = document.getElementsByClassName('row')[1].lastElementChild;
  cardDiv.parentElement.insertBefore(last, cardDiv);
});


// Fonctionnalité 8

document.getElementsByClassName('btn btn-primary my-2')[0].addEventListener("click", function(e){
  let cardDiv = document.getElementsByClassName('col-md-4')[0];
  let first = document.getElementsByClassName('row')[1].firstElementChild;
  cardDiv.parentElement.appendChild(first);
  e.preventDefault();
});


// Fonctionnalité 9

let previousChangement = false; // Permet de savoir si des changements ont été appliqués

let eventKey = function(e){

  if(e && e.keyCode === 65){ // Touche A
    if (previousChangement){ // Si des changements ont été appliqués, on change juste les classes
      for (let i = 1; i < 7; i++){
        document.getElementsByClassName("row")[i].classList.remove("d-flex");
        document.getElementsByClassName("row")[i].classList.remove("justify-content-center");
        document.getElementsByClassName("row")[i].classList.remove("flex-row-reverse");
      }
    } else { // Sinon on en crée des nouvelles
      for (let i = 0; i < 5; i++){ // On crée 5 fois une nouvelle div avec la classe row que l'on vient rajouter à notre div principale
      let newDiv = document.createElement("div");
      newDiv.classList.add("row");
      document.getElementsByClassName("album py-5 bg-light")[0].getElementsByTagName('div')[0].appendChild(newDiv);
      }
      for (let i = 2; i < 7; i++){ // On vient remplacer chaque div créées par les anciennes
        document.getElementsByClassName("row")[i].appendChild(document.getElementsByClassName("col-md-4")[1]);
      }
      previousChangement = true;
    }
  }

  if(e && e.keyCode === 89){ // Touche Y
    if (previousChangement){
      for (let i = 1; i < 7; i++){
        document.getElementsByClassName("row")[i].classList.add("d-flex");
        document.getElementsByClassName("row")[i].classList.add("justify-content-center");
        document.getElementsByClassName("row")[i].classList.remove("flex-row-reverse");
      }
    } else {
      // On vient modifier la classe de la première carte
      document.getElementsByClassName("row")[1].classList.add("d-flex")
      document.getElementsByClassName("row")[1].classList.add("justify-content-center")
      for (let i = 0; i < 5; i++){ // On crée 5 fois une nouvelle div avec la classe row que l'on vient rajouter à notre div principale
        let newDiv = document.createElement("div");
        newDiv.classList.add("row");
        newDiv.classList.add("d-flex");
        newDiv.classList.add("justify-content-center");
        document.getElementsByClassName("album py-5 bg-light")[0].getElementsByTagName('div')[0].appendChild(newDiv);
      }
      for (let i = 2; i < 7; i++){ // On vient remplacer chaque div créées par les anciennes
        document.getElementsByClassName("row")[i].appendChild(document.getElementsByClassName("col-md-4")[1]);
      }
      previousChangement = true;
    }
  }

  if(e && e.keyCode === 80){ // Touche P
    if (previousChangement){
      for (let i = 1; i < 7; i++){
        document.getElementsByClassName("row")[i].classList.remove("d-flex");
        document.getElementsByClassName("row")[i].classList.remove("justify-content-center");
        document.getElementsByClassName("row")[i].classList.add("flex-row-reverse");
      }
    } else {
      // On vient modifier la classe de la première card
      document.getElementsByClassName("row")[1].classList.add("flex-row-reverse")
      for (let i = 0; i < 5; i++){ // On crée 5 fois une nouvelle div avec la classe row que l'on vient rajouter à notre div principale
        let newDiv = document.createElement("div");
        newDiv.classList.add("row");
        newDiv.classList.add("flex-row-reverse");
        document.getElementsByClassName("album py-5 bg-light")[0].getElementsByTagName('div')[0].appendChild(newDiv);
      }
      for (let i = 2; i < 7; i++){ // On vient remplacer chaque div créées par les anciennes
        document.getElementsByClassName("row")[i].appendChild(document.getElementsByClassName("col-md-4")[1]);
      }
      previousChangement = true;
    }
  }

  if(e && e.keyCode === 66){ // Touche B
    for (let i = 0; i < 6; i++){ // On remet les cards dans la première div
      document.getElementsByClassName("row")[1].appendChild(document.getElementsByClassName("col-md-4")[i]);
    }
    for (let i = 0; i < 5; i++){ // On enlève les div avec la class row précédement créées
      document.getElementsByClassName("row")[2].remove();
    }
  }
}

document.getElementsByClassName("navbar")[0].addEventListener("click", eventKey);
document.getElementsByClassName("navbar")[0].addEventListener("keyup", eventKey);