//for card 01
document.getElementById('noakhali-deposit-btn').addEventListener('click', function () {
    const depositMoney = getDepositAmount('Noakhali-input-amount');
    console.log("Deposit Noakhali Money", depositMoney);

    if(isNaN(depositMoney) || depositMoney<0){
        alert("Please insert a valid Amount");
        return;
    }

    //summation
    const noakhaliTotalDeposit = getTextFieldAmount('noakhali-deposit');
    const newNoakhaliBalance = depositMoney + noakhaliTotalDeposit;
    document.getElementById('noakhali-deposit').innerText = newNoakhaliBalance;
    //sub
    const finalBalenceAmount = donationBalance('final-Balence');
    const RemainingBalence = finalBalenceAmount - depositMoney;
    document.getElementById('final-Balence').innerText = RemainingBalence;

    //adding History
    const cardTitle = document.getElementById("card-title1").innerText
    const div = document.createElement('div');
     // set time
     const currentDate = new Date();
     const time = "Date: " + currentDate.toString();
     div.innerHTML = `<p class="font-bold mb-3"> ${depositMoney} Taka is Donated for ${cardTitle} </p> 
     <p class="font-extralight"> ${time} </p>`;
     div.classList.add("border", "p-8", "w-2/3", "mx-auto", "rounded-xl");
    document.getElementById('history-section').appendChild(div)
    //show modal
    modal()

});

//for card 02
document.getElementById('feni-deposit-btn').addEventListener('click', function () {
    const depositMoney = getDepositAmount('Feni-input-amount');
    console.log("Deposit Noakhali Money", depositMoney);
    if(isNaN(depositMoney) || depositMoney<0){
        alert("Please insert a valid Amount");
        return;
    }

    //summation
    const feniTotalDeposit = getTextFieldAmount('feni-deposit');
    const newFeniBalance = depositMoney + feniTotalDeposit;
    document.getElementById('feni-deposit').innerText = newFeniBalance;
    //sub
    const finalBalenceAmount = donationBalance('final-Balence');
    const RemainingBalence = finalBalenceAmount - depositMoney;
    document.getElementById('final-Balence').innerText = RemainingBalence;

    //adding History
    const cardTitle = document.getElementById("card-title2").innerText
    const div = document.createElement('div');
     // set time
     const currentDate = new Date();
     const time = "Date: " + currentDate.toString();
     div.innerHTML = `<p class="font-bold mb-3"> ${depositMoney} Taka is Donated for ${cardTitle} </p> 
     <p class="font-extralight"> ${time} </p>`;
     div.classList.add("border", "p-8", "w-2/3", "mx-auto", "rounded-xl");

    document.getElementById('history-section').appendChild(div)
    //show modal
    modal()
});

//for card-03
document.getElementById('Quota-deposit-btn').addEventListener('click', function () {
    const depositMoney = getDepositAmount('Quota-input-amount');
    console.log("Deposit Noakhali Money", depositMoney);
    if(isNaN(depositMoney) || depositMoney<0){
        alert("Please insert a valid Amount");
        return;
    }

    //summation
    const QuotaTotalDeposit = getTextFieldAmount('Quota-deposit');
    const newQuotaBalance = depositMoney + QuotaTotalDeposit;
    document.getElementById('Quota-deposit').innerText = newQuotaBalance;
    //sub
    const finalBalenceAmount = donationBalance('final-Balence');
    const RemainingBalence = finalBalenceAmount - depositMoney;
    document.getElementById('final-Balence').innerText = RemainingBalence;

    //adding History
    const cardTitle = document.getElementById("card-title3").innerText
    const div = document.createElement('div');

    // set time
    const currentDate = new Date();
    const time = "Date: " + currentDate.toString();
    div.innerHTML = `<p class="font-bold mb-3"> ${depositMoney} Taka is Donated for ${cardTitle} </p> 
    <p class="font-extralight"> ${time} </p>`;
    div.classList.add("border", "p-8", "w-2/3", "mx-auto", "rounded-xl");

    

    document.getElementById('history-section').appendChild(div)

    
    
    //show modal
    modal()
});