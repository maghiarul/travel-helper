const puncte = [
  {
    nume: "Muzeul Cotroceni",
    descriere:
      "Muzeul Național Cotroceni este un muzeu din București, România, situat în Palatul Cotroceni, unde pot fi vizitate spații din fosta mănăstire de la Cotroceni și fostul palat regal de la Cotroceni, unde au locuit regele Ferdinand și regina Maria, precum și colecțiile de artă veche decorativă europeană.",
    poze: [
      {
        path: "../assets/images/bucuresti/muzeul_cotroceni/mc1.jpg",
      },
      {
        path: "../assets/images/bucuresti/muzeul_cotroceni/mc2.jpg",
      },
      {
        path: "../assets/images/bucuresti/muzeul_cotroceni/mc3.jpg",
      },
    ],
  },
  {
    nume: "Palatul Parlamentului",
    descriere:
      "Palatul Parlamentului din București, România (cunoscut înainte de revoluția din 1989 sub numele de Casa Republicii sau Casa Poporului), măsoară 270 m pe 240 m, 84 m înălțime, și 92 m sub pământ realizat în spiritul arhitecturii realist socialiste. Are 9 niveluri la suprafață și alte 9 subterane.",
    poze: [
      {
        path: "../assets/images/bucuresti/palatul_parlamentului/pp1.jpg",
      },
      {
        path: "../assets/images/bucuresti/palatul_parlamentului/pp2.jpg",
      },
      {
        path: "../assets/images/bucuresti/palatul_parlamentului/pp3.jpg",
      },
    ],
  },
  {
    nume: "Calea Victoriei",
    descriere:
      "Calea Victoriei este una din cele mai importante artere situată în centrul Bucureștiului. Se întinde din Piața Națiunile Unite (de la intersecția cu Splaiul Independenței) până la Piața Victoriei și are o lungime de 2.700 de metri.",
    poze: [
      {
        path: "../assets/images/bucuresti/calea_victoriei/cv1.jpg",
      },
      {
        path: "../assets/images/bucuresti/calea_victoriei/cv2.jpg",
      },
      {
        path: "../assets/images/bucuresti/calea_victoriei/cv3.jpg",
      },
    ],
  },
  {
    nume: "Ateneul Roman",
    descriere:
      "Ateneul Român este o sală de concerte din București, situată pe Calea Victoriei, în Piața George Enescu (în partea nordică a Pieței Revoluției). Clădirea, care este realizată într-o combinație de stil neoclasic cu stil eclectic, a fost construită între 1886 și 1888, după planurile arhitectului francez Albert Galleron. În prezent, adăpostește și sediul Filarmonicii „George Enescu”.",
    poze: [
      {
        path: "../assets/images/bucuresti/ateneu_roman/ar1.jpg",
      },
      {
        path: "../assets/images/bucuresti/ateneu_roman/ar2.jpg",
      },
      {
        path: "../assets/images/bucuresti/ateneu_roman/ar3.jpg",
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
