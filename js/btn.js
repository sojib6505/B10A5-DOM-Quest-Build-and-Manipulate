document.getElementById('btn-donation').addEventListener('click',function(){
    const btnDonate = getButtonById('btn-donation');
    btnDonate.classList.add('bg-lime-400');
    const btnHistory = getButtonById('btn-history');
    btnHistory.classList.remove('bg-lime-400');
    const donate = document.getElementById('donate-container');
    donate.classList.remove('hidden')
    const history = document.getElementById('history-container');
    history.classList.add('hidden')
    
})

document.getElementById('btn-history').addEventListener('click',function(){
    const btnHistory = getButtonById('btn-history');
    btnHistory.classList.add('bg-lime-400');
    const btnDonate = getButtonById('btn-donation');
    btnDonate.classList.remove('bg-lime-400');
    const history = document.getElementById('history-container');
    history.classList.remove('hidden')
    const donate = document.getElementById('donate-container');
    donate.classList.add('hidden')
   
})