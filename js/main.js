const resultBtn = document.querySelector('#result-btn');
const menu = document.querySelectorAll('.menu');

resultBtn.addEventListener('click', function() {
    getResult();
});

// ф-я должна выводить результат и подсчитывать выбранные элементы
function getResult() {
    let cost = 0;
    let kkal = 0;
    for(let i = 0; i < menu.length; i++) {
        if (menu[i].checked) {
            cost += Number(menu[i].getAttribute('data-cost'));
            kkal += Number(menu[i].getAttribute('data-kkal'));
        }
    }
    document.querySelector('#cost').innerHTML = cost;
    document.querySelector('#kkal').innerHTML = kkal;
}

getResult();
