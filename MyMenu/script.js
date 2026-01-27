const products = [
    // الكوكيز
    { id: "c1", name: "كوكيز شوكولاتة", cat: "cookies", price: 5, img: "3.jpg" },
    { id: "c4", name: "كوكيز حساوي", cat: "cookies", price: 6, img: "4.jpg" },
    
    // بودينق كلاسيك
    { id: "p1", name: "بودينق كلاسيك (ميني)", cat: "pudding", price: 10, img: "5.jpg" },
    { id: "p2", name: "بودينق كلاسيك (صغير)", cat: "pudding", price: 17, img: "6.jpg" },
    { id: "p3", name: "بودينق كلاسيك (وسط)", cat: "pudding", price: 25, img: "7.jpg" },
    
    // بودينق ميما
    { id: "p4", name: "بودينق ميما (ميني)", cat: "pudding", price: 12, img: "8.jpg" },
    { id: "p5", name: "بودينق ميما (صغير)", cat: "pudding", price: 20, img: "9.jpg" },
    { id: "p6", name: "بودينق ميما (وسط)", cat: "pudding", price: 28, img: "10.jpg" },
    
    // كيكات (تم حذف 80 انش بناءً على طلبك)
    { id: "k1", name: "كيكة دائري (5 انش)", cat: "cakes", price: 40, img: "11.jpg" },
    { id: "k2", name: "كيكة دائري (8 انش)", cat: "cakes", price: 85, img: "1.jpg" }, 
    { id: "k3", name: "كيكة قلب (5 انش)", cat: "cakes", price: 45, img: "12.jpg" },
    { id: "k4", name: "كيكة قلب (10 انش)", cat: "cakes", price: 120, img: "2.jpg" } 
];

function displayMenu(items) {
    const menuGrid = document.getElementById('menu-grid');
    menuGrid.innerHTML = items.map(item => `
        <div class="item-card">
            <img src="${item.img}" alt="${item.name}">
            <div class="item-info">
                <h3>${item.name}</h3>
                <span class="price">${item.price}</span>
            </div>
        </div>
    `).join('');
}

function filterMenu(cat) {
    if(cat === 'all') {
        displayMenu(menuData);
    } else {
        const filtered = menuData.filter(item => item.category === cat);
        displayMenu(filtered);
    }
    
    // تحديث شكل الأزرار
    const buttons = document.querySelectorAll('.categories button');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}

// تشغيل المنيو عند فتح الصفحة
displayMenu(menuData);
const phrases = [
    "جودة الطعم.. في كل قطعة 🍪",
    "نستخدم شوكولاتة بلجيكية فاخرة ✨",
    "طراوة ولذة لا تقاوم 🔥",
    "صُنع بكل حب من أجلكم ❤️"
];

let phraseIndex = 0;
const textElement = document.getElementById("changing-text");

function changeText() {
    textElement.style.opacity = 0; // تأثير اختفاء بسيط
    setTimeout(() => {
        phraseIndex = (phraseIndex + 1) % phrases.length;
        textElement.innerText = phrases[phraseIndex];
        textElement.style.opacity = 1; // تأثر ظهور
    }, 500);
}

// أضف هذا السطر لملف التنسيق CSS ليصبح الانتقال ناعماً
// #changing-text { transition: opacity 0.5s ease-in-out; }
setInterval(changeText, 3000); // تغيير النص كل 3 ثوانٍ