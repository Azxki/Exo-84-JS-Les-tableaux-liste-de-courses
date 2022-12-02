// Inutile de modifier le code suivant
let articles = [
    "Orangina",
    "Creme Fraiche",
    "Tartiflette",
    "Emmental",
    "Bananes",
    "Chips",
    "Bieres",
    "Pizza"
];

// Votre code à partir d'ici :


let ul = document.getElementById('listeCourse')
let button = document.getElementById('add')
let input =  document.getElementsByTagName("input")

for (let obj of articles) {
    let list = document.createElement('li')
    list.innerHTML = obj;
    ul.appendChild(list)

    list.addEventListener('click', function () {
        list.remove();
    })
}

