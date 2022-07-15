const imgContainer = document.getElementById('img-container');
const loader = document.getElementById('loader');

let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = [];

//unsplash API
const count = 5;
const unsplash_API = config.apikey;
let apiURL = `https://api.unsplash.com/photos/random/?client_id=${unsplash_API}&count=${count}`;

//이미지 모두 로드됐는지 체크
function imageLoaded() {
  imagesLoaded++;
  if(imagesLoaded === totalImages) {
    ready = true;
    loader.hidden = true;
  }
}

// Helper Function to Set Attributes on DOM Elements
function setAttributes(element, attributes) {
  for(const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

// Links, Photos를 위한 elements를 만들고, Dom에 추가
function displayPhotos() {

}

//Get photos from 언스플래쉬 API
async function getPhotos() {

}

//페이지 바닥까지 스크롤하는거 체크하고, 더 많은 사진 load
window.addEventListener('scroll', () => {

});

//로드
getPhotos();