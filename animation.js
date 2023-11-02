const elementsToAnimate = document.querySelectorAll('.fade-in');

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
};

const elementObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            elementObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

elementsToAnimate.forEach((element) => {
    elementObserver.observe(element);
});
