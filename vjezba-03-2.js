//1. UKOLIKO JE CINJENICA LAZNA, IZBRISI CINJENICU I POSTAVI SKRIVENO NA TRUE, ZATIM FILTRIRAJ ARRAY I PRIKAZI SAMO ONE CINJENICE KOJE SU ISTINITE
let randomFacts = [
    {
        factoid: "Previse vode te moze ubiti",
        istina: true,
        skriveno: null
    },
    {
        factoid: "RH je 57 na svijetu po indeksu koruptivne percepcije",
        istina: true,
        skriveno: null
    },
    {
        factoid: null,
        istina: false,
        skriveno: null
    },
    {
        factoid: "Medijalna placa je iznosila 6290kn, a prosjecna 7574kn u 2022.",
        istina: true,
        skriveno: null
    },
    {
        factoid: "Proslo je 20 godina otkad je Hajduk bio prvak",
        istina: false,
        skriveno: null
    },
]

for(fact in randomFacts){
    if(!fact.istina){
        fact.skriveno = true;
    }
}
// randomFacts.filter(c => c.istina === true).forEach(c => console.log(c))

//2. AKO JE DRZAVA CLANICA SCHENGENSKOG PROSTORA, POSTAVI PROPERTY "slobodanProlazak" NA true I ANALOGNO TOME.
let europskeDrzave = [
    {
        drzava: "Austrija",
        uSchengenu: true,
        slobodanProlazak: null
    },
    {
        drzava: "Hrvatska",
        uSchengenu: true,
        slobodanProlazak: null
    },
    {
        drzava: "Srbija",
        uSchengenu: true,
        slobodanProlazak: null
    },
    {
        drzava: "Velika Britanija",
        uSchengenu: false,
        slobodanProlazak: null
    },
    {
        drzava: "Island",
        uSchengenu: true,
        slobodanProlazak: null
    }
];
for(drzava of europskeDrzave){
    if(drzava.uSchengenu) drzava.slobodanProlazak = true
    else drzava.slobodanProlazak = false;
};
console.log(europskeDrzave);

//3. IZRACUNAJ PROSJEK JUNIORSKIH PLACA
//4. IZRACUNAJ MEDIJAN SVIH PLACA
let prosjekDeveloperskihPlaca = [
    { 
        placa: 1300,
        senioritet: "junior",
        area: "frontend",
        tech: "Vuejs",
    },
    {
        placa: 2600,
        senioritet: "senior",
        area: "frontend",
        tech: "React.js",
    },
    {
        placa: 1400,
        senioritet: "junior",
        area: "frontend",
        tech: "Angular.js",
    },
    {
        placa: 1900,
        senioritet: "medior",
        area: "backend",
        tech: ".NET",
    },
    {
        placa: 2300,
        senioritet: "senior",
        area: "backend",
        tech: "Django",
    }
];

let juniori = prosjekDeveloperskihPlaca.filter(el=> el.senioritet == "junior");
let zbrojJuniorPlaca = juniori.reduce((acc,val) => { return acc + val.placa},0);
let prosjekJuniorplaca = zbrojJuniorPlaca/juniori.length;
console.log(`Prosjek placa Juniora je: ${prosjekJuniorplaca}`);

let placeSorted = prosjekDeveloperskihPlaca.map(e=>e.placa).sort((a,b)=>a-b);
const len = placeSorted.length;
let srednjiIndex = Math.floor(len/2);
let medijan;
if(!len%2){
    medijan = (placeSorted[srednjiIndex - 1] + placeSorted[srednjiIndex]) / 2;
}else {
    medijan = placeSorted[srednjiIndex]
}
console.log(`Medijan placa je: ${medijan}`);

//5. ISPISI
let levels = {
    prvaRazina: {
        printMe: () => console.log("1"),
        drugaRazina: {
            printMe: () => console.log("2"),
            trecaRazina: {
                printMe: () => console.log("3"),
                cetvrtaRazina: {
                    printMe: () => console.log("4"),
                    petaRazina: {
                        printMe: () => console.log("5"),
                        sestaRazina: {
                            printMe: () => console.log("6"),
                            sedmaRazina: {
                                printMe: () => console.log("7"),
                                osmaRazina: {
                                    printMe: () => console.log("8"),
                                    devetaRazina: {
                                        printMe: () => console.log("9"),
                                        desetaRazina: {
                                            printMe: () => console.log("10"),
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

function isprintaj(obj) {
    for (let key in obj) {
      if (typeof obj[key] === 'object') {
        isprintaj(obj[key]);
      } else if (key === 'printMe') {
        obj[key]();
      }
    }
  }

  isprintaj(levels);