const name = document.getElementById("name");
const age = document.getElementById("age");
const married = document.getElementById("married");
const paragName = document.querySelector(".parag__name");
const paragAge = document.querySelector(".parag__age");
const paragMarried = document.querySelector(".parag__married");

const submit = document.getElementById("submit");
const cancel = document.getElementById("cancel");
const result = document.querySelector(".result");

function nameWords() {
  const nameValue = document.getElementById("name").value;
  const paragName1 = "🎧 Name:";
  const paragName2 = nameValue;
  paragName.innerText = paragName1 + " " + paragName2;
}

function ageNumber() {
  const ageValue = age.value;
  const ageValueDefault = "😉 Age:";
  const ageValueNumber = ageValue;
  paragAge.innerText = ageValueDefault + " " + ageValueNumber;
}

function marriedQuestion() {
  const marriedValue = married.value;
  const marriedTextDefault = "🥰 Is married? :";
  const marriedResult = marriedValue;
  paragMarried.innerText = marriedTextDefault + "  " + marriedResult;
}

submit.addEventListener("click", function () {
  result.innerText = "Successfull send!✅";
});

cancel.addEventListener("click", function () {
  name.value = "";
  age.value = "";
  married.value = "";
  result.innerText = "Unsuccessfull, try afain!😢";
});

/* Start Loader JS */
const loader = document.querySelector(".loader-container");

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.zIndex = "-1";
  }, 3000);
});

/* End Loader JS */
