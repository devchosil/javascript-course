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
  imagesLoaded++;  //로드된 이미지 수 +1
  //로드된 이미지 === 전체 이미지수 같아지면
  if(imagesLoaded === totalImages) {
    ready = true;
    loader.hidden = true;
  }
}

// Helper Function to Set Attributes on DOM Elements
function setAttributes(element, attributes) {
  for(const key in attributes) {
    //setAttribute 선택한 요소의 속성값정함 
    element.setAttribute(key, attributes[key]);
  }
}

// Links, Photos를 위한 elements를 만들고, Dom에 추가
function displayPhotos() {
  imagesLoaded = 0;
  totalImages = photosArray.length;

  // Run function for each object in photosArray
  photosArray.forEach((photo)=> {
    //Create <a> to link full photo
    const item = document.createElement('a');
    setAttributes(item, {
      href: photo.links.html,
      target: '_blank'
    })

    // Create <img> for photo
    const img = document.createElement('img');
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description
    });

    // Event Listener, check when each is finished loading
      img.addEventListener('load', imageLoaded);
    // Put <img> inside <a>, then put both inside imageContainer Element
      item.appendChild(img);
      imgContainer.appendChild(item);
  })
}

//Get photos from 언스플래쉬 API
async function getPhotos() {
  try {
    const response = await fetch(apiURL);
    photosArray = await response.json();
    displayPhotos();
  } catch (error) {
    //error 처리
  }
}

//페이지 바닥까지 스크롤하는거 체크하고, 더 많은 사진 load
window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready) {
    ready = false;
    getPhotos();
  }
});

//로드
getPhotos();