import {customAlert} from './alert.js';

function peselCheck(pesel) {

     if(pesel.length != 11) {
          return false;
     }

     let year = parseInt(pesel.substring(0,2),10);
     let month = parseInt(pesel.substring(2,4),10);
     let day = parseInt(pesel.substring(4,6),10);
     
     if(month > 80) {
          year = year + 1800;
          month = month - 80;
     }
     else if(month > 60) {
          year = year + 2200;
          month = month - 60;
     }
     else if (month > 40) {
          year = year + 2100;
          month = month - 40;
     }
     else if (month > 20) {
          year = year + 2000;
          month = month - 20;
     }
     else {
          year += 1900;
     }
     let brithday = new Date();
     brithday.setFullYear(year, month, day);

     let weight = [9,7,3,1,9,7,3,1,9,7];
     let sum = 0;
    
     for(let i = 0; i < weight.length; i++) {
          sum += (parseInt(pesel.substring(i, i+1), 10) * weight[i]);
     }
          sum = sum % 10;
     let valid = (sum === parseInt(pesel.substring(10,11),10));

     if(!pesel == valid){
          customAlert("Pesel jest niepoprawny");
          return;
     }

     if(parseInt(pesel.substring(9,10),10) % 2 === 1) { 
          gender = 'Mężczyzna';
     } else {
          gender = 'Kobieta';
     }

     document.getElementById('dob').value = `${day}.${month}.${year}`;
     document.getElementById('gender').value = gender ;

     const now = new Date();
     let aktualnaData = now.getFullYear();

     let age = aktualnaData - year;

     document.getElementById('age').value = age;
}

export {peselCheck};