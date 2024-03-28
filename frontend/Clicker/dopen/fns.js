/* LLAMA COIN */
var llama = 0;
var number = 0;
//Button Upgrade
var buttonUpgrade = 0;
var displayPrice = 10;
//Coin Upgrade
var displayPrice2 = 10;
//Auto Clicker Upgrade

var displayPrice3 = 10000;
var autoClicker = 0;

var main2 = new Audio("https://79od7v.csb.app/depen/music/gamemusic.wav");
var main = new Audio("https://79od7v.csb.app/depen/music/main.mp3");
var click = new Audio("https://79od7v.csb.app/depen/music/clickysdfges.mp3");
var error = new Audio("https://79od7v.csb.app/depen/music/error.mp3");
var llama1 = new Audio("https://snj2xy.csb.app/depen/music/boss1.mp3");
var llama12 = new Audio("https://79od7v.csb.app/depen/music/boss1string.mp3");
var cookie = document.cookie;

window.setInterval(function audio() {
  if (number < 5120) {
    main.play();
  } else {
    main.pause();
  }
});

window.setInterval(function audio() {
  if (number >= 5121) {
    main.pause();
    main2.play();
  }
});

window.setInterval(function audio() {
  if (number >= 1310720) {
    main2.pause();
    llama12.play();
  }
});

window.setInterval(function audio() {
  if (number >= 2621440) {
    llama12.pause();
    llama1.play();
  }
});

window.setInterval(function foot() {
  llama++;
  document.getElementById("coins").innerHTML = llama;
  foot.textContent = llama.toString();
}, 2500);

/* LLAMA COIN END */
/* LLAMA COIN */
var number = 0;
//Button Upgrade
var buttonUpgrade = 0;
//Coin Upgrade
//Auto Clicker Upgrade
var autoClicker = 0;

function addp(point) {
  number++;
  click.play();
  number = number + buttonUpgrade + autoClicker;
  /*           Levels            */
  if (number >= 10) fn2(); /* level 2 */
  point.textContent = number.toString();

  if (number >= 20) fn3(); /* level 3 */
  point.textContent = number.toString();

  if (number >= 40) fn4(); /* level 4 */
  point.textContent = number.toString();

  if (number >= 80) fn5(); /* level 5 */
  point.textContent = number.toString();

  if (number >= 160) fn6(); /* level 6 */
  point.textContent = number.toString();

  if (number >= 320) fn7(); /* level 7 */
  point.textContent = number.toString();

  if (number >= 640) fn8(); /* level 8 */
  point.textContent = number.toString();

  if (number >= 1280) fn9(); /* level 9 */
  point.textContent = number.toString();

  if (number >= 2560) fn10(); /* level 10 */
  point.textContent = number.toString();

  if (number >= 5120) fn11(); /* level 11 */
  point.textContent = number.toString();

  if (number >= 10240) fn12(); /* level 12 */
  point.textContent = number.toString();

  if (number >= 20480) fn13(); /* level 13 */
  point.textContent = number.toString();

  if (number >= 40960) fn14(); /* level 14 */
  point.textContent = number.toString();

  if (number >= 81920) fn15(); /* level 15 */
  point.textContent = number.toString();

  if (number >= 163840) fn16(); /* level 16 */
  point.textContent = number.toString();

  if (number >= 327680) fn17(); /* level 17 */
  point.textContent = number.toString();

  if (number >= 655360) fn18(); /* level 18 */
  point.textContent = number.toString();

  if (number >= 1310720) fn19(); /* level 19 */
  point.textContent = number.toString();

  if (number >= 2621440) fnb1(); /* level 20 */
  point.textContent = number.toString();
}

/*            Levels    END        */

/*         Functions          */
function fn2() {
  /* next level 3 */
  document.getElementById("level").innerHTML = "Level 2";
  document.getElementById("xp").innerHTML = "20";
  document.getElementById("square").style.backgroundColor = "yellow";
}

