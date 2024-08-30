// script.js

document.getElementById('loginButton').addEventListener('click', function() {
    document.getElementById('loginPage').classList.add('hidden');
    document.getElementById('accountingPage').classList.remove('hidden');
});

document.getElementById('addButton').addEventListener('click', function() {
    const amount = document.getElementById('amount').value;
    const description = document.getElementById('description').value;

    if (amount && description) {
        const recordList = document.getElementById('recordList');
        const li = document.createElement('li');
        li.textContent = `${description}: ¥${parseFloat(amount).toFixed(2)}`;
        recordList.appendChild(li);

        // Clear input fields
        document.getElementById('amount').value = '';
        document.getElementById('description').value = '';
    } else {
        alert('请填写金额和描述');
    }
});
