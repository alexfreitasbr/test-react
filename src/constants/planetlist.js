const planetsImageList = {
    "Tatooine": "https://cryptospro.com.br/planetas/planeta_0000_tatooine.png",
    "Naboo": "https://cryptospro.com.br/planetas/planeta_0001_naboo.png",
    "Mustafar": "https://cryptospro.com.br/planetas/planeta_0002_mustafar.png",
    "Kashyyyk": "https://cryptospro.com.br/planetas/planeta_0003_kashyyyk.png",
    "Hoth": "https://cryptospro.com.br/planetas/planeta_0004_hoth.png",
    "Endor": "https://cryptospro.com.br/planetas/planeta_0005_endor.png",
    "Dagobah": "https://cryptospro.com.br/planetas/planeta_0006_dagobah.png",
    "Coruscan": "https://cryptospro.com.br/planetas/planeta_0007_coruscant.png",
    "Bespin": "https://cryptospro.com.br/planetas/planeta_0008_bespin.png",
    "Alderaan": "https://cryptospro.com.br/planetas/planeta_0009_alderaan.png",
}

export function getplanetImage(planet) {
    return planetsImageList[planet] || "https://cryptospro.com.br/planetas/planeta_0000_tatooine.png";
  }