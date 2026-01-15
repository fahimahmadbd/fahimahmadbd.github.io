// ওয়েবসাইট লোড মেসেজ
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