// variables
var select = document.getElementById("breeds")
var image = document.createElement("img");
var country = document.querySelector(".contry");
var picture = document.querySelector(".picture");
var natural = document.querySelector("._naturel");
var featuress = document.querySelector(".features");
var breeds = document.querySelector(".name");
var desc = document.querySelector(".description");
var life = document.querySelector(".life_span");
var btn = document.querySelector(".btn");
var rare = document.querySelector(".is_rare");
var linkWikipedia = document.getElementById("link_wiki");
var stars = document.querySelector(".stars");
// functions set data onload
function loadCat(){
    fetch("https://api.thecatapi.com/v1/breeds").then(response => response.json()).then(data =>{
        for(var i = 0;i<data.length;i++){
            option = document.createElement("option");
            select.appendChild(option);
            option.innerText = `${data[i].name}`;
            option.value = data[i].id;
        }
        picture.appendChild(image);
        image.src = data[0].image.url;
        image.alt = "cat image";
        image.className = "rounded";
        breeds.innerText = `${data[0].name}`;
        country.innerHTML = `<img src="https://flagcdn.com/32x24/${data[0].country_code.toLowerCase()}.png" alt=""> ${
          data[0].origin
        }`;
        natural.innerText = data[0].natural == 1 ? "Natural" : "Hypoallergenic";
        rare.innerHTML =
          data[0].rare == 1
            ? 'is rare? <span>rare</span>'
            : 'is rare? <span>spread</span>';
        life.innerText = `life span(${data[0].life_span})`;
        var arrayFeatrures = [
          data[0].adaptability,
          data[0].affection_level,
          data[0].dog_friendly,
          data[0].energy_level,
          data[0].grooming,
          data[0].intelligence,
          data[0].stranger_friendly,
          data[0].social_needs,
          data[0].vocalisation,
          data[0].shedding_level,
        ];
        var score = 0;
        for(var i = 0;i<arrayFeatrures.length;i++){
            score += arrayFeatrures[i];
            var feature = document.createElement("h4");
            featuress.appendChild(feature);
            if(arrayFeatrures[i] >=3){
                switch (i) {
                  case 0:
                    feature.innerText += " adaptability ,";
                    continue;
                  case 1:
                    feature.innerText += " affection ,";
                    continue;
                  case 2:
                    feature.innerText += " dog friendly ,";
                    continue;
                  case 3:
                    feature.innerText += " energy ,";
                    continue;
                  case 4:
                    feature.innerText += " grooming ,";
                    continue;
                  case 5:
                    feature.innerText += " health ,";
                    continue;
                  case 6:
                    feature.innerText += " stranger friendly ,";
                    continue;
                  case 7:
                    feature.innerText += " social needs ,";
                    continue;
                  case 8:
                    feature.innerText += " vocalisation ,";
                    continue;
                  default:
                      feature.innerText += "adaptability";
                    break;
                }



            }
        }
        // function called set stars
        setStars(score);
        desc.innerText = `${data[0].description}`;
        linkWikipedia.href = `${data[0].wikipedia_url}`;
    })
}
window.onload = loadCat;
// function onchange select value
function breedsChange(){
    desc.innerText = "";

    var cats = select.value;
    fetch("https://api.thecatapi.com/v1/breeds").then((response) =>
      response.json()
    ).then(data => {
        for (var i = 0; i < data.length; i++) {
          if(data[i].id == cats){
              image.src = data[i].image.url;
              breeds.innerText = `${data[i].name}`;
              country.innerHTML = `<img src="https://flagcdn.com/32x24/${data[i].country_code.toLowerCase()}.png" alt=""> ${
                data[i].origin
              }`;
              natural.innerText =
                data[i].natural == 1 ? "Natural" : "Hypoallergenic";
              life.innerText = `life span(${data[i].life_span})`;
              var arrayFeatrures = [
                data[i].adaptability,
                data[i].affection_level,
                data[i].dog_friendly,
                data[i].energy_level,
                data[i].grooming,
                data[i].intelligence,
                data[i].stranger_friendly,
                data[i].social_needs,
                data[i].vocalisation,
                data[i].shedding_level,
              ];
              var score = 0
              featuress.innerHTML = "";
              for (var x = 0; x < arrayFeatrures.length; x++) {
                  score += arrayFeatrures[x];
                var feature = document.createElement("h4");
                featuress.appendChild(feature);
                if (arrayFeatrures[x] >= 3) {
                  switch (x) {
                    case 0:
                      feature.innerText += " adaptability ,";
                      continue;
                    case 1:
                      feature.innerText += " affection ,";
                      continue;
                    case 2:
                      feature.innerText += " dog friendly ,";
                      continue;
                    case 3:
                      feature.innerText += " energy ,";
                      continue;
                    case 4:
                      feature.innerText += " grooming ,";
                      continue;
                    case 5:
                      feature.innerText += " health ,";
                      continue;
                    case 6:
                      feature.innerText += " stranger friendly ,";
                      continue;
                    case 7:
                      feature.innerText += " social needs ,";
                      continue;
                    case 8:
                      feature.innerText += " vocalisation ,";
                      continue;
                    default:
                      feature.innerText += "adaptability";
                      break;
                  }

                  // `
                }
              }
              setStars(score)
              desc.innerText = `${data[i].description}`;
              linkWikipedia.href = `${data[i].wikipedia_url}`;
              rare.innerHTML =
                data[i].rare == 1
                  ? "is rare? <span>rare</span>"
                  : "is rare? <span>spread</span>";
                  break;
          }
        }
    });
}
// function for set stars Evaluation
function setStars(score){
    if (score >= 40 && score < 45) {
      stars.innerHTML = `
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
            `;
    } else if (score >= 38) {
      stars.innerHTML = `
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
            `;
    } else if (score <= 20) {
      stars.innerHTML = `
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
            `;
    } else if (score > 20 && score < 28) {
      stars.innerHTML = `
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
            `;
    } else if (score >= 28 && score < 33) {
      stars.innerHTML = `
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
            `;
    } else if (score >= 33 && score < 38) {
      stars.innerHTML = `
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
                <i class="far fa-star"></i>
            `;
    } else if (score >= 45) {
      stars.innerHTML = `
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            `;
    }
}
