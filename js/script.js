// Esercizio mail
// 1 array lista mail
// 2 prompt mail utente
// 3 controllare se la mail dell'utente è nella lista
// 4 output

const listaMail = ['primamail@gmail.com', 'secondamail@gmail.com', 'terzamail@gmail.com', 'quartamail@gmail.com', 'quintamail@gmail.com', 'sestamail@gmail.com'];

const mailUtente = prompt('Inserisci la tua e-mail');

let mailTrovata = false;

for(let i = 0; i < listaMail.length; i++){
  console.log(i);
  if(mailUtente === listaMail[i]){
    console.log('ok');
    mailTrovata = true;
  }
}

const outputMail = document.getElementById('output-mail');

if(!mailTrovata){
  outputMail.innerHTML = 'Non puoi accedere, la tua mail non è presente nella lista';
}else{
  outputMail.innerHTML = 'Puoi accedere, la tua mail è presente nella lista';
}


// Esercizio dadi
// numero random tra 1 e 6 per il giocatore
// numero random tra 1 e 6 per il computer
// controllare quale numero è  più alto
// output vincitore

const numeroUtente = Math.floor(Math.random() * 6) + 1;
console.log('numero utente', numeroUtente);


const numeroComputer = Math.floor(Math.random() * 6) + 1;
console.log('numero computer', numeroComputer);

let resultMsg = 'Hai vinto!';

if(numeroUtente < numeroComputer){
  resultMsg = 'Hai perso!';
}else if(numeroUtente === numeroComputer){
  resultMsg = 'Pareggio';
}

const outputDadi = document.getElementById('output-dadi');
outputDadi.innerHTML = 
`
  <p>
    Il tuo numero è: <strong>${numeroUtente}</strong><br>
    Il numero del computer è: <strong>${numeroComputer}</strong><br>
    Il risultato è: <strong>${resultMsg}</strong>
  </p>
`;
