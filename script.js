let slideIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = slides.children.length;


const firstSlideClone = slides.firstElementChild.cloneNode(true);
const lastSlideClone = slides.lastElementChild.cloneNode(true);

slides.appendChild(firstSlideClone); 
slides.insertBefore(lastSlideClone, slides.firstElementChild); 

// Adjust the slider position to show the first real slide
slides.style.transform = `translateX(-100%)`;

function showSlides() {
    slideIndex++;
    if (slideIndex >= totalSlides + 1) {
        
        slides.style.transition = 'none';
        slides.style.transform = `translateX(-100%)`;
        slideIndex = 1;
        
        void slides.offsetWidth;
        
        slides.style.transition = 'transform 0.5s ease-in-out';
    }
    slides.style.transform = `translateX(-${(slideIndex + 1) * 100}%)`;
    setTimeout(showSlides, 5000); 
}

document.querySelector('.prev').addEventListener('click', () => {
    slideIndex--;
    if (slideIndex < 0) {
        
        slides.style.transition = 'none';
        slides.style.transform = `translateX(-${(totalSlides + 1) * 100}%)`;
        slideIndex = totalSlides - 1;
        
        void slides.offsetWidth;
        
        slides.style.transition = 'transform 0.5s ease-in-out';
    }
    slides.style.transform = `translateX(-${(slideIndex + 1) * 100}%)`;
});

document.querySelector('.next').addEventListener('click', () => {
    slideIndex++;
    if (slideIndex >= totalSlides + 1) {
        
        slides.style.transition = 'none';
        slides.style.transform = `translateX(-100%)`;
        slideIndex = 1;
        
        void slides.offsetWidth;
        
        slides.style.transition = 'transform 0.5s ease-in-out';
    }
    slides.style.transform = `translateX(-${(slideIndex + 1) * 100}%)`;
});

showSlides(); 