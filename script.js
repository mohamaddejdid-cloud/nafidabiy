function showDashboard() {
    document.getElementById('loginPage').style.display = 'none';
    document.getElementById('dashboardPage').style.display = 'flex';
}

function openPayment() {
    document.getElementById('paymentModal').style.display = 'flex';
}

function closePayment() {
    document.getElementById('paymentModal').style.display = 'none';
}

function processPayment() {
    alert("جاري الاتصال ببريد الجزائر...");
    setTimeout(() => {
        alert("تم الدفع بنجاح!");
        closePayment();
    }, 2000);
}
