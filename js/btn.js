document.getElementById('btn-donation').addEventListener('click',function(){
    const btnDonate = getButtonById('btn-donation');
    btnDonate.classList.add('bg-lime-400');
    const btnHistory = getButtonById('btn-history');
    btnHistory.classList.remove('bg-lime-400');
})

document.getElementById('btn-history').addEventListener('click',function(){
    const btnHistory = getButtonById('btn-history');
    btnHistory.classList.add('bg-lime-400');
    const btnDonate = getButtonById('btn-donation');
    btnDonate.classList.remove('bg-lime-400');
   
})