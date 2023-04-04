const puncte = [
  {
    nume: "Faleza Dunarii",
    descriere:
      "Amenajată la jumătatea secolului al XX-lea în scop turistic și pentru a ameliora circulația motorizată, Faleza Dunării reprezintă unul dintre cele mai importante obiective turistice din Galați.",
    poze: [
      {
        path: "../assets/images/galati/faleza/f1.png",
      },
      {
        path: "../assets/images/galati/faleza/f2.png",
      },
      {
        path: "../assets/images/galati/faleza/f3.png",
      },
    ],
  },
  {
    nume: "Turnul de Televiziune",
    descriere:
      "Construcția turnului a început în anul 1967 și a durat aproximativ un an de zile până la finalizare, până în martie 1968.",
    poze: [
      {
        path: "../assets/images/galati/turnul/tt1.jpg",
      },
      {
        path: "../assets/images/galati/turnul/tt2.jpg",
      },
      {
        path: "../assets/images/galati/turnul/tt3.jpg",
      },
    ],
  },
  {
    nume: "Muzeu de Istorie",
    descriere:
      "Muzeul a fost inaugurat la 24 ianuarie 1939, la cea de-a 80-a aniversare a Unirii Principatelor Române, în casa care a aparținut familiei Cuza și în care a locuit Alexandru Ioan Cuza în perioada când a fost judecător și pârcălab al județului Covurlui.",
    poze: [
      {
        path: "../assets/images/galati/muzeu/ms1.jpg",
      },
      {
        path: "../assets/images/galati/muzeu/ms2.jpg",
      },
      {
        path: "../assets/images/galati/muzeu/ms3.jpg",
      },
    ],
  },
  {
    nume: "Gradina Botanica",
    descriere:
      "Grădina Botanică Galaţi, secție a Complexului Muzeal de Ştiinţele Naturii, este cea mai tânără grădină botanică din România, înfiinţată în anul 1990, când conducerea Consiliului Judeţului Galaţi a agreat şi aprobat preluarea unei suprafeţe de 18 ha ce aparţinea municipalităţii.",
    poze: [
      {
        path: "../assets/images/galati/gradina/gb1.jpg",
      },
      {
        path: "../assets/images/galati/gradina/gb2.jpg",
      },
      {
        path: "../assets/images/galati/gradina/gb3.jpg",
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
