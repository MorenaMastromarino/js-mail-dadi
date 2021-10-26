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