console.log('Loaded!');

//change the text of main-text div
var element = document.getElementById('main-text');
element.innerHTML = 'VAMSHI THE CRACK';

//move the image
var img = document.getElementById('madi');
var marginleft = 0;
function moveRight(){
    marginleft=marginleft+1;
    img.style.marginleft = marginleft + 'px';
}
img.onclick = function() {
    var interval = setInterval(moveRight,50);
};