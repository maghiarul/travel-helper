const puncte = [
  {
    nume: "Piata Unirii",
    descriere:
      "Piața Unirii Cluj este unul dintre cele mai importante simboluri ale orașului din inima Transilvaniei. Cu Biserica Sf. Mihail și grupul statuar Matia Corvin aflate în mijlocul ei, Piața Unirii Cluj este un obiectiv turistic impresionant, un punct de atracție central și un loc de întâlnire pentru localnici și turiști deopotrivă. Aici, te afli în punctul zero al municipiului Cluj-Napoca.",
    poze: [
      {
        path: "../assets/images/cluj/piata_unirii/pu1.jpg",
      },
      {
        path: "../assets/images/cluj/piata_unirii/pu2.jpg",
      },
      {
        path: "../assets/images/cluj/piata_unirii/pu3.jpg",
      },
    ],
  },
  {
    nume: "Muzeul de arta",
    descriere:
      "Muzeul de Artă Cluj-Napoca este una dintre cele mai prestigioase instituţii muzeale cu profil artistic din România, fiind nominalizat în anul 1997 pentru prestigiosul Premiu al Muzeului European al Anului – EMYA.",
    poze: [
      {
        path: "../assets/images/cluj/muzeul_de_arta/ma1.jpg",
      },
      {
        path: "../assets/images/cluj/muzeul_de_arta/ma2.jpg",
      },
      {
        path: "../assets/images/cluj/muzeul_de_arta/ma3.jpg",
      },
    ],
  },
  {
    nume: "Steampunk",
    descriere:
      "The first STEAMPUNK & FANTASY museum and experience in the heart of Transylvania, Romania.",
    poze: [
      {
        path: "../assets/images/cluj/steampunk/st1.jpg",
      },
      {
        path: "../assets/images/cluj/steampunk/st2.jpg",
      },
      {
        path: "../assets/images/cluj/steampunk/st3.jpg",
      },
    ],
  },
  {
    nume: "Muzeul de Istorie",
    descriere:
      "Acum, în perioada sărbătorilor de Paști, Muzeul Național de Istorie a Transilvaniei, în parteneriat cu Muzeul Etnografic al Transilvaniei, vă oferă în incinta Iulius Mall (la etaj) expoziția ”(A)ere de primăvară.",
    poze: [
      {
        path: "../assets/images/cluj/muzeul_de_istorie/mi1.jpg",
      },
      {
        path: "../assets/images/cluj/muzeul_de_istorie/mi2.jpg",
      },
      {
        path: "../assets/images/cluj/muzeul_de_istorie/mi3.jpg",
      },
    ],
  },
];

function showPlace(nume) {
  for (var i = 0; i < puncte.length; i++) {
    if (puncte[i].nume === nume) {
      var n = document.getElementById("nume");
      var d = document.getElementById("desc");

      n.innerText = puncte[i].nume;
      d.innerText = puncte[i].descriere;

      var p1 = document.getElementById("poza1");
      var p2 = document.getElementById("poza2");
      var p3 = document.getElementById("poza3");

      p1.src = puncte[i].poze[0].path;
      p2.src = puncte[i].poze[1].path;
      p3.src = puncte[i].poze[2].path;
    }
  }
}
