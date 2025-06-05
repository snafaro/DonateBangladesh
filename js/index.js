console.log("hello world");


function clickEvent (id) {
    document.getElementById(id).addEventListener('click', e=>{
    const inputValue = parseInt(e.target.parentNode.querySelector('input').value);
    const donationValue = parseInt(e.target.parentNode.querySelector('span').innerText);
    const myBalance = parseInt(document.getElementById('balance').innerText);

    if((inputValue > 0 && inputValue < myBalance) && typeof inputValue !== "string"){
        const donationValueUpdate = donationValue + inputValue;
        const myBalanceUpdate = myBalance - inputValue;
        e.target.parentNode.querySelector('span').innerText = donationValueUpdate; 
        document.getElementById('balance').innerText = myBalanceUpdate; 
    }
    else{
        alert("Please Provide Valid Amount");
    }
    
})
}

clickEvent("donate-noakhali");
clickEvent("donate-feni");
clickEvent("donate-quota");