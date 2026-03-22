function show(id) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.classList.remove('active'));
    const activePage = document.getElementById(id);
    if (activePage) {
        activePage.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function order(serviceName) {
    const phone = "21600000000";
    const text = "مرحباً Kriaa، أريد طلب خدمة: " + serviceName;
    const url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(text);
    window.open(url, "_blank");
}

function whatsapp() {
    const phone = "21600000000";
    const text = "مرحباً، أريد الاستفسار عن خدماتكم.";
    const url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(text);
    window.open(url, "_blank");
}

function desc(info) {
    alert("تفاصيل الخدمة:\n" + info);
}

document.addEventListener('DOMContentLoaded', () => {
    show('home');
});
