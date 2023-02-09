import {customAlert} from './alert.js';

function peselCheck() {
    let inputs = document.getElementById('form').elements;

    let formValues = {
        ssn: inputs.namedItem('ssn'),
        dob: inputs.namedItem('dob'),
        gender: inputs.namedItem('gender')
    };

    if(formValues.ssn.value != 11) {
        customAlert('Pesel musi zawierać 11 cyfr');
    };

    let n = new Array();
    for (i=0;i<11; i++)
    {
      n[i] = parseInt(formValues.ssn.value.substring(i,i+1));
      if (isNaN(n[i]))
      {
        return;
      };
      console.log(n);

    let wagi = [1,3,7,9,1,3,7,9,1,3,1];
    let sum=0;
    for (i=0;i<11;i++)
        sum+=wagi[i]*n[i];
    if((sum%10)!=0)
        customAlert('Pesel nie jest poprawny');
    }

    let year = 1900+n[0]*10+n[1];
    if (n[2]>=2 && n[2]<8)
      year+=Math.floor(n[2]/2)*100;
    if (n[2]>=8)
      year-=100;

    let month = (n[2]%2)*10+n[3];
    let day = n[4]*10+n[5];

    console.log(year);
    console.log(day);
    console.log(month);

}

export {peselCheck};