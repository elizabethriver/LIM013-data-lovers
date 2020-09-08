import data from "./data/lol/lol.js";

//evento para llamar al top cinco//
const arrDataLolTotal = Object.values(data.data);
const buttonfirstUser = document.getElementById("Top5"); //Constantes dentro del DOM
const containerTopTeam = document.getElementById("topchampions");
<<<<<<< HEAD
=======

>>>>>>> 88d64097500a90cadebc5f586b0b282e8e8b5d39

//función  para  top cinco//
const getTopFive = (array) => {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
<<<<<<< HEAD
=======

>>>>>>> 88d64097500a90cadebc5f586b0b282e8e8b5d39
    newArray.push({
      name: array[i].name,
      title: array[i].title,
      splash: array[i].splash,
      hp: array[i].stats.hp,
      info: array[i].info,
    });
<<<<<<< HEAD
=======

>>>>>>> 88d64097500a90cadebc5f586b0b282e8e8b5d39
  }
  const newArrayOrder = newArray.sort((a, b) => {
    if (a.hp < b.hp) {
      return 1;
    } else {
      return -1;
    }
  });
  return newArrayOrder.slice(0, 5);
};

<<<<<<< HEAD
=======

>>>>>>> 88d64097500a90cadebc5f586b0b282e8e8b5d39
const arrDataLolTopTeam = getTopFive(arrDataLolTotal);
const showTopTeam = (array) => {
  for (let i = 0; i < array.length; i++) {
    containerTopTeam.innerHTML += ` 
<<<<<<< HEAD
=======

>>>>>>> 88d64097500a90cadebc5f586b0b282e8e8b5d39
        <div class="card-link">
          <figure>
          <div class="frontalCard">
          <img class="frontalTop" src="${array[i].splash}"/>
          <p class="frontalText">${array[i].name}</p>
          <li class="front-Hp"><img id="Guerracard" src="./img/guerra.png"> Puntos de Vida: ${array[i].hp}</li>
          </div>
          <div class="traseraTop">
            <li class="post-names">${array[i].name}</li>
            <li class="post-title"> "${array[i].title}"</li><hr>
            <li class="post-Info">Info:</li>
            <li class="post-Info-attack">Ataque: ${array[i].info.attack}</li>
            <li class="post-Info-defense">Defensa: ${array[i].info.defense}</li>
            <li class="post-Info-magic">Magia: ${array[i].info.magic}</li>
            </div>
          </figure>
        </div>`;
  }
};
<<<<<<< HEAD
=======

buttonfirstUser.addEventListener("click", showTopTeam(arrDataLolTopTeam));
>>>>>>> 88d64097500a90cadebc5f586b0b282e8e8b5d39

buttonfirstUser.addEventListener("click", showTopTeam(arrDataLolTopTeam));
