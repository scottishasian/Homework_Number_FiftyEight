let beers = [];

const app = function () {

  const url = 'https://api.punkapi.com/v2/beers';
  const onSelect = document.querySelector('#select');
  makeRequest(url, requestCompleteDropdown)
  onSelect.addEventListener('change', function(){
    // fillData(url)
    console.log(this.value);
    console.log(beers[this.value].name);
    const ul = document.querySelector("#beer-list");
    ul.innerHTML = "";
    const li = document.createElement("li");
    const img = document.createElement("img");
    li.innerText = beers[this.value].name
    img.src = beers[this.value].image_url;
    ul.appendChild(li);
    ul.appendChild(img);

  });

}

// const showBeer = function(id) {
//   const ul = document.querySelector("#beer-list");
//   const li = document.createElement("li");
//   const img = document.createElement("img");
//   li.innerText = beers[this.value].name
//   img.src = beers[this.value].image_url;
//   ul.appendChild(li);
//   ul.appendChild(img);
// }

const makeRequest = function(url, callback) {
  const request = new XMLHttpRequest();
  request.open('GET', url); //('POST', url);
  request.send(); //if this was a post request, it would be in as an argument. (data);

  request.addEventListener('load', callback); //When completed execute callback.

}

const requestComplete = function() {
  if(this.status !== 200) return;
  const jsonString = this.responseText;
  beers = JSON.parse(jsonString);
  populateList(beers);
}

const requestCompleteDropdown = function() {
  if (this.status !== 200) return;
  const jsonString = this.responseText;
  beers = JSON.parse(jsonString);
  handlSelectChange(beers);


}

const populateList = function(beers) {
  const ul = document.querySelector('#beer-list');
  const li = document.createElement('li');
    li.innerText = beer.name;
    ul.appendChild(li);
}

const handlSelectChange = function(beers) {
  const select = document.querySelector("#select")
  beers.forEach(function(beer, index) {
    let option = document.createElement("option")
    option.innerText = beer.name;
    option.value = index;
    select.appendChild(option);

  }.bind(this));

}




document.addEventListener('DOMContentLoaded', app);
