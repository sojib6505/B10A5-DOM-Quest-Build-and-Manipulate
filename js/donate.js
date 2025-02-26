// donate at noyakhali
document.getElementById('btn-noakhali').addEventListener('click', function(event){
    event.preventDefault();
    const donateAmount = getInputValueById('input-noakhali');
    const noyakhaliAmount = getTextValueById('balance-noakhali');
    const mainAmount =getTextValueById('main-Amount');
 
    if(!isNaN(donateAmount) && donateAmount > 0){
       let noyakhaliTotal = noyakhaliAmount + donateAmount;
       document.getElementById('balance-noakhali').innerText = noyakhaliTotal;
       let totalAmount = mainAmount + donateAmount;
       document.getElementById('main-Amount').innerText = totalAmount;
    //  history part start
       const div = document.createElement('div');
       let currentTime = new Date().toLocaleString();
       div.innerHTML = `
       <div class="w-5xl  rounded-lg p-5  border mt-2 text-center">
       <h5 class="font-bold text-xs lg:text-2xl">${donateAmount} Taka is Donated for famine-2024 at Feni, Bangladesh</h5>
       <p class="text-xs lg:text-xl">Donation Time: ${currentTime} </p>
       </div>
       `
       document.getElementById('history-container').appendChild(div)
    //  history part end
       const popup = document.getElementById('popup');
       popup.classList.remove('hidden')
    }
    else{
        alert('Please try again!')
    }
})

//Donate for Flood Relief in Feni,Bangladesh
document.getElementById('btn-feni').addEventListener('click', function(event){
    event.preventDefault();
    const donateAmount = getInputValueById('input-feni');
    const feniAmount = getTextValueById('balance-feni');
    const mainAmount =getTextValueById('main-Amount');
 
    if(!isNaN(donateAmount) && donateAmount > 0){
       let feniTotal = feniAmount + donateAmount;
       document.getElementById('balance-feni').innerText = feniTotal;
       let totalAmount = mainAmount + donateAmount;
       document.getElementById('main-Amount').innerText = totalAmount;

        //  history part start
        const div = document.createElement('div');
        let currentTime = new Date().toLocaleString();
        div.innerHTML = `
        <div class="w-5xl  rounded-lg p-5  border mt-2 text-center">
        <h5 class="font-bold text-xs lg:text-2xl">${donateAmount} Taka is Donated for Flood Relief in Feni,Bangladesh</h5>
        <p class="text-xs lg:text-xl">Donation Time: ${currentTime} </p>
        </div>
        `
        document.getElementById('history-container').appendChild(div)
     //  history part end
     const popup = document.getElementById('popup');
     popup.classList.remove('hidden')
    }
    else{
        alert('Please try again!')
    }
})
// Aid for Injured in the Quota Movement
document.getElementById('quota-btn').addEventListener('click', function(event){
    event.preventDefault();
    const donateAmount = getInputValueById('input-quota');
    const quotaAmount = getTextValueById('balance-quota');
    const mainAmount =getTextValueById('main-Amount');
 
    if(!isNaN(donateAmount) && donateAmount > 0){
       let quotaTotal = quotaAmount + donateAmount;
       document.getElementById('balance-quota').innerText = quotaTotal;
       let totalAmount = mainAmount + donateAmount;
       document.getElementById('main-Amount').innerText = totalAmount;
            //  history part start
            const div = document.createElement('div');
            let currentTime = new Date().toLocaleString();
            div.innerHTML = `
            <div class="w-5xl  rounded-lg p-5  border mt-2 text-center">
            <h5 class="font-bold text-xs lg:text-2xl">${donateAmount} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h5>
            <p class="text-xs lg:text-xl">Donation Time: ${currentTime} </p>
            </div>
            `
            document.getElementById('history-container').appendChild(div)
         //  history part end
         const popup = document.getElementById('popup');
         popup.classList.remove('hidden')
         
    }
    else{
        alert('Please try again!')
    }
})
