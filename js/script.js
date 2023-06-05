console.log("JSOK");

/*Recupero l'elemento dal DOM
Creo una lista della spesa
Creo un ciclo per leggere tutti gli elementi
Stampo tutti gli elementi in pagina
*/

// Fetch item from Dom

const listElement = document.getElementById("lista-spesa");

// I create a shopping list

const shoppingList = ["Latte", "Uova", "Pane", "Nutella", "Kinder Bueno"];

/*
// Preparation ul

let listItem = `<ul>`;

// I create a cycle

for (i = 0; i < shoppingList.length; i++) {
  listItem += `<li>${shoppingList[i]}</li>`;
}

// Closing ul

listItem += `</ul>`;

// I print the elements on page

listElement.innerHTML = listItem;

*/

// Preparation ul

let listItem = `<ul>`;

// I create a cycle

let i = 0;

while (i < shoppingList.length) {
  listItem += `<li>${shoppingList[i]}</li>`;
  i++;
}

// Closing ul

listItem += `</ul>`;

// I print the elements on page

listElement.innerHTML = listItem;
