let likePointsLeft = 0;

let likePointsRight = 0;

const likePointsLeftElement = document.querySelector(".card-points-left");

const likePointsRightElement = document.querySelector(".card-points-right");

const likeImageElement = document.getElementById("like");

const dislikeImageElement = document.getElementById("dislike");

const bookElement = document.getElementById("book");

likeImageElement.addEventListener("click", function(){
    likePointsLeft = likePointsLeft + 1;
    likePointsLeftElement.innerHTML = likePointsLeft;
    
});


dislikeImageElement.addEventListener("click", function(){
    likePointsRight = likePointsRight + 1;
    likePointsRightElement.innerHTML = likePointsRight;
});

bookElement.addEventListener("click", animate_CSS);

function animate_CSS(element, animationName, callback) {
    
    this.classList.add('animated', 'tada');

    function handleAnimationEnd() {
        this.classList.remove('animated', 'tada');
        this.removeEventListener('animationend', handleAnimationEnd);

        if (typeof callback === 'function') callback()
    }

    this.addEventListener('animationend', handleAnimationEnd);
}
