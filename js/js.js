var username=prompt('Hi ,what is your name?');
alert("welcome "+ username );
var major=prompt('are you a computer engineer?'); //ask user
var majorcon=major.toLowerCase(major);     // convert litters  to lower case
var score=0;
switch(majorcon) {
    case 'yes':
    case 'y' :
          alert('me too');
          score=score+1;
          break;
    default: alert('ooooops');
    
}
var study=prompt('are you studied in jordan?');
var studycon=study.toLowerCase(study);
switch(studycon){
    case 'yes':
    case 'y':
        alert('me too');
        score=score+1;
        break;
    default : alert ('I am studied in jordan');
}
var age=prompt('Is your age 32?');
var agecon=age.toLowerCase(age);
switch(agecon){
    case 'yes':
    case 'y':
        alert('Iam 32');
        score=score+1;
        break;
    default : alert('Iam not ,I am 32');
}
/*var using=prompt('Do like using a computer?');
var usingcon=using.toLowerCase(using);
switch(usingcon){
    case 'yes':
    case 'y':
        alert('me toooo');
        score=score+1;
        break;
    default : alert('why not!!!!!!!');
}*/

var using=prompt('Do like using a computer?');
var usingcon=using.toLowerCase(using);
switch(usingcon){
    case 'yes':
    case 'y':
        alert('me toooo');
        score=score+1;
        break;
    default : alert('why not!!!!!!!');
}

var js=prompt('do you know what is JS?');
var jscon =js.toLowerCase(js);
switch(jscon){
    case 'yes':
    case'y':
    alert('Great');
    score=score+1;
    break;
default :alert('It is Java Script');
}
for (var i = 0; i < 4; i++) {
    var inputGuess = prompt('How many sister(s) I have?');
    if (inputGuess > 3) {
        alert('tooo high');
    }
    else if (inputGuess < 3) {
        alert('tooo low');
    } else if (inputGuess = 3) {
        alert('corecct answer');
        score=score+1;
        break;
    }
}
var myAnswer=['roma','florance','madrid','egypt','paris']
for (var i = 0; i < 5; i++) { 
var userGuess = prompt('What is places i want to visit?'); 
switch(userGuess) {
    case myAnswer[0]: 
    case myAnswer[1]:   
    case myAnswer[2]:     
    case myAnswer[3]:    
    case myAnswer[4]:
            alert(' correct');
            i=5;
            score=score+1;
            break;
    default:
        alert('not correct');
    break;}

}
alert('your score is'+ score);
console.log(score);
