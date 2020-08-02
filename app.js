document.querySelector('.title-blue').addEventListener('mouseenter', function(){
    const blueArea = document.getElementById('office');
    const image = document.querySelector('img');
    image.src = 'http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-blue.png'

    
})
document.querySelector('.title-red').addEventListener('mouseenter', function(){
    const blueArea = document.getElementById('office');
    const image = document.querySelector('img');
    image.src = 'http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-red.png'

    
})
document.querySelector('.title-green').addEventListener('mouseenter', function(){
    const blueArea = document.getElementById('office');
    const image = document.querySelector('img');
    image.src = 'http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-green.png'

    
})
document.querySelector('.title-yellow').addEventListener('mouseenter', function(){
    const blueArea = document.getElementById('office');
    const image = document.querySelector('img');
    image.src = 'http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-yellow.png'

    
})
document.querySelector('.title-pink').addEventListener('mouseenter', function(){
    const blueArea = document.getElementById('office');
    const image = document.querySelector('img');
    image.src = 'http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-pink.png'

    
})
document.querySelector('.title-blue').addEventListener('mouseout',backtoNormal);
document.querySelector('.title-red').addEventListener('mouseout',backtoNormal);
document.querySelector('.title-green').addEventListener('mouseout',backtoNormal);
document.querySelector('.title-yellow').addEventListener('mouseout',backtoNormal);
document.querySelector('.title-pink').addEventListener('mouseout',backtoNormal);

// Mouse Exit Function
function backtoNormal(){
    console.log('mouse is out');
    const image = document.querySelector('img');
    image.src = 'http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-original.png';
}