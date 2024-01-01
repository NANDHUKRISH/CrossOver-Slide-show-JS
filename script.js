(function(){
    "use strict";
    let currentImage = 0;
    const myImages = [
        './/images/image1.jpg',
        './/images/image2.jpg',
        './/images/image3.jpg',
        './/images/image4.jpg',
        './/images/image5.jpg',
        './/images/image6.jpg',
        './/images/image7.jpg',
        './/images/image8.jpg',
        './/images/image9.jpg',
        './/images/image10.jpg',
    ];
    const container = document.getElementById('content');
    const btn1 = document.getElementById('next');
    const btn2 = document.getElementById('previous');

    btn1.addEventListener('click', function (event) {
        event.preventDefault();
        currentImage++;
        if (currentImage > myImages.length - 1) {currentImage = 0;}
        
        swap(currentImage);
    });

    btn2.addEventListener('click', function (event) {
        event.preventDefault();
        currentImage--;
        if (currentImage < 0) {currentImage = myImages.length - 1;}

        swap(currentImage);
    });

    function swap(currentImage) {
        const newslide = document.createElement('img');
        newslide.src = `${myImages[currentImage]}`;
        newslide.className = 'fadeinimg';
        container.appendChild(newslide);

        if (container.children.length > 2) {
            container.removeChild(container.children[0]);
        }
    }

})();


