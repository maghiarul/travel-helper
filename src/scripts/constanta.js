const puncte = [
  {
    nume: "Cazinoul",
    descriere:
      "Cazinoul din Constanța este o clădire istorică din Constanța. Este unul dintre simbolurile reprezentative ale orașului, fiind ridicat în anul 1909 și inaugurat la data de 15 august 1910.",
    poze: [
      {
        path: "../assets/images/constanta/cazino/cc1.png",
      },
      {
        path: "../assets/images/constanta/cazino/cc2.jpg",
      },
      {
        path: "../assets/images/constanta/cazino/cc3.png",
      },
    ],
  },
  {
    nume: "Delfinariul",
    descriere:
      "Având o tradiţie instituţională de peste o jumătate de secol, cu o excelentă bază materială şi o structură pluridisciplinară, Complexul Muzeal de Ştiinţe ale Naturii din Constanţa se constituie un reper important în peisajul cultural şi ştiinţific al municipiului, cu valoare emblematică pentru oferta estivală a litoralului românesc.",
    poze: [
      {
        path: "../assets/images/constanta/delfinariu/df1.jpg",
      },
      {
        path: "../assets/images/constanta/delfinariu/df2.jpg",
      },
      {
        path: "../assets/images/constanta/delfinariu/df3.jpg",
      },
    ],
  },
  {
    nume: "Farul Genovez",
    descriere:
      "Farul „Genovez” este un monument istoric aflat în centrul istoric al orașului Constanța, în spatele grupului statuar ce are în centrul său bustul lui Mihai Eminescu, sculptat de Oscar Han. Se află în apropiere de clădirea Cazinoului din Constanța.",
    poze: [
      {
        path: "../assets/images/constanta/farul/fg1.jpeg",
      },
      {
        path: "../assets/images/constanta/farul/fg2.jpg",
      },
      {
        path: "../assets/images/constanta/farul/fg3.jpg",
      },
    ],
  },
  {
    nume: "Piata Ovidiu",
    descriere:
      "Dacă vrei să iei pulsul unui oraș, mergi în piață. Piața Ovidiu din Constanța, fosta Piața Independenței până în 1947, poartă și ea pecetea istoriei. Istorie pe care o povestește prin clădirile sale istorice tuturor celor care se opresc să o asculte.",
    poze: [
      {
        path: "../assets/images/constanta/piata/po1.jpg",
      },
      {
        path: "../assets/images/constanta/piata/po2.jpeg",
      },
      {
        path: "../assets/images/constanta/piata/po3.jpg",
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
