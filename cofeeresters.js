let elDiv = document.querySelectorAll(".form__label")


// for (let i = 0; i < bttm.length; i++) {
//   bttm.addEventListener("click", function() {
//     bttm[i].classList.toggle("btn--style")
//   });

// }

let form = document.querySelector(".form")
form.addEventListener("submit", function(e) {
e.preventDefault();

})

let formUl = document.querySelector(".form__ul")
let ff = document.querySelectorAll(".form__label-main")


formUl.addEventListener("click", function(event) {
  let elLi = event.target.closest(".form__label")
  let  elSpan =  elLi.querySelector(".form__label-main")
  elSpan.classList.toggle("btn--style")
  
})

let forms = document.querySelector("#form__inp15")
let forms2 = document.querySelector("#form__inp14")
let forms3 = document.querySelector("#form__inp13")

let wrapper = document.querySelector(".spn5")
let wrapper2 = document.querySelector(".spn4")
let wrapper3 = document.querySelector(".spn3")
let wrapper4 = document.querySelector(".spn2")
let wrapper5 = document.querySelector(".spn1")

form.addEventListener("change", function(event) {
     
  if(event.target.name == "radio") {
    wrapper5.textContent = event.target.value
  }else if(event.target.name == "dark"){
    wrapper4.textContent = event.target.value
  }else if(event.target.name == "white"){
    wrapper3.textContent = event.target.value
  }else if(event.target.name === "red"){
    wrapper2.textContent = event.target.value
  }else{
    wrapper.textContent = event.target.value
  }
 
})


// let wrapper = document.querySelector(".spn5")

// function updateWrapperContent(event) {
//   wrapper.textContent = event.target.value;
// }

forms.addEventListener("click", updateWrapperContent);
forms2.addEventListener("click", updateWrapperContent);
forms3.addEventListener("click", updateWrapperContent);


let forms4 = document.querySelector("#form__inp12")
let forms5 = document.querySelector("#form__inp11")
let forms6 = document.querySelector("#form__inp10")


// function updateWrapperContent2(event) {
//   wrapper2.textContent = event.target.value;
// }
forms4.addEventListener("click", updateWrapperContent2);
forms5.addEventListener("click", updateWrapperContent2);
forms6.addEventListener("click", updateWrapperContent2);



let forms7 = document.querySelector("#form__inp9")
let forms8 = document.querySelector("#form__inp8")
let forms9 = document.querySelector("#form__inp7")


function updateWrapperContent3(event) {
  wrapper3.textContent = event.target.value;
}
forms7.addEventListener("click", updateWrapperContent3);
forms8.addEventListener("click", updateWrapperContent3);
forms9.addEventListener("click", updateWrapperContent3);


let forms10 = document.querySelector("#form__inp6")
let forms11 = document.querySelector("#form__inp5")
let forms12 = document.querySelector("#form__inp4")


function updateWrapperContent4(event) {
  wrapper4.textContent = event.target.value;
}
forms10.addEventListener("click", updateWrapperContent4);
forms11.addEventListener("click", updateWrapperContent4);
forms12.addEventListener("click", updateWrapperContent4);


let forms13 = document.querySelector("#form__inp3")
let forms14 = document.querySelector("#form__inp2")
let forms15 = document.querySelector("#form__inp")


function updateWrapperContent5(event) {
  wrapper5.textContent = event.target.value;
}
forms13.addEventListener("click", updateWrapperContent5);
forms14.addEventListener("click", updateWrapperContent5);
forms15.addEventListener("click", updateWrapperContent5);

