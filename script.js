// ==========================
// ArtRabs Core System v2
// ==========================


// Данные игрока

let multiStars =
Number(localStorage.getItem("multiStars")) || 0;


let level =
Number(localStorage.getItem("level")) || 1;


let workers =
Number(localStorage.getItem("workers")) || 0;



// Сила клика

function clickPower(){

    return level;

}



// Обновление интерфейса

function update(){

    document.getElementById("balance").innerHTML =
    multiStars;


    document.getElementById("level").innerHTML =
    level;


    document.getElementById("workers").innerHTML =
    workers;


    document.getElementById("income").innerHTML =
    workers * level * 50 + "/week";


    save();

}




function save(){

    localStorage.setItem(
        "multiStars",
        multiStars
    );


    localStorage.setItem(
        "level",
        level
    );


    localStorage.setItem(
        "workers",
        workers
    );

}




// ==========================
// КЛИК ПО ЯДРУ
// ==========================


const core =
document.getElementById("clicker");



core.onclick = function(){


    let gain =
    clickPower();



    multiStars += gain;



    update();



    showGain(
        "+" + gain
    );


};






// ==========================
// Анимация получения
// ==========================


function showGain(text){


    let gain =
    document.getElementById("gain");


    gain.innerHTML =
    text;


    gain.classList.remove(
        "gain-animation"
    );


    void gain.offsetWidth;


    gain.classList.add(
        "gain-animation"
    );


}







// ==========================
// УРОВЕНЬ
// ==========================


function upgrade(){


    let price =
    level * 1000;



    if(multiStars >= price){


        multiStars -= price;


        level++;


        update();


    }


}






// ==========================
// ДОБАВЛЕНИЕ РАБОТНИКОВ
// ==========================


function buyWorker(){


    let price =
    5000;



    if(multiStars >= price){


        multiStars -= price;


        workers++;


        update();


    }


}






// ==========================
// ЕЖЕДНЕВНЫЙ БОНУС
// ==========================


let lastBonus =
Number(localStorage.getItem("bonusTime")) || 0;



function dailyBonus(){


    let now =
    Date.now();



    let day =
    86400000;



    if(now-lastBonus >= day){


        multiStars += 500;



        localStorage.setItem(
            "bonusTime",
            now
        );


        update();


        alert(
        "Daily reward +500 MULTI"
        );


    }

    else{


        alert(
        "Бонус уже получен"
        );


    }


}






// ==========================
// ЗАПУСК
// ==========================


update();
