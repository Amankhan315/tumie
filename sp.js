let list1 = document.querySelectorAll(".list")
// console.log(list1);
let drop1 = document.querySelectorAll(".drop")
let bigcircle = document.querySelector(".bigcircle")
// console.log(drop1);

for (let i = 0; i < list1.length; i++) {

    list1[i].addEventListener("mouseenter", function () {

        if (drop1[i].classList.contains("visi")) {

            drop1[i].classList.remove("visi");
        }
        drop1[i].classList.add("visi");

        list1[i].addEventListener("mouseleave", function () {

            for (let w = 0; w < drop1.length; w++) {

                drop1[w].classList.remove("visi")
            }


        })

    })

}
let searchbox = document.getElementsByClassName("searchbox")[0]
function abc() {

    // console.log("clicking");
    searchbox.classList.add("show")
}
let iconbox2 = document.getElementsByClassName("iconbox2")[0]
function abc1() {

    searchbox.classList.remove("show")

}
let sidebar = document.getElementsByClassName("sidebar")[0]
function click1() {

    sidebar.classList.add("visi2")

}
let iconbox4 = document.getElementsByClassName("iconbox4")[0]
function click2() {

    sidebar.classList.remove("visi2")
}
let photobox2 = document.getElementsByClassName("photobox2")[0]
let imgbox = document.querySelector(".imgbox")
let box4 = document.querySelector(".box4")
let tex = document.querySelector(".tex")
let tex2 = document.querySelector(".tex2")
let pa = document.querySelector(".pa")
let bts = document.querySelector(".bts")
// console.log(photobox2);
function go() {
    photobox2.classList.toggle("next")
    bigcircle.classList.toggle("animate")
    imgbox.classList.toggle("mg")
    box4.classList.toggle("up")
    tex.classList.toggle("tex")
    tex2.classList.toggle("tex2")
    pa.classList.toggle("pa")
    bts.classList.toggle("bts")

}
let photobox = document.getElementsByClassName("photobox")[0]
function go1() {

    photobox2.classList.toggle("next")
}

let list3 = document.querySelectorAll(".list3")
let boxe = document.querySelectorAll(".boxe")

list3.forEach(function (item) {

    item.addEventListener("click", function () {

        for (let i = 0; i < list3.length; i++) {
            // console.log(list3);
            list3[i].classList.remove("ho")
        }

        this.classList.add("ho")

        let getid = this.id
        // console.log(getid);
        removing()
        setTimeout(() => {
            boxe.forEach(function (items) {
                if (items.classList.contains(getid)) {
                    items.classList.add("act")
                }
                else {
                    items.classList.remove("act")
                }
            })
        }, 10)
    })
})


function removing() {
    boxe.forEach((items) => {
        items.classList.remove("act")
    })
}

let bigdiv = document.getElementsByClassName("bigdiv")[0]
let bigdivs = document.getElementsByClassName("bigdivs")[0]

function showme() {
    bigdiv.classList.add("visies")
}
function showme2() {
    bigdivs.classList.add("visies")
}
let crossbar2 = document.getElementsByClassName("crossbar2")[0]

function back() {

    bigdiv.classList.remove("visies")
    bigshow.classList.remove("open")
}
let boxe4 = document.getElementsByClassName("boxe4")[0]

function showme3() {
    bigdivs.classList.remove("visies")
    bigshows.classList.remove("open")
}
let bigshow = document.getElementsByClassName("bigshow")[0]
let bigshows = document.getElementsByClassName("bigshows")[0]

function poups() {

    bigshow.classList.add("open")
    
}
function poup() {
    bigshows.classList.add("open")
}

setInterval(run, 1000)

function run() {


    // s.innerHTML = 

    let date = new Date()

    console.log(date, "Date");

    let hr = date.getHours()

    console.log(hr);

    let min = date.getMinutes()

    console.log(min);

    let sec = date.getSeconds()

    console.log(sec);

    let h = document.querySelector(".hours")
    console.log(h);
    let m = document.querySelector(".minutes")
    console.log(m);
    let s = document.querySelector(".seconds")
    console.log(s);
   



    h.innerHTML = hr
    m.innerHTML = min
    s.innerHTML = sec

}
F       
