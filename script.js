// =====================
// ArtRabs Game Engine
// =====================


// Балансы

let multiStars =
Number(localStorage.getItem("multiStars")) || 0;


let stars =
Number(localStorage.getItem("stars")) || 0;



let workerLevel =
Number(localStorage.getItem("workerLevel")) || 1;



let refs =
Number(localStorage.getItem("refs")) || 0;



let refMoney =
Number(localStorage.getItem("refMoney")) || 0;





// Обновление данных

function update(){


document.getElementById("multi").innerHTML =
multiStars;


document.getElementById("stars").innerHTML =
stars;



document.getElementById("profileMulti").innerHTML =
multiStars;


document.getElementById("profileStars").innerHTML =
stars;



document.getElementById("workerLevel").innerHTML =
workerLevel;


document.getElementById("workerIncome").innerHTML =
workerLevel * 40;



document.getElementById("refsCount").innerHTML =
refs;


document.getElementById("refMoney").innerHTML =
refMoney;



save();


}




function save(){


localStorage.setItem(
"multiStars",
multiStars
);


localStorage.setItem(
"stars",
stars
);


localStorage.setItem(
"workerLevel",
workerLevel
);


localStorage.setItem(
"refs",
refs
);


localStorage.setItem(
"refMoney",
refMoney
);


}







// =====================
// КЛИКЕР
// =====================


document
.getElementById("clickBtn")
.onclick = function(){


multiStars++;


update();


popup("+1 Multi ⭐");


};







// =====================
// РУЛЕТКА
// =====================


document
.getElementById("wheelBtn")
.onclick = function(){


let reward =
Math.floor(Math.random()*6);



stars += reward;



update();



alert(
"🎁 Рулетка\n\nПолучено: "
+
reward
+
" ⭐"
);



};









// =====================
// ПЕРЕКЛЮЧЕНИЕ МЕНЮ
// =====================


function openPage(page){


let pages =
document.querySelectorAll(".page");



pages.forEach(function(item){

item.style.display="none";

});



document.getElementById(page)
.style.display="block";


}









// =====================
// РАБОТНИК
// =====================


function upgradeWorker(){


if(workerLevel >= 50){


alert(
"Максимальный уровень"
);


return;

}



let price =
workerLevel * 500;



if(multiStars < price){


alert(
"Нужно "
+
price
+
" Multi"
);


return;


}



multiStars -= price;


workerLevel++;


update();


alert(
"Работник улучшен!\nУровень "
+
workerLevel
);


}









// =====================
// РЕФЕРАЛЫ
// =====================


function invite(){


let link =
window.location.href
+
"?ref="
+
Date.now();



alert(
"Твоя ссылка ArtRabs:\n\n"
+
link
);


}









// =====================
// ОБМЕН
// =====================


function exchange(){



if(multiStars < 1000){


alert(
"Минимум 1000 Multi"
);


return;


}




let result =
Math.floor(
multiStars / 4000
);



stars += result;


multiStars = 0;



update();



alert(
"Получено ⭐ "
+
result
);


}








// =====================
// ВСПЛЫВАЮЩАЯ НАГРАДА
// =====================


function popup(text){


let p =
document.createElement("div");



p.innerHTML=text;


p.style.position="fixed";

p.style.top="40%";

p.style.left="50%";

p.style.transform=
"translate(-50%,-50%)";


p.style.fontSize="30px";

p.style.color="#FFD700";

p.style.fontWeight="bold";


document.body.appendChild(p);



setTimeout(()=>{

p.remove();

},800);



}






// Запуск


update();

openPage("home");
