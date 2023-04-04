const puncte = [
  {
    nume: "Gradina Botanica",
    descriere:
      "Alaturi de alte prioritati culturale emanate din vechea capitala a Moldovei un loc deosebit il ocupa si infiintarea la Iasi, in anul 1856, a primei Gradini Botanice din Romania, de catre medicul si naturalistul Anastasie Fatu, mare patriot, filantrop si om de cultura. Amplasata pe un teren cumparat din fonduri proprii in apropiere de Rapa Galbena, avea sa fie pentru multi ani, pana la moartea marelui carturar, un important centru cultural pentru tineretul studios din Iasi care avea posibilitatea de a studia botanica pe material viu, dar si un mijloc de instructie si educatie pentru toti iubitorii naturii.",
    poze: [
      {
        path: "../assets/images/iasi/gradina/gb1.jpg",
      },
      {
        path: "../assets/images/iasi/gradina/gb2.jpg",
      },
      {
        path: "../assets/images/iasi/gradina/gb3.jpg",
      },
    ],
  },
  {
    nume: "Palatul Culturii",
    descriere:
      "Palatul Culturii din Iași este o clădire emblematică, construită, în perioada 1906 - 1925, în perimetrul fostei curți domnești medievale moldovenești, pe locul fostului palat domnesc.",
    poze: [
      {
        path: "../assets/images/iasi/palatul_culturii/pc1.jpg",
      },
      {
        path: "../assets/images/iasi/palatul_culturii/pc2.jpg",
      },
      {
        path: "../assets/images/iasi/palatul_culturii/pc3.jpg",
      },
    ],
  },
  {
    nume: "Palatul Roznovanu",
    descriere:
      "Clădirea adăpostește actualul sediu al primăriei Iași. Impresionantă prin somptuozitate și prin fastul interioarelor, a fost construită în deceniile 7 - 10 ale sec. XVIII-lea și restaurată între anii 1830 și 1833 de către cunoscutul arhitect Johann Freywald, cel care a proiectat și Catedrala Mitropolitană din Iași.",
    poze: [
      {
        path: "../assets/images/iasi/palatul_roznoveanu/pr1.jpg",
      },
      {
        path: "../assets/images/iasi/palatul_roznoveanu/pr2.jpg",
      },
      {
        path: "../assets/images/iasi/palatul_roznoveanu/pr3.jpg",
      },
    ],
  },
  {
    nume: "Bulevardul Stefan cel Mare",
    descriere:
      "Bulevardul Ștefan cel Mare din Iași este unul din importantele bulevarde ale municipiului Iași, fiind situat în centrul orașului.",
    poze: [
      {
        path: "../assets/images/iasi/bulevard/bs1.jpg",
      },
      {
        path: "../assets/images/iasi/bulevard/bs2.jpg",
      },
      {
        path: "../assets/images/iasi/bulevard/bs3.jpg",
      },
    ],
  },
];


function showPlace(nume){
    for(var i = 0; i < puncte.length; i++ ){
        if(puncte[i].nume === nume){
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