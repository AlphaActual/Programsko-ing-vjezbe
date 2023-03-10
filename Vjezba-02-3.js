/* Mislim da nisam bas dobro objasnio anonimne funkcije. Pa evo jednog relativno jasnog obrazlozenja. Koriste se kada se poziva neka logika jedanput (Znam da smo rekli da ti funkcija vecinom treba kad ne zelis duplicirati kod, ali to sto ju neces koristiti dvaput, ne znaci da ti funkcija ne treba - Prisjeti se samo zagadivanja globalnog stanja). 

Ne postoji razlika u performansama između function expression i function definitiona*. 
*- Citaj s rezervom, uvijek postoji razlika. Takve stvari su uglavnom do same implementacije browsera.
*/

//Ne smijes koristiti in-built string metode u rjesavanju zadataka :)
//Ako hoces dodatne bodove onda rijesi i s ugradenim metodama

// 1. Preokreni string - Ovo smo rijesili, ali ako mozes bolje - napravi bolje
// INPUT - f(abc); -> OUTPUT - cba
// -------------------

let stringReverse = (inputString) => {
    let temporaryString = "";
    for (let i = inputString.length - 1; i >= 0; i--) {
        temporaryString += inputString[i];
    }
    return temporaryString;
}
// version2
let stringReverse2 = (inputString) => Array.from(inputString).reverse().join('');


// console.log(stringReverse("abc")); //-> cba;
// console.log(stringReverse2("abc")); //-> cba;

// 2. Je li string palindrom?
// INPUT - f(ana); -> OUTPUT - true
let palindrom = (inputString) => inputString == stringReverse(inputString);

// console.log(palindrom("anavolimilovana"))
// -------------------

// 3. Makni odredeno slovo iz stringa
// INPUT - f(abcdefghd, d); -> OUTPUT - (abcefgh)
// -------------------
let makniSlovo = (inputString, slovo) => {
    let outputString = "";
    for (s of inputString) if (s != slovo) outputString += s;
    return outputString;
}

// versoin2
let makniSlovo2 = (inputString, slovo) => Array.from(inputString).filter((el) => el != slovo).join('');


// console.log(makniSlovo("aaaabcd", "a"));
// console.log(makniSlovo2("aaaabcd", "a"));

// 4. Makni vise odredenih slova
// INPUT - f(abcdefghd, [c, d]); -> OUTPUT - (abefgh)
// -------------------
let makniSlova = (inputString, slova) => {
    let outputString = "";

    for (s of inputString) {
        insertOK = true
        for (x of slova) if (s == x) insertOK = false;

        if (insertOK) outputString += s;
    };

    return outputString;
}
// version2
let makniSlova2 = (inputString, slova) => Array.from(inputString).filter((el) => !slova.includes(el)).join('');

// console.log(makniSlova("aaaabcd", ["a", "d"]));
// console.log(makniSlova2("aaaabcd", ["a", "d"]));


// 5. Ispisi slova koja se ponavljaju
// INPUT - f(abbcdeefff); -> OUTPUT - (bcdef)
// -------------------
ponavljajucaSlova = (s) => {
    let temp = Array.from(new Set(s));
    let result = "";
    let counter = 0;
    for (slovo of temp) {
        for (let i = 0; i < s.length; i++) {
            const e = s[i];
            if (slovo == e) counter++;
        }
        if (counter > 1) result += slovo;
        counter = 0;
    }
    return result;

};
// version2
ponavljajucaSlova2 = (inputString) => Array.from(new Set(Array.from(inputString).filter((el) => Array.from(inputString).filter((e) => el == e).length > 1))).join('');
// console.log(ponavljajucaSlova("abbcdeefff"));
// console.log(ponavljajucaSlova2("abbcdeefff"));



// 6. Pretrazi rijec u recenici
// INPUT - f(Ne pada mi nista pametno na pamet, na); -> OUTPUT - (true)
// -------------------
pretraga = (recenica, trazeniDio) => {
    let rijec = "";

    for (let i = 0; i <= recenica.length; i++) {
        const slovo = recenica[i];
        if (slovo != " " && slovo != undefined && slovo != ",") rijec += slovo
        else if (rijec == trazeniDio) return true
        else rijec = "";
    }
    return false;
}

// version2
pretraga2 = (recenica, trazeniDio) => recenica.includes(trazeniDio);

// console.log(pretraga("Ne pada mi nista pametno na pamet", "na"));
// console.log(pretraga2("Ne pada mi nista pametno na pamet", "na"));


// 7. Prvo i zadnje slovo prebaci iz malog u veliko ili iz velikog u malo
// INPUT - f(I dalje mi ne pada mi nista pametno na pamet); -> OUTPUT - (i dalje ... na pameT)
// -------------------
prebaciSlovo = (recenica) => {
    let rezultat = "";

    for (let i = 0; i < recenica.length; i++) {
        let s = recenica[i];
        if (i === 0 || i === recenica.length - 1) {
            if (s === s.toUpperCase()) rezultat += s.toLowerCase()
            else rezultat += s.toUpperCase();

        } else rezultat += s;

    }

    return rezultat;
}
// version2
prebaciSlovo2 = (recenica) => Array.from(recenica).slice(0, 1).map((e) => e == e.toUpperCase() ? e.toLowerCase() : e.toUpperCase()).concat(Array.from(recenica).slice(1, -1)).concat(Array.from(recenica).slice(-1).map((e) => e == e.toUpperCase() ? e.toLowerCase() : e.toUpperCase())).join('');

// console.log(prebaciSlovo("I dalje mi ne pada mi nista pametno na pamet"));
// console.log(prebaciSlovo2("I dalje mi ne pada mi nista pametno na pamet"));

// 8. Ako pronades dupliciranu vrijednost u arrayju, rijesi se duplikata na nacin da konkateniras <string> + (x) gdje je x = 1, 2, ..., n, na kraj stringa kao svojevrsni sufiks.

// DODATNA PRAVILA:
// Mala i velika slova se tretiraju jednako
// Svaki primjerak iste rijeci mora imati sufiks s brojem
// Input se ne smije modificirati
// Funkcija mora biti napisana u obliku arrow funkcije
// Moras osigurati validan input - Kod ne smije pucati
// INPUT - f([Primjer, primjer, " ", "prim", null, 1, "\n", primjer (3)]); -> OUTPUT - ([primjer, primjer (1), primjer (2)])