function fn3() {
  /* next level 4 */
  document.getElementById("level").innerHTML = "Level 3";
  document.getElementById("xp").innerHTML = "40";
  document.getElementById("square").style.backgroundColor = "orange";
}

function fn4() {
  /* next level 5 */
  document.getElementById("level").innerHTML = "Level 4";
  document.getElementById("xp").innerHTML = "80";
  document.getElementById("square").style.backgroundColor = "pink";
}

function fn5() {
  /* next level 6 */
  document.getElementById("level").innerHTML = "Level 5";
  document.getElementById("xp").innerHTML = "160";
  document.getElementById("square").style.backgroundColor = "red";
}

function fn6() {
  /* next level 7 */
  document.getElementById("level").innerHTML = "Level 6";
  document.getElementById("xp").innerHTML = "320";
  document.getElementById("square").style.backgroundColor = "blue";
}

function fn7() {
  /* next level 8 */
  document.getElementById("level").innerHTML = "Level 7";
  document.getElementById("xp").innerHTML = "640";
  document.getElementById("square").style.backgroundColor = "lime";
}

function fn8() {
  /* next level 9 */
  document.getElementById("level").innerHTML = "Level 8";
  document.getElementById("xp").innerHTML = "1280";
  document.getElementById("square").style.backgroundColor = "green";
}

function fn9() {
  /* next level 10 */
  document.getElementById("level").innerHTML = "Level 9";
  document.getElementById("xp").innerHTML = "2560";
  document.getElementById("square").style.backgroundColor = "magenta";
}
//Boss Level
function fn10() {
  /* next level 11 */
  document.getElementById("level").innerHTML = "level 10";
  document.getElementById("xp").innerHTML = "5120";
  document.getElementById("square").style.backgroundColor = "purple";
}

function fn11() {
  /* next level 12 */
  document.getElementById("level").innerHTML = "Level 11";
  document.getElementById("xp").innerHTML = "10240";
  document.getElementById("square").style.backgroundColor = "cyan";
}

function fn12() {
  /* next level 13 */
  document.getElementById("level").innerHTML = "Level 12";
  document.getElementById("xp").innerHTML = "20480";
  document.getElementById("square").style.backgroundColor = "salmon";
}

function fn13() {
  /* next level 14 */
  document.getElementById("level").innerHTML = "Level 13";
  document.getElementById("xp").innerHTML = "40960";
  document.getElementById("square").style.backgroundColor = "darkred";
}

function fn14() {
  /* next level 15 */
  document.getElementById("level").innerHTML = "Level 14";
  document.getElementById("xp").innerHTML = "81920";
  document.getElementById("square").style.backgroundColor = "seagreen";
}

function fn15() {
  /* next level 16 */
  document.getElementById("level").innerHTML = "Level 15";
  document.getElementById("xp").innerHTML = "163840";
  document.getElementById("square").style.backgroundColor = "gold";
}

function fn16() {
  /* next level 16 */
  document.getElementById("level").innerHTML = "Level 16";
  document.getElementById("xp").innerHTML = "327680";
  document.getElementById("square").style.backgroundColor = "silver";
}

function fn17() {
  /* next level 17 */
  document.getElementById("level").innerHTML = "Level 17";
  document.getElementById("xp").innerHTML = "655360";
  document.getElementById("square").style.backgroundColor = "sienna";
}

function fn18() {
  /* next level 18 */
  document.getElementById("level").innerHTML = "Level 18";
  document.getElementById("xp").innerHTML = "1310720";
  document.getElementById("square").style.backgroundColor = "coral";
}

function fn19() {
  /* next level 19 */
  document.getElementById("level").innerHTML = "Level 19";
  document.getElementById("xp").innerHTML = "2621440";
  document.getElementById("square").style.backgroundColor = "khaki";
  document.getElementById("level").innerHTML = "Mr.Smiley";
  document.getElementById("xp").innerHTML = "StinkerWinker";
  document.getElementById("square").style.height = "240px";
  document.getElementById("square").style.width = "215px";
  document.getElementById("square").style.backgroundPosition = "center";
  document.getElementById("square").style.backgroundColor = "lightgray";
  document.getElementById("square").style.backgroundImage =
    "url('https://snj2xy.csb.app/depen/alpaca3.png')";
}

