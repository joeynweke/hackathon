const arrowDown = document.getElementById("arrow-down");
const arrowUp = document.getElementById("arrow-up");
const innerWrapper = document.getElementById("inner-wrapper");
const notification = document.getElementById("notification");
const notificationCon = document.getElementById("notification-con");
const profile = document.getElementById("profile");
const profileCon = document.getElementById("profile-con");
const cross = document.getElementById("cross");
const main = document.getElementById("main");
const count = document.getElementById("count");
const customizeBtn = document.getElementById("customize-btn");
const btn1 =document.getElementById("btn1");
const btn2 =document.getElementById("btn2");
const btn3 =document.getElementById("btn3");
const btn4 =document.getElementById("btn4");

const innerClass = document.getElementById("inner-class");

const loading1 =document.getElementById("loading1");
const loading2 =document.getElementById("loading2");
const loading3 =document.getElementById("loading3");
const loading4 =document.getElementById("loading4");
const loading5 =document.getElementById("loading5");
const loading6 =document.getElementById("loading6");
const loading7 =document.getElementById("loading7");
const loading8 =document.getElementById("loading8");
const loading9 =document.getElementById("loading9");
const loading10 =document.getElementById("loading10");
const loading11 =document.getElementById("loading11");
const loading12 =document.getElementById("loading12");
const loading13 =document.getElementById("loading13");
const loading14 =document.getElementById("loading14");
const loading15 =document.getElementById("loading15");

const innerWrap = document.getElementById("inner-wrap")
const customizeClick = document.getElementById("customize")
const innerDetails = document.getElementById("inner-details");

const innerWrap2 = document.getElementById("inner-wrap2")
const customizeClick2 = document.getElementById("customize2")
const innerDetails2 = document.getElementById("inner-details2");

const innerWrap3 = document.getElementById("inner-wrap3")
const customizeClick3 = document.getElementById("customize3")
const innerDetails3 = document.getElementById("inner-details3");

const innerWrap4 = document.getElementById("inner-wrap4")
const customizeClick4 = document.getElementById("customize4")
const innerDetails4 = document.getElementById("inner-details4");

const innerWrap5 = document.getElementById("inner-wrap5")
const customizeClick5 = document.getElementById("customize5")
const innerDetails5 = document.getElementById("inner-details5");


function arrowDownUp() {
    arrowDown.addEventListener("click", () => {
        innerWrapper.classList.toggle('hide');
        arrowUp.classList.toggle('hide');
        arrowDown.classList.toggle('hide');
    });

    arrowUp.addEventListener("click", () => {
        innerWrapper.classList.toggle('hide');
        arrowUp.classList.toggle('hide');
        arrowDown.classList.toggle('hide');
    });
}

function notificationClick() {
    notification.addEventListener("click", () => {
        notificationCon.classList.toggle('hide');
        if (!notificationCon.classList.contains('hide')) {
            profileCon.classList.add('hide');
        }
    });
}

function profileClick() {
    profile.addEventListener("click", () => {
        profileCon.classList.toggle('hide');
        if (!profileCon.classList.contains('hide')) {
            notificationCon.classList.add('hide');
        }
    });
}


function dismissClick() {
    cross.addEventListener("click", () => {
        main.remove()
    })
}

let index = 0; // Initial index value
let total = 5;
const incrementPercentage = 20;

function handleBtnClick(btn, loading1, loading2, loading3) {
    let isAdded = true;

    count.innerText = `${index}/${total}`;

    btn.addEventListener("click", (e) => {
        if (isAdded === true) {
            loading1.classList.toggle('hide');
            loading2.classList.toggle('hide');
            setTimeout(() => {
                loading2.classList.toggle('hide');
                loading3.classList.toggle('hide');
            }, 500);
            isAdded = false;
            index++;
            innerClass.style.width = `calc(0% + ${incrementPercentage * index}%)`;
        } else {
            loading1.classList.remove('hide');
            loading2.classList.add('hide');
            loading3.classList.add('hide');
            isAdded = true;
            index--;
            innerClass.style.width = `calc(0% + ${incrementPercentage * index}%)`;
        }
        count.innerText = `${index}/${total}`;
    });
}




function customClick() {
    customizeClick.onclick = () => {
        innerWrap.classList.add('background');
        innerDetails.classList.remove('hide');

        innerWrap2.classList.remove('background');
        innerDetails2.classList.add('hide');

        innerWrap3.classList.remove('background');
        innerDetails3.classList.add('hide')

        innerWrap4.classList.remove('background');
        innerDetails4.classList.add('hide')

        innerWrap5.classList.remove('background');
        innerDetails5.classList.add('hide')
    }
}


function customClick2() {
    customizeClick2.onclick = () => {
        innerWrap2.classList.add('background');
        innerDetails2.classList.remove('hide')

        innerWrap.classList.remove('background');
        innerDetails.classList.add('hide');

        innerWrap3.classList.remove('background');
        innerDetails3.classList.add('hide')

        innerWrap4.classList.remove('background');
        innerDetails4.classList.add('hide')

        innerWrap5.classList.remove('background');
        innerDetails5.classList.add('hide')
    }
}

function customClick3() {
    customizeClick3.onclick = () => {
        innerWrap3.classList.add('background');
        innerDetails3.classList.remove('hide')

        innerWrap.classList.remove('background');
        innerDetails.classList.add('hide');

        innerWrap2.classList.remove('background');
        innerDetails2.classList.add('hide')

        innerWrap4.classList.remove('background');
        innerDetails4.classList.add('hide')

        innerWrap5.classList.remove('background');
        innerDetails5.classList.add('hide')
    }
}

function customClick4() {
    customizeClick4.onclick = () => {
        innerWrap4.classList.add('background');
        innerDetails4.classList.remove('hide')

        innerWrap.classList.remove('background');
        innerDetails.classList.add('hide');

        innerWrap2.classList.remove('background');
        innerDetails2.classList.add('hide')

        innerWrap3.classList.remove('background');
        innerDetails3.classList.add('hide')

        innerWrap5.classList.remove('background');
        innerDetails5.classList.add('hide')
    }
}

function customClick5() {
    customizeClick5.onclick = () => {
        innerWrap5.classList.add('background');
        innerDetails5.classList.remove('hide')

        innerWrap.classList.remove('background');
        innerDetails.classList.add('hide');

        innerWrap2.classList.remove('background');
        innerDetails2.classList.add('hide')

        innerWrap3.classList.remove('background');
        innerDetails3.classList.add('hide')

        innerWrap4.classList.remove('background');
        innerDetails4.classList.add('hide')
    }
}




arrowDownUp();
notificationClick();
profileClick();
dismissClick();

customClick(customizeClick,innerWrap,innerDetails);
customClick2(customizeClick2,innerWrap2,innerDetails2);
customClick3(customizeClick3,innerWrap3,innerDetails3);
customClick4(customizeClick4,innerWrap4,innerDetails4);
customClick5(customizeClick5,innerWrap5,innerDetails5);

handleBtnClick(customizeBtn,loading1,loading2,loading3);
handleBtnClick(btn1,loading4,loading5,loading6);
handleBtnClick(btn2,loading7,loading8,loading9);
handleBtnClick(btn3,loading10,loading11,loading12);
handleBtnClick(btn4,loading13,loading14,loading15);

