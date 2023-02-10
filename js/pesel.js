import {customAlert} from './alert.js';

function peselCheck(pesel) {

     if(pesel.length != 11) {
          return false;
     }
     
     let rok = parseInt(pesel.substring(0,2),10);
     let miesiac = parseInt(pesel.substring(2,4),10);
     let dzien = parseInt(pesel.substring(4,6),10);
     
     if(miesiac > 80) {
          rok = rok + 1800;
          miesiac = miesiac - 80;
     }
     else if(miesiac > 60) {
          rok = rok + 2200;
          miesiac = miesiac - 60;
     }
     else if (miesiac > 40) {
          rok = rok + 2100;
          miesiac = miesiac - 40;
     }
     else if (miesiac > 20) {
          rok = rok + 2000;
          miesiac = miesiac - 20;
     }
     else {
          rok += 1900;
     }
     let urodzony = new Date();
     urodzony.setFullYear(rok, miesiac, dzien);

     let wagi = [9,7,3,1,9,7,3,1,9,7];
     let suma = 0;
    
     for(let i = 0; i < wagi.length; i++) {
          suma += (parseInt(pesel.substring(i, i+1), 10) * wagi[i]);
     }
          suma = suma % 10;
     let valid = (suma === parseInt(pesel.substring(10,11),10));
    
     if(parseInt(pesel.substring(9,10),10) % 2 === 1) { 
          plec='Mężczyzna';
     } else {
          plec='Kobieta';
     }

     console.log(pesel);
     console.log(dzien);
     console.log(miesiac);
     console.log(rok);
     console.log(plec);

     document.getElementById('dob').value = `${dzien}.${miesiac}.${rok}`;
     document.getElementById('gender').value = plec;

     const now = new Date();
     let aktualnaData = now.getFullYear();

     let wiek = aktualnaData - rok;

     console.log(wiek);
     console.log(aktualnaData);

     document.getElementById('age').value = wiek;
     return {valid:valid,sex:plec,date:urodzony};
}

export {peselCheck};