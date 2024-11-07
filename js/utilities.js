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

function showSectionById(id){
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}

function swapColor(){
    const donationColor = document.getElementById('show-donation');
    const historyColor = document.getElementById('show-history');

    if(donationColor.classList.contains('bg-lime-300')){
        donationColor.classList.replace('bg-lime-300', 'bg-slate-50');
        historyColor.classList.replace('bg-slate-50', 'bg-lime-300');
    }
    else{
        donationColor.classList.replace('bg-slate-50', 'bg-lime-300');
        historyColor.classList.replace('bg-lime-300', 'bg-slate-50');
    }
}



function modal(){
    const modal = document.getElementById('modal');
    modal.classList.remove('hidden');
    document.getElementById('close-modal').addEventListener('click', function () {
        modal.classList.add('hidden');
    });
}