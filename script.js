var friends = ['Tim', 'Jillayne', 'Katie', 'Laura', 'my mom'];
var arrayLength = friends.length;

function sing() {
    for (var j = 0; j < arrayLength; j++) {
    var friendDivs = document.createElement('div');
        friendDivs.className = 'friend';
        document.body.appendChild(friendDivs);
    var h3 = document.createElement('h3');
        var text = document.createTextNode(friends[j]);
        h3.appendChild(text);
        friendDivs.appendChild(h3);
        for (var i = 99; i >= 1; i--) {
            if (i > 2) {   
            var secondPara = document.createElement('p');
            var secondText = document.createTextNode(i + ' lines of code in the file, ' + i + ' lines of code; ' + friends[j] + ' strikes one out, clears it all out, ' + (i - 1) + ' lines of code in the file');
            secondPara.appendChild(secondText);
            friendDivs.appendChild(secondPara);
            } else  if (i === 2) {
            var thirdPara = document.createElement('p');
            var thirdText = document.createTextNode(i + ' lines of code in the file, ' + i + ' lines of code; ' + friends[j] + ' strikes one out, clears it all out, ' + (i - 1) + ' line of code in the file');
            thirdPara.appendChild(thirdText);
            friendDivs.appendChild(thirdPara);
            } else {
            var fourthPara = document.createElement('p');
            var fourthText = document.createTextNode(i + ' line of code in the file, ' + i + ' line of code; ' + friends[j] + 'strikes one out, clears it all out, no more lines of code in the file'); 
            fourthPara.appendChild(fourthText);
            friendDivs.appendChild(fourthPara);
            }
        };
    };
}


var btn = document.getElementById('sing-button');
    btn.addEventListener('click', function() {
        sing();
    });

















//Another way:
// btn.addEventListener('click', sing);



//These were my original attempts:
// var btn = document.createElement("BUTTON");
// var text = document.createTextNode("Sing!");
// btn.appendChild(text);
// btn.id = 'my-btn';
// document.body.appendChild(btn);
// var ergh = document.getElementById('my-btn');


// button.addEventListener('click', function() {
//     alert("Why!");
//  }


// document.addEventListener('DOMContentLoaded', function() {
//     document.body.getElementById("myBtn").addEventListener("click", cycle());
// }


// ergh.addEventListener('click', function() {
//     var btn = document.getElementById('my-btn');
//     btn.addEventListener('click', function () {
//     onclick.apply(cycle);
// });
    










