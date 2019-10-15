var username = prompt('Hi ,what is your name?');
alert("welcome " + username);
var question;
var positive;
var negative;
var score = 0;
function fivequestions(question, positive, negative) {
    var reply = prompt(question);
    reply = reply.toLowerCase();
    switch (reply) {
        case 'yes':
        case 'y':
            alert(positive);
            score = score + 1;
            break;

        case 'no':
        case 'n':
            alert(negative);
        default:
            alert('ooooops');

    }
}
fivequestions('Are you a computer engineer?', 'me too', 'ooooops');
fivequestions('Are you studied in Jordan?', 'me too', 'I am studied in jordan');
fivequestions('Is your age 32?', 'Iam 32', 'Iam not ,I am 32');
fivequestions('Do like using a computer?', 'me toooo', 'why not!!!!!!!');
fivequestions('do you know what is JS?', 'Great', 'It is Java Script');

function question6() {
    for (var i = 0; i < 4; i++) {
        var inputGuess = prompt('How many sister(s) I have?');
        if (inputGuess > 3) {
            alert('tooo high');
        }
        else if (inputGuess < 3) {
            alert('tooo low');
        } else if (inputGuess = 3) {
            alert('corecct answer');
            score = score + 1;
            break;
        }
    }
}
question6('done');

function question7() {
    var myAnswer = ['roma', 'florance', 'madrid', 'egypt', 'paris']
    console.log(typeof(typeof(myAnswer)));
    for (var i = 0; i < 5; i++) {
        var userGuess = prompt('What is places i want to visit?');
        switch (userGuess) {
            case myAnswer[0]:
            case myAnswer[1]:
            case myAnswer[2]:
            case myAnswer[3]:
            case myAnswer[4]:
                alert(' correct');
                i = 5;
                score = score + 1;
                break;
            default:
                alert('not correct');
                break;
        }
    }
    alert('your score is' + score);
}
question7('nasa');

