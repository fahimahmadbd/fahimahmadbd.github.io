// ওয়েবসাইট লোড মেসেজ
console.log("Website Loaded Successfully");

// ফুটারে সাল আপডেট
document.getElementById('year').textContent = new Date().getFullYear();

// স্ক্রলিং এনিমেশন
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// স্মুথ স্ক্রলিং
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// --- PREMIUM HAMBURGER MENU LOGIC (SCROLL LOCK) ---
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');
const body = document.body; // বডি সিলেক্ট করা

if(burger){
    burger.addEventListener('click', () => {
        // মেনু ওপেন/ক্লোজ
        nav.classList.toggle('nav-active');
        
        // আইকন এনিমেশন
        burger.classList.toggle('toggle');
        
        // স্ক্রল লক (সবচেয়ে জরুরি)
        body.classList.toggle('menu-open');
    });
}

// মেনুর লিংকে ক্লিক করলে মেনু অটো বন্ধ হবে + স্ক্রল লক খুলবে
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('nav-active');
        burger.classList.remove('toggle');
        body.classList.remove('menu-open'); // লক রিমুভ
    });
});
