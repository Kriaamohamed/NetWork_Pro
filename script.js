// التبديل بين الأقسام
function show(id) {
    // إخفاء كافة الصفحات
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => {
        p.classList.remove('active');
    });

    // إظهار الصفحة المختارة
    const activePage = document.getElementById(id);
    if (activePage) {
        activePage.classList.add('active');
        // الصعود للأعلى تلقائياً عند تغيير الصفحة
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// إرسال الطلب إلى الواتساب مع رسالة جاهزة
function order(serviceName) {
    const phone = "21627049943"; // رقمك التونسي
    const text = "مرحباً Kriaa، أريد طلب خدمة: " + serviceName;
    const url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(text);
    window.open(url, "_blank");
}

// التواصل العام عبر الواتساب
function whatsapp() {
    const phone = "21627049943";
    const text = "مرحباً، أريد الاستفسار عن خدماتكم المتاحة.";
    const url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(text);
    window.open(url, "_blank");
}

// عرض وصف الخدمة في نافذة منبثقة
function desc(info) {
    alert("تفاصيل الخدمة:
" + info);
}

// تشغيل الصفحة الرئيسية عند فتح الموقع لأول مرة
document.addEventListener('DOMContentLoaded', () => {
    show('home');
});
