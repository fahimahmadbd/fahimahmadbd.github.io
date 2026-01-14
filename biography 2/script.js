// ওয়েবসাইট লোড মেসেজ
console.log("Website Loaded Successfully");

// ফুটারে সাল আপডেট
document.getElementById('year').textContent = new Date().getFullYear();

// স্ক্রলিং এনিমেশন (Intersection Observer)
// এটি চেক করবে কখন কোন সেকশন স্ক্রিনে আসছে
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // যদি সেকশনটি স্ক্রিনে দেখা যায়
        if (entry.isIntersecting) {
            entry.target.classList.add('show'); // 'show' ক্লাস যোগ করো
        } else {
            // চাইলে এটি রিমুভ করতে পারেন, কিন্তু একবার দেখানোর পর রেখে দেয়াই ভালো
            // entry.target.classList.remove('show'); 
        }
    });
});

// সব 'hidden' ক্লাস যুক্ত এলিমেন্টগুলোকে খুঁজে বের করা
const hiddenElements = document.querySelectorAll('.hidden');

// প্রত্যেকটি এলিমেন্টকে অবজার্ভ করতে বলা
hiddenElements.forEach((el) => observer.observe(el));

// স্মুথ স্ক্রলিং ন্যাভিগেশন লিংকের জন্য
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});