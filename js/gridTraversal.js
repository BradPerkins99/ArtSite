const gallery = document.querySelector('.gallery');
const overlay = document.querySelector('.overlay');
const overlayImage = overlay.querySelector('img');
const overlayClose = overlay.querySelector('.close');

function generateHTML([h, v]){
    return `
    <div class="item h${h} v${v}">
        <img src="images/${randNum(12)}.jpg">
        <div class="item_overlay">
            <button -></button>
        </div>
    </div>        
    `;
}


/* <img src="images/${randNum(12)}.jpg"></img> */
// <img src="images/banner2.jpg">

function randNum(limit){
    return Math.floor(Math.random() * limit) + 1;
}

const digits = Array.from({length: 50 }, () =>
[randNum(4), randNum(4)]);
console.log(digits);




