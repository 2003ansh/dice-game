const name1=prompt("enter player1 name");
const name2=prompt("enter player2 name");
alert("hello")
if(name1==='' ||name2===''){
    alert("As you hve not set the name of either player the page is reloaded")
    window.location.reload();
}
let box2=document.querySelector('.box2 h2')
box2.innerHTML=name1;
let box3=document.querySelector('.box3 h2 ')
box3.innerHTML=name2;
//-----------------------------------------------------------------------
// for img 2
let a = 'dice-06.png';
// Get a reference to the reload button element
const reloadButton = document.getElementById('reloadButton2');

// Add a click event listener to the button
reloadButton.addEventListener('click', function () {
    let rand = Math.floor(Math.random() * 6) + 1;
    let Dice = 'dice-0' + rand + '.png'
    console.log(Dice)
    var element = document.querySelector('.img2'); // Replace with your own selector

    // Get the current CSS property value
    var currentUrl = window.getComputedStyle(element).getPropertyValue('background-image');

    // Modify the URL

    var newUrl = currentUrl.replace(a, Dice);
    a = Dice;
    console.log(newUrl)
    // Apply the updated CSS property value
    element.style.backgroundImage = newUrl;
});

//--------------------------------------------------------------------------------------------------------------------------------------------

// for img 1
let b = 'dice-06.png';
// Get a reference to the reload button element
const reloadButton1 = document.getElementById('reloadButton1');

// Add a click event listener to the button
reloadButton1.addEventListener('click', function () {
    let rand = Math.floor(Math.random() * 6) + 1;
    let Dice = 'dice-0' + rand + '.png'
    console.log(Dice)
    var element = document.querySelector('.img1'); // Replace with your own selector

    // Get the current CSS property value
    var currentUrl = window.getComputedStyle(element).getPropertyValue('background-image');

    // Modify the URL

    var newUrl = currentUrl.replace(b, Dice);
    b = Dice;
    console.log(newUrl)
    // Apply the updated CSS property value
    element.style.backgroundImage = newUrl;
});

window.addEventListener('resize', checkScreenWidth());
function checkScreenWidth() {
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    // var element = document.getElementsByClassName('img1');
    let s=document.querySelector('.img1')
    
   
    // console.log(element)
    console.log(screenWidth)
    if(screenWidth <=720 )
    {
        s.classList.remove('a')
        // console.log("hellow")
    }
    else{
        s.classList.add('a')
    }
}
    
    
    
    window.addEventListener('resize', checkScreenWidth1());
function checkScreenWidth1() {
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    // var element = document.getElementsByClassName('img2');
    let d=document.querySelector('.img2')
    console.log(screenWidth)
    if(screenWidth <=720 )
    {
        d.classList.remove('b')
        // console.log("hellow")
    }
    else{
        d.classList.add('b')
    }
}


