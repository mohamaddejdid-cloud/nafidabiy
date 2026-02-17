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
    alert("جاري الاتصال بخوادم بريد الجزائر...");
    
    setTimeout(() => {
        alert("تمت العملية بنجاح! تم استخراج وصل G50 رقم #2026-001");
        closePayment();
        
        // إضافة السطر الجديد للجدول
        const table = document.getElementById('historyTable').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow(0);
        newRow.innerHTML = `
            <td>2026/02/17</td>
            <td>دفع G50 آلي</td>
            <td>46,550 دج</td>
            <td class="status-ok">تم الدفع ✅</td>
        `;
    }, 2000);
}

