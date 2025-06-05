console.log("hello world");


function clickEvent (id) {
    document.getElementById(id).addEventListener('click', e=>{
    const inputValue = parseInt(e.target.parentNode.querySelector('input').value);
    const donationValue = parseInt(e.target.parentNode.querySelector('span').innerText);
    const myBalance = parseInt(document.getElementById('balance').innerText);
    const heading = e.target.parentNode.querySelector('h2').innerText;
    const time = new Date();

    if((inputValue > 0 && inputValue < myBalance) && typeof inputValue !== "string"){
        const donationValueUpdate = donationValue + inputValue;
        const myBalanceUpdate = myBalance - inputValue;
        e.target.parentNode.querySelector('span').innerText = donationValueUpdate; 
        document.getElementById('balance').innerText = myBalanceUpdate;
        let div = document.createElement('div');
        div.classList.add("border","border-[#c2c2c2]","p-[20px]", "rounded-md", "mt-10", "w-1/2");
        div.innerHTML = `
        <h1 class="card-title">${inputValue} Taka is donated for ${heading}<h1>
        <p>${time}</p>
        `;
        document.getElementById('history-card-container').appendChild(div);
        document.getElementById('my_modal_4').showModal();
    }
    else{
        alert("Please Provide Valid Amount");
    }
    
})
};

clickEvent("donate-noakhali");
clickEvent("donate-feni");
clickEvent("donate-quota");

document.getElementById('history-btn').addEventListener('click', e=>{
    e.target.classList.add('bg-[#B4F461]');
    document.getElementById('donate-btn').classList.remove('bg-[#B4F461]');
    document.getElementById('history-card-container').classList.add('flex');
    document.getElementById('donate-card-container').classList.add('hidden');
    document.getElementById('history-card-container').classList.remove('hidden');
    
});

document.getElementById('donate-btn').addEventListener('click', e=>{
    e.target.classList.add('bg-[#B4F461]');
    document.getElementById('history-btn').classList.remove('bg-[#B4F461]');
    document.getElementById('history-card-container').classList.add('hidden');
    document.getElementById('donate-card-container').classList.remove('hidden');
    document.getElementById('history-card-container').classList.remove('flex');
    
});

document.getElementById('blog-btn').addEventListener('click', e=>{
    window.location.href = "/blog.html";
});
