// DOM Basics Exercise
// 1.
const xMen = document.getElementsById(`x-men`);

// 2.
const centered = document.getElementsByClassName(`center`);

// 3.
const batman = document.querySelector(`#batman`);

// 4.
const h3s= document.querySelectorAll(`h3`);

// 5a.
const h1 = document.querySelector(`h1`);

// 5b.
h1.innertext = `The Best Animated Superhero TV Shows Ever!`;

// 6a.
const honorableMentions = document.getElementById(`honorable-mentions`);

// 6b.
honorableMentions.innerHTML = `<p>Other Great Shows<p>`;

// 7a.
const aTag = document.querySelector(`a`);

// 7b.
aTag.href = `https://fandomwire.com/15-greatest-animated-superhero-shows-ever-made-ranked/&quot`;

// 8.
h1.classList.add(`background`,`text-color`);

// 9.
h1.classList.remove(`background`);

// 10a.
const h4 = document.createElement(`h4`);

// 10b.
h4.innertext = `Is avatar: the last airbender a superhero show?`;

// 10c.
const body = document.querySelector(`body`);
body.prepend(h4);

// 11a.
const h5 = document.createElement(`h5`);

// 11b.
h5.innerText = `Heroes in a half shell Turtle Power!`;

// 11c.
aTag.insertAdjacentElement(`afterend`, h5);

// 12.
document.querySelector(`ul>li`).remove();

// !BONUS

//13a
const divs = document.querySelectorAll(`div`);

// 13b
for (i = 0; i < divs.length; i++){
    divs[i].classList.toggle(`background`);
}
//or
for (d of divs) {
    d.classList.toggle(`background`);
}

// 14a
const avengers = [
    "Forever", "Fight", "As", "One", "AVENGERS", "ASSEMBLE!"
];

// 14b
// for (i = 0; i < avengers.length; i++){
//     const spanLoop = document.createElement(`span`);
//     spanLoop.innerText = `${avengers[i]} `;
//     body.append(spanLoop);
// }

// or

for (a of avengers){
    const spanLoop = document.createElement(`span`);
    spanLoop.innerText = `${a} `;
    body.append(spanLoop);
}