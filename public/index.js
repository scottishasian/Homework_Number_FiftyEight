const app = function () {

  const url = 'https://api.punkapi.com/v2/beers';
  const onButtonClick = document.querySelector('#button');
  const onSelect = document.querySelector('#select');
  onSelect.addEventListener('change', fillData(url));

  // makeRequest(url, requestComplete);

}

const fillData = function(url) {

  makeRequest(url, requestCompleteDropdown)
}

const makeRequest = function(url, callback) {
  const request = new XMLHttpRequest();
  request.open('GET', url); //('POST', url);
  request.send(); //if this was a post request, it would be in as an argument. (data);

  request.addEventListener('load', callback); //When completed execute callback.

}

const requestComplete = function() {
  if(this.status !== 200) return;
  const jsonString = this.responseText;
  const beers = JSON.parse(jsonString);
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

  beers.forEach(function(beer) {
    const li = document.createElement('li');
    li.innerText = beer.name;
    ul.appendChild(li);
  });
}

const handlSelectChange = function(beers) {
  const select = document.querySelector("#select")
  beers.forEach(function(beer, index) {
    let option = document.createElement("option")
    option.innerText = beer.name;
    option.value = index;
    select.appendChild(option);
  });
}




document.addEventListener('DOMContentLoaded', app);
