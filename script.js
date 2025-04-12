let btnW = document.getElementById('week');
let btnM = document.getElementById('month');
let x = "<i class='bx bxs-check-circle'></i>"
let c1p = document.getElementById('c1-p');
let c11 = document.getElementById('c1-1');
let c12 = document.getElementById('c1-2');
let c13 = document.getElementById('c1-3');
let c14 = document.getElementById('c1-4');
let c2p = document.getElementById('c2-p');
let c21 = document.getElementById('c2-1');
let c22 = document.getElementById('c2-2');
let c23 = document.getElementById('c2-3');
let c24 = document.getElementById('c2-4');
let c25 = document.getElementById('c2-5');
let c3p = document.getElementById('c3-p');
let c31 = document.getElementById('c3-1');
let c32 = document.getElementById('c3-2');
let c33 = document.getElementById('c3-3');
let c34 = document.getElementById('c3-4');
let c35 = document.getElementById('c3-5');

btnW.onclick= () => {
    btnW.style.backgroundColor='#960000';
    btnW.style.color='white';
    btnM.style.backgroundColor='transparent';
    btnM.style.color='#960000';
    c1p.innerHTML=`700 <img src="images/egyptian-pound.png">`
    c11.innerHTML=`${x}  3 Posts`
    c12.innerHTML=`${x}  2 Professional designs`
    c13.innerHTML=`${x}   Comments and messages management`
    c14.style.visibility='hidden'


    c2p.innerHTML=`1300 <img src="images/egyptian-pound.png">`
    c21.innerHTML=`${x}  5 Posts`
    c22.innerHTML=`${x}  3 Professional designs`
    c23.innerHTML=`${x} Comments and messages management`
    c24.innerHTML=`${x} Performance report`

    c25.style.visibility ='hidden'

    c3p.innerHTML=`2000 <img src="images/egyptian-pound.png">`
    c31.innerHTML=`${x} 7 Posts `
    c32.innerHTML=`${x} 5 Professional designs`
    c33.innerHTML=`${x} Comments and messages management`
    c34.innerHTML=`${x} Ad campaign worth 300 EGP`

    c35.style.visibility ='hidden'


};
btnM.onclick= () => {
    btnW.style.backgroundColor='transparent';
    btnW.style.color='#960000';
    btnM.style.backgroundColor='#960000';
    btnM.style.color='white';
    c1p.innerHTML=`2500 <img src="images/egyptian-pound.png">`
    c11.innerHTML=`${x} 12 Posts (3 per week)`
    c12.innerHTML=`${x} 6 Professional designs`
    c13.innerHTML=`${x}  Comments and messages management`
    c14.innerHTML=`${x}   Monthly performance report`
    c14.style.visibility ='visible'
    c2p.innerHTML=`4500 <img src="images/egyptian-pound.png">`
    c21.innerHTML=`${x} 20 Posts (5 per week)`
    c22.innerHTML=`${x} 10 Professional designs`
    c23.innerHTML=`${x} Comments and messages management`
    c24.innerHTML=`${x} Analytical monthly report`
    c25.innerHTML=`${x} Ad campaign worth 500 EGP`
    c25.style.visibility ='visible'
    c3p.innerHTML=`6500 <img src="images/egyptian-pound.png">`
    c31.innerHTML=`${x} 30 Posts (Daily)`
    c32.innerHTML=`${x} 15 Professional designs`
    c33.innerHTML=`${x} Comments and messages management`
    c34.innerHTML=`${x} Comprehensive analytical report`
    c35.innerHTML=`${x} Two ad campaigns worth 1,500 EGP`
    c35.style.visibility ='visible'
};



