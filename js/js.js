/*var username=prompt('Hi ,what is your name?');
alert("welcome "+ username );
var major=prompt('are you a computer engineer?'); //ask user
var majorcon=major.toLowerCase(major);     // convert litters  to lower case

switch(majorcon) {
    case 'yes':
    case 'y' :
          alert('me too');
          break;
    default: alert('ooooops');
    
}
console.log('major',major);
console.log('majorcon',majorcon);
var study=prompt('are you studied in jordan?');
var studycon=study.toLowerCase(study);
switch(studycon){
    case 'yes':
    case 'y':
        alert('me too');
        break;
    default : alert ('I am studied in jordan');
}
console.log('study',study);
console.log('study',study);
var age=prompt('Is your age 32?');
var agecon=age.toLowerCase(age);
switch(agecon){
    case 'yes':
    case 'y':
        alert('Iam 32');
        break;
    default : alert('Iam not ,I am 32');
}
console.log('age',age);
console.log('agecon',agecon);
var using=prompt('Do like using a computer?');
var usingcon=using.toLowerCase(using);
switch(usingcon){
    case 'yes':
    case 'y':
        alert('me toooo');
        break;
    default : alert('why not!!!!!!!');
}
console.log('using',using);
console.log('usingcon',usingcon);
var using=prompt('Do like using a computer?');
var usingcon=using.toLowerCase(using);
switch(usingcon){
    case 'yes':
    case 'y':
        alert('me toooo');
        break;
    default : alert('why not!!!!!!!');
}

var js=prompt('do you know what is JS?');
var jscon =js.toLowerCase(js);
switch(jscon){
    case 'yes':
    case'y':
    alert('Great');
    break;
default :alert('It is Java Script');
}
console.log('js',js);
console.log('jscon',jscon);*/

for (var i = 0; i<4; i++)
{ 
var inputGuess = prompt('How many sister(s) I have?');
        if (inputGuess > 3) {
                            alert('tooo high');
                            }
        else if (inputGuess < 3) {
                               alert('tooo low');
         } else if (inputGuess = 3){
                            alert('corecct answer');
                            break; 
        }
}

var myAnswer=["roma","florance","madrid","egypt","paris"];
for(i=0;i<5;i++)
{   var userGuess = prompt('What is places i want to visit?') ;
compareee(userGuess);
/////// compare function
function compareee()
{for (var d=0;d<myAnswer.length;d++){
    if (userGuess==myAnswer[d])
    {alert ('great answer'); 
}
else if(userGuess!= myAnswer[d])
 {alert('wrong answer!!!');

}}

console.log(myAnswer[d]);
}

}