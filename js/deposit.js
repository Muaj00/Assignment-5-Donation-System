//for card 01
document.getElementById('noakhali-deposit-btn').addEventListener('click', function(){
    const depositMoney = getDepositAmount('Noakhali-input-amount');
    console.log("Deposit Noakhali Money", depositMoney);

    //summation
    const noakhaliTotalDeposit = getTextFieldAmount('noakhali-deposit');
    const newNoakhaliBalance = depositMoney + noakhaliTotalDeposit;
    document.getElementById('noakhali-deposit').innerText = newNoakhaliBalance;
    //sub
    const finalBalenceAmount = donationBalance('final-Balence');
    const RemainingBalence = finalBalenceAmount - depositMoney;
    document.getElementById('final-Balence').innerText = RemainingBalence;
    
});

//for card 02
document.getElementById('feni-deposit-btn').addEventListener('click', function(){
    const depositMoney = getDepositAmount('Feni-input-amount');
    console.log("Deposit Noakhali Money", depositMoney);

    //summation
    const feniTotalDeposit = getTextFieldAmount('feni-deposit');
    const newFeniBalance = depositMoney + feniTotalDeposit;
    document.getElementById('feni-deposit').innerText = newFeniBalance;
    //sub
    const finalBalenceAmount = donationBalance('final-Balence');
    const RemainingBalence = finalBalenceAmount - depositMoney;
    document.getElementById('final-Balence').innerText = RemainingBalence;
    
});

//for card-03
document.getElementById('Quota-deposit-btn').addEventListener('click', function(){
    const depositMoney = getDepositAmount('Quota-input-amount');
    console.log("Deposit Noakhali Money", depositMoney);

    //summation
    const QuotaTotalDeposit = getTextFieldAmount('Quota-deposit');
    const newQuotaBalance = depositMoney + QuotaTotalDeposit;
    document.getElementById('Quota-deposit').innerText = newQuotaBalance;
    //sub
    const finalBalenceAmount = donationBalance('final-Balence');
    const RemainingBalence = finalBalenceAmount - depositMoney;
    document.getElementById('final-Balence').innerText = RemainingBalence;
    
});