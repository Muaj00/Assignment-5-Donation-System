// document.getElementById('noakhali-deposit').addEventListener('click', function(){
//     const noakhaliDepositAmount = document.getElementById('Noakhali-input-amount').value;
//     console.log(noakhaliDepositAmount);
// });

function getDepositAmount(id){
    const depositMoney = document.getElementById(id).value;
    const depositMoneyNumber = parseFloat(depositMoney);
    return depositMoneyNumber;
}

function getTextFieldAmount(id){
    const textAmount = document.getElementById(id).innerText;
    const textAmountNumber = parseFloat(textAmount);
    return textAmountNumber;
}

function donationBalance(id){
    const finalBalence = document.getElementById(id).innerText;
    const finalBalenceNumber = parseFloat(finalBalence);
    return finalBalenceNumber;
}