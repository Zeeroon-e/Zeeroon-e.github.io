function VaxelMaskin(){

var Pris = document.getElementById("Pris").value;
var Betald = document.getElementById("Betald").value;
var outputmsg = document.getElementById("outputmsg");


var Vaxel = Betald - Pris;

var femhundralappar = Vaxel / 500;
Vaxel = Vaxel % 500;

var hundralappar = Vaxel / 100;
Vaxel = Vaxel % 100;

var femtiolappar = Vaxel / 50;
Vaxel = Vaxel % 50;

var tjugor = Vaxel / 20;
Vaxel = Vaxel % 20;

var tior = Vaxel / 10;
Vaxel = Vaxel % 10;

var femkronor = Vaxel / 5;
Vaxel = Vaxel % 5;

var enkronor = Vaxel / 1;

var femhundralappar = parseInt(femhundralappar)
var hundralappar= parseInt(hundralappar);
var femtiolappar = parseInt(femtiolappar);
var tjugor = parseInt(tjugor);
var tior = parseInt(tior);
var femkronor = parseInt(femkronor);
var enkronor= parseInt(enkronor);
var Pris = parseInt(Pris);
var Betald = parseInt(Betald);



if (Pris > Betald)      
{
  outputmsg.textContent  += 'Var vänligen att betala mer';
}

if (Betald == Pris)  
{
  outputmsg.textContent += 'Du har betalat med jämna pengar \n';
}

if (Betald > Pris)  
{
  outputmsg.innerHTML += "Växel tillbaka: \n";
}



if (femhundralappar == 1 || femhundralappar> 1)  
{
  outputmsg.textContent += ' ' + femhundralappar + "st femhundralapp \n" ;
}

if (hundralappar == 1 || hundralappar> 1)
{
  outputmsg.textContent += ' ' + hundralappar + 'st hundralapp\n';
}

if (femtiolappar == 1 || femtiolappar> 1)
{
  outputmsg.textContent += ' ' + femtiolappar + 'st femtiolapp\n';
}

if (tjugor == 1 || tjugor> 1)
{
  outputmsg.textContent += ' ' + tjugor + 'st tjugor\n';
}

if (tior == 1 || tior> 1)
{
  outputmsg.textContent += ' ' + tior + 'st tior\n';
}

if (femkronor == 1 || femkronor> 1)
{
  outputmsg.textContent += ' ' + femkronor + 'st femkronor\n';
}

if (enkronor == 1 || enkronor> 1)
{
  outputmsg.textContent += ' '  + enkronor + 'st enkronor\n';
}

}


function AvbrytA(){

  var Pris = document.getElementById("Pris").value;
  var Betald = document.getElementById("Betald").value;
  var outputmsg = document.getElementById("outputmsg");
  
  outputmsg.textContent = ' ';
  document.getElementById('Pris').value = '';
  document.getElementById('Betald').value = '';
}

var sendbtn = document.getElementById("sendbtn");
sendbtn.addEventListener('click', VaxelMaskin);

var backbtn = document.getElementById("backbtn");
backbtn.addEventListener('click', AvbrytA);