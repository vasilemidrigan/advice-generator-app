"use strict";

// Fetching Advice app

// Variables
const responseField = document.querySelector(".response-field");
const adviceId = document.querySelector(".advice__id");
const adviceTxt = document.querySelector(".advice__txt");
const btn = document.querySelector(".button");
const url = "https://api.adviceslip.com/advice";

const getData = () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const id = data.slip.id;
      const advice = data.slip.advice;

      adviceId.textContent = `ADVICE # ${id}`;
      adviceTxt.textContent = `"${advice}"`;
    });
};

getData();

btn.addEventListener("click", getData);