function fnb1() {
  /* next level 20 */
  document.getElementById("level").innerHTML = "Boss";
  document.getElementById("xp").innerHTML = "Carl The Llama";
  document.getElementById("square").style.height = "240px";
  document.getElementById("square").style.width = "215px";
  document.getElementById("square").style.backgroundColor = "lightgray";
  document.getElementById("square").style.backgroundImage =
    "url('https://snj2xy.csb.app/depen/boss1.jpeg')";
  document.body.style.backgroundImage =
    "url('https://snj2xy.csb.app/depen/llama1.gif')";
}

/*        Functions  END    */

/* cannot afford */
function upcheck() {
  if (llama > displayPrice2) {
    document.getElementById("cup1").style.backgroundColor = "royalblue";
    document.getElementById("cup1").style.color = "white";
  } else {
    document.getElementById("cup1").style.backgroundColor = "lightgray";
    document.getElementById("cup1").style.color = "black";
  }

  if (llama > displayPrice3) {
    document.getElementById("chup1").style.backgroundColor = "royalblue";
    document.getElementById("chup1").style.color = "white";
  } else {
    document.getElementById("chup1").style.backgroundColor = "lightgray";
    document.getElementById("chup1").style.color = "black";
  }
  if (llama > displayPrice) {
    document.getElementById("bup1").style.backgroundColor = "royalblue";
    document.getElementById("bup1").style.color = "white";
  } else {
    document.getElementById("bup1").style.backgroundColor = "lightgray";
    document.getElementById("bup1").style.color = "black";
  }
}

/* cannot afford  END */

/* Upgrades */
function butp1() {
  if (llama < displayPrice2) {
    error.play();
  }
  if (llama >= displayPrice) {
    llama -= displayPrice; //Subtracts llama coins from price
    buttonUpgrade += 1; //Increase clicks to by 1 but doesn't really work
    displayPrice = Math.round(displayPrice * 2.5); //Multiplies price by 2.5 each upgrade
    document.getElementById("coins").innerHTML = llama;
    document.getElementById("displayPrice").innerHTML = displayPrice;
    document.getElementById("point").innerHTML = number;
  }
}

/* Coin Upgrade */

function butp2() {
  if (llama < displayPrice2) {
    error.play();
  }
  if (llama >= displayPrice2) {
    llama -= displayPrice2; //Subtracts llama coins from price
    window.setInterval(function foot() {
      llama++;
      document.getElementById("coins").innerHTML = llama;
    }, 2500 / 1.5); //Divides time it takes to get coin by 1.5 each time upgraded
    displayPrice2 = Math.round(displayPrice2 * 3.5); //Multiples price by 3.5 each time upgraded Math.round to make it a whole number
    document.getElementById("coins").innerHTML = llama;
    document.getElementById("displayPrice2").innerHTML = displayPrice2;
  }
}

//Auto Clicker
function butp3() {
  if (llama < displayPrice2) {
    error.play();
  }
  if (llama >= displayPrice3) {
    llama -= displayPrice3;
    window.setInterval(function foot() {
      number += 1;
      document.getElementById("point").innerHTML = number;
    }, 500 / 5);
    displayPrice3 = Math.round(displayPrice3 * 7.5);
    document.getElementById("coins").innerHTML = llama;
    document.getElementById("displayPrice3").innerHTML = displayPrice3;
    document.getElementById("point").innerHTML = number;
  }
}
/* Upgrades END */

/* coin save */
let cookie1 = document.cookie;
document.addEventListener("keydown", function (event) {
  if (event.altKey && event.key === "s") {
    document.cookie = llama.toString();
    alert("saved");
  }
});
/* Coin save END */

/* Coin load */
document.addEventListener("keydown", function (event) {
  if (event.altKey && event.key === "x") {
    llama = cookie;
    alert("Loaded");
  }
});
