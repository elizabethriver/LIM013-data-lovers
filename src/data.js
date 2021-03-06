//filtrado de data
const filterChampions = (data, rol) => {
  const result = data.filter(
    (objCampeones) => {
      return objCampeones.tags.includes(rol);
    }
  )
  return result;
};
//ordenar alfabetico AZ
const orderAZ = (data) => {
  const result =
    data.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      else if (a.name < b.name) {
        return -1;
      }
      else {
        return 0;
      }
    });
  return result;
};
//ordenar alfabetico ZA
const orderZA = (data) => {
  const result =
    data.sort((b, a) => {
      if (a.name > b.name) {
        return 1;
      }
      else if (a.name < b.name) {
        return -1;
       
      } else {
        return 0;
      }
    });
  return result;
};
//ordenar por dificultad de ascendente 
const orderHigher = (data) => {
  const result =
    data.sort((a, b) => {
      if (a.info.difficulty > b.info.difficulty) {
        return 1;
      }
      else if (a.info.difficulty < b.info.difficulty) {
        return -1;
      } else {
        return 0;
      }
    });
  return result;
};
//ordenar por dificultad de descendente
const orderLower = (data) => {
  const result =
    data.sort((b, a) => {
      if (a.info.difficulty > b.info.difficulty) {
        return 1
      }
      else if (a.info.difficulty < b.info.difficulty) {
        return -1;
      } else {
        return 0;
      }
    });
  return result;
};
//aplicación estadística
const stats = (num, data, statsLevel) => {
  for (let i = 0; i < data.length; i++) {
    if (statsLevel === 1) {
      return (parseFloat(data[i].stats.hp) + (parseFloat(data[i].stats.hpperlevel) * num)).toFixed(1);
    } else if (statsLevel === 2) {
      return (parseFloat(data[i].stats.mp) + (parseFloat(data[i].stats.mpperlevel) * num)).toFixed(1);
    } else if (statsLevel === 3) {
      return (parseFloat(data[i].stats.armor) + (parseFloat(data[i].stats.armorperlevel) * num)).toFixed(1);
    } else if (statsLevel === 4) {
      return (parseFloat(data[i].stats.spellblock) + (parseFloat(data[i].stats.spellblockperlevel) * num)).toFixed(1);
    } else if (statsLevel === 5) {
      return (parseFloat(data[i].stats.hpregen) + (parseFloat(data[i].stats.hpregenperlevel) * num)).toFixed(1);
    } else {
      return 0;
    }
  }
};
export { filterChampions, orderAZ, orderZA, orderHigher, orderLower, stats };




