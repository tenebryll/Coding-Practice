let invalc = document.cookie;
var inval = 0;
document.cookie = inval.toString();
function clear1() {
  document.getElementById("input1").value = null;
}
function keypart() {
  document.addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      exe1();
      clear1();
    }
  });
}
keypart();
function exe1() {
  var input = document.getElementById("input1").value;
  if (input === "help") {
    document.getElementById("output1").innerHTML = `
    [General Commands list]:
    <br/><br/><br />
    help - Provides a list of commands.
    <br /><br />
    cls - Clears console.
    <br /><br />
    credits - Lists the creators of Jimmy v2.
    <br /><br />
    clicker - Play clicker!
    <br /><br />
    cmdcount - Displays how many commands have been executed.
    <br /><br />
    rndnum: - Displays random number between 0 and choosen number.
    <br />
    (syntax: rndnum:10) -> (output: Result:6)
    <br /><br />
    webApp - Opens Jimmy as smaller new window.
    <br /><br />
    openUrl: - Opens url specified amount of times.
    <br />
    (syntax: openUrl:2 https://www.example.com) -> (output: opens url 2 times)
    <br /><br />
    color: - Changes color scheme of Jimmy.
    <br />
    (syntax: color:green purple blue brown orange) -> (output: Background:green | Output Background:purple | Output Border:blue | Input Background:brown | Input Border:orange)
    <br /><br />
    bin: - Encodes a number into binary.
    <br />
    (syntax: bin:45) -> (output: Result:101101)
    <br /><br />
    binD: - Decodes binary into a number.
    <br />
    (syntax: bin:101101) -> (output: Result:45)
    <br /><br />
    hex: - Encodes a number into hex.
    <br />
    (syntax: hex:45) -> (output: Result:2d)
    <br /><br />
    hexD - Decodes hex into a number.
    <br />
    (syntax: hexD:2d) -> (output: Result:45)
    <br /><br/><br />
    [Math commands]:
    <br /><br /><br />
    add: - Adds two numbers.
    <br />
    (syntax: add:1 2) -> (output: Result:3)
    <br /><br />
    sub: - Subtracts two numbers.
    <br />
    (syntax: sub:1 2) -> (output: Result:-1)
    <br /><br />
    mult: - Multiplies two numbers.
    <br />
    (syntax: mult:1 2) -> (output: Result:2)
    <br /><br />
    div - Divides two numbers.
    <br />
    (syntax: div:1 2) -> (output: Result:0.5)
    <br /><br />
    round: - Rounds a number to nearest whole.
    <br />
    (syntax: round:0.5) -> (output: Result:1)
    <br /><br />
    expo: - Simplify a number with an exponent.
    <br />
    (syntax: expo:10 2) -> (output: Result:100)
    <br /><br />
    sqrt: - Displays square root of given number.
    <br />
    (syntax: sqrt:64) -> (output: Result:8)
    <br /><br />
    cbrt: - Displays cubic root of given number.
    <br />
    (syntax: cbrt:64) -> (output: Result:4)
    <br /><br /><br />
    [APIs]:
    <br /><br /><br />
    ip: - Displays internet protocol's Geo location information.
    </br /></br />
    subdom: - Displays the subdomains of the given domain.
    </br /></br />
    header: - Displays the http header of given domain.
    </br /></br />
    dns: - Displays the domain name servers of the domain.


    
    `;
    inval += 1;
    document.cookie = inval.toString();
  }
  if (input === "cls") {
    document.getElementById("output1").innerHTML = ``;
    inval += 1;
    document.cookie = inval.toString();
  }
  if (input === "credits") {
    document.getElementById("output1").innerHTML = `
    Lead Developer: Milo Thompson
    <br />
    Website Designer: Camden Boudreaux
    <br />
    `;
    inval += 1;
    document.cookie = inval.toString();
  }
  if (input === "clicker") {
    window.open(
      "https://79od7v.csb.app/",
      "_blank",
      "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=yes, width=500, height=500"
    );
    inval += 1;
    document.cookie = inval.toString();
  }
  let check12 = input.includes("openUrl:");
  if (check12 === true) {
    let input2 = input.replace("openUrl:", "");
    let thing = input2.split(" ");
    let amt = thing[0];
    let url = thing[1];
    let amt2 = parseInt(amt);
    for (var i = 0; i < amt2; i++) {
      window.open(url);
    }
    inval += 1;
    document.cookie = inval.toString();
  }
  if (input === "cmdcount") {
    var commandcount = "Commands:" + inval;
    document.getElementById("output1").innerHTML = commandcount;
    inval += 1;
    document.cookie = inval.toString();
  }
  let check13 = input.includes("add:");
  if (check13 === true) {
    let input3 = input.replace("add:", "");
    let num2 = input3.split(" ");
    let fnum = num2[0];
    let snum = num2[1];
    let result1 = parseInt(fnum);
    let result2 = parseInt(snum);
    let result3 = result1 + result2;
    let result5 = "Result:" + result3;
    document.getElementById("output1").innerHTML = result5;
    inval += 1;
    document.cookie = inval.toString();
  }
  let check14 = input.includes("sub:");
  if (check14 === true) {
    let input3 = input.replace("sub:", "");
    let num2 = input3.split(" ");
    let fnum = num2[0];
    let snum = num2[1];
    let result1 = parseInt(fnum);
    let result2 = parseInt(snum);
    let result3 = result1 - result2;
    let result5 = "Result:" + result3;
    document.getElementById("output1").innerHTML = result5;
    inval += 1;
    document.cookie = inval.toString();
  }
  let check15 = input.includes("mult:");
  if (check15 === true) {
    let input3 = input.replace("mult:", "");
    let num2 = input3.split(" ");
    let fnum = num2[0];
    let snum = num2[1];
    let result1 = parseInt(fnum);
    let result2 = parseInt(snum);
    let result3 = result1 * result2;
    let result5 = "Result:" + result3;
    document.getElementById("output1").innerHTML = result5;
    inval += 1;
    document.cookie = inval.toString();
  }
  let check16 = input.includes("div:");
  if (check16 === true) {
    let input3 = input.replace("div:", "");
    let num2 = input3.split(" ");
    let fnum = num2[0];
    let snum = num2[1];
    let result1 = parseInt(fnum);
    let result2 = parseInt(snum);
    let result3 = result1 / result2;
    let result5 = "Result:" + result3;
    document.getElementById("output1").innerHTML = result5;
    inval += 1;
    document.cookie = inval.toString();
  }
  let check17 = input.includes("round:");
  if (check17 === true) {
    let input3 = input.replace("round:", "");
    let fnum = Math.round(input3);
    let result = "Result:" + fnum;
    document.getElementById("output1").innerHTML = result;

    inval += 1;
    document.cookie = inval.toString();
  }
  let check18 = input.includes("expo:");
  if (check18 === true) {
    let input3 = input.replace("expo:", "");
    let num2 = input3.split(" ");
    let fnum = num2[0];
    let snum = num2[1];
    let result1 = parseInt(fnum);
    let result2 = parseInt(snum);
    let result3 = Math.pow(result1, result2);
    let result5 = "Result:" + result3;
    document.getElementById("output1").innerHTML = result5;
    inval += 1;
    document.cookie = inval.toString();
  }
  let check19 = input.includes("sqrt:");
  if (check19 === true) {
    let input3 = input.replace("sqrt:", "");
    let fnum = Math.sqrt(input3);
    let result = "Result:" + fnum;
    document.getElementById("output1").innerHTML = result;
    inval += 1;
    document.cookie = inval.toString();
  }

  let check20 = input.includes("cbrt:");
  if (check20 === true) {
    let input3 = input.replace("cbrt:", "");
    let fnum = Math.cbrt(input3);
    let result = "Result:" + fnum;
    document.getElementById("output1").innerHTML = result;

    inval += 1;
    document.cookie = inval.toString();
  }
  let check21 = input.includes("bin:");
  if (check21 === true) {
    let input3 = input.replace("bin:", "");
    let fnum = Number(input3).toString(2);
    let result = "Result:" + fnum;
    document.getElementById("output1").innerHTML = result;

    inval += 1;
    document.cookie = inval.toString();
  }
  let check22 = input.includes("binD:");
  if (check22 === true) {
    let input3 = input.replace("binD:", "");
    let fnum = parseInt(input3, 2);
    let result = "Result:" + fnum;
    document.getElementById("output1").innerHTML = result;

    inval += 1;
    document.cookie = inval.toString();
  }
  let check23 = input.includes("hex:");
  if (check23 === true) {
    let input3 = input.replace("hex:", "");
    let input4 = parseInt(input3);
    let fnum = input4.toString(16);
    let result = "Result:" + fnum;
    document.getElementById("output1").innerHTML = result;
    inval += 1;
    document.cookie = inval.toString();
  }
  let check24 = input.includes("hexD:");
  if (check24 === true) {
    let input3 = input.replace("hexD:", "");
    let fnum = parseInt(input3, 16);
    let result = "Result:" + fnum;
    document.getElementById("output1").innerHTML = result;
    inval += 1;
    document.cookie = inval.toString();
  }
  if (input === "webApp") {
    window.open(
      "https://e5fd94.csb.app/",
      "_blank",
      "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=yes, width=350, height=500"
    );
    inval += 1;
    document.cookie = inval.toString();
  }
  let check25 = input.includes("rndnum:");
  if (check25 === true) {
    let input3 = input.replace("rndnum:", "");
    let num2 = input3.split(" ");
    let fnum = num2[0];
    let fnum1 = parseInt(fnum);
    fnum1 += 1;
    let rand = Math.floor(Math.random() * fnum1) + 1;
    let result = "Result:" + rand;
    document.getElementById("output1").innerHTML = result;
    inval += 1;
    document.cookie = inval.toString();
  }
  let check26 = input.includes("color:");
  if (check26 === true) {
    let input3 = input.replace("color:", "");
    let clr = input3.split(" ");
    let bclr = clr[0];
    let obclr = clr[1];
    let bdclr = clr[2];
    let ibclr = clr[3];
    let ibdclr = clr[4];
    document.body.style.backgroundColor = bclr;
    document.getElementById("output1").style.backgroundColor = obclr;
    document.getElementById("output1").style.borderColor = bdclr;
    document.getElementById("input1").style.backgroundColor = ibclr;
    document.getElementById("input1").style.borderColor = ibdclr;
    var thign1 = "Background:" + bclr;
    var thign2 = "Output Background:" + obclr;
    var thign3 = "Output Border:" + bdclr;
    var thign4 = "Input Background:" + ibclr;
    var thign5 = "Input Border:" + ibdclr;
    var thign =
      thign1 +
      " | " +
      thign2 +
      " | " +
      thign3 +
      " | " +
      thign4 +
      " | " +
      thign5;
    document.getElementById("output1").innerHTML = thign;
    inval += 1;
    document.cookie = inval.toString();
  }
  let check27 = input.includes("header:");
  if (check27 === true) {
    let input3 = input.replace("header:", "");
    let url = "https://api.hackertarget.com/httpheaders/?q=";
    let clr = input3.split(" ");
    let rdir = url + input3;
    window.open(rdir);
  }
  let check28 = input.includes("dns:");
  if (check28 === true) {
    let input3 = input.replace("dns:", "");
    let url = "https://api.hackertarget.com/dnslookup/?q="; //domain
    let clr = input3.split(" ");
    let rdir = url + input3;
    window.open(rdir);
  }
  let check29 = input.includes("subdom:");
  if (check29 === true) {
    let input3 = input.replace("subdom:", "");
    let url = "https://api.hackertarget.com/hostsearch/?q="; //domain
    let clr = input3.split(" ");
    let rdir = url + input3;
    window.open(rdir);
  }
  let check30 = input.includes("ip:");
  if (check30 === true) {
    let input3 = input.replace("ip:", "");
    let url = "https://api.hackertarget.com/ipgeo/?q=";
    let clr = input3.split(" ");
    let rdir = url + input3;
    window.open(rdir);
  }
}
