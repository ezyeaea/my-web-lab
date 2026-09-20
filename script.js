// Нүүр хуудасны товчлуурын хэрэгжүүлэлт
document.addEventListener("DOMContentLoaded", function() {
    const mainBtn = document.getElementById("mainBtn");
    if (mainBtn) {
        mainBtn.addEventListener("click", function() {
            alert("Та манай бие даалтын сайтаар зочилсонд баярлалаа!");
        });
    }
});

// Холбоо барих маягт илгээх үед ажиллах функц
function submitForm() {
    const name = document.getElementById("name").value;
    alert("Баярлалаа, " + name + "! Таны зурвасыг амжилттай хүлээн авлаа.");
    document.getElementById("contactForm").reset();
}