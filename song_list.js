//song list
let All_song = [
   {
     name: "Rossa - Hijrah Cinta",
     path: "music/1.mp3",
     img: "images/1.jpg",
     singer: "Rossa"
   },
   {
     name: "Andmesh - Hanya Rindu",
     path: "music/2.mp3",
     img: "images/2.jpg",
     singer: "Andmesh"
   },
   {
     name: "Samsons - Kenangan Terindah",
     path: "music/3.mp3",
     img: "images/3.jpg",
     singer: "Samsons"
   },
   {
     name: "Goliath - Cinta Monyet",
     path: "music/4.mp3",
     img: "images/4.jpg",
     singer: "Goliath"
   },
   {
     name: "Yovie & Nuno - Tanpa Cinta",
     path: "music/5.mp3",
     img: "images/5.jpg",
     singer: "Yovie & Nuno"
   },
   {
    name: "Diskoria, Laleilmanino, Eva Celia - C.H.R.I.S.Y.E.",
    path: "music/6.mp3",
    img: "images/6.jpg",
    singer: "Diskoria, Laleilmanino, Eva Celia"
   },
   {
    name: "Five Minutes - Semakin Ku Kejar Semakin Kau Jauh",
    path: "music/7.mp3",
    img: "images/7.jpg",
    singer: "Five Minutes"
   },
   {
    name: "Ada Band - Manusia Bodoh",
    path: "music/8.mp3",
    img: "images/8.jpg",
    singer: "Ada Band"
   },
   {
    name: "Dudy Oris - Laksana Surgaku",
    path: "music/9.mp3",
    img: "images/9.jpg",
    singer: "Dudy Oris"
   },
   {
    name: "Yovie & Nuno - Merindu Lagi",
    path: "music/10.mp3",
    img: "images/10.jpg",
    singer: "Yovie & Nuno"
   },
   {
    name: "Rossa - Takdir Cinta",
    path: "music/11.mp3",
    img: "images/11.jpg",
    singer: "Rossa"
   },
   {
    name: "Dudy Oris - Aku Yang Jatuh Cinta",
    path: "music/12.mp3",
    img: "images/12.jpg",
    singer: "Dudy Oris"
   },
   {
    name: "Risky Dilaga feat. Dudy - Rindukan Senyumanmu",
    path: "music/13.mp3",
    img: "images/13.jpg",
    singer: "Risky Dilaga feat Dudy Oris"
   },
   {
    name: "JANTUNG BERDEBAR - Nadya Rafika feat. Eka Gustiwana",
    path: "music/14.mp3",
    img: "images/14.jpg",
    singer: "Nadya Rafika feat. Eka Gustiwana"
   },
   {
    name: "Afgan - Tanpa Batas Waktu",
    path: "music/15.mp3",
    img: "images/15.jpg",
    singer: "Afgan"
   }
];
/*you can add more song & images from you computer*/


/*tracks*/
let tracks = document.querySelector('.tracks');

//creating a list or generating Html
for (let i = 0; i < All_song.length; i++) {

  let Html = ` <div class="song">
      <div class="img">
      <img src="${All_song[i].img}"/>
      </div>
      <div class="more">
      <audio src="${All_song[i].path}" id="music"></audio>
      <div class="song_info">
         <p id="title">${All_song[i].name}</p>
         <p>${All_song[i].singer}</p>
      </div>
      <button id="play_btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
      </div>
    </div>`;

  tracks.insertAdjacentHTML("beforeend", Html);
};


/*please follow all the rules so that you do not face any problem*/