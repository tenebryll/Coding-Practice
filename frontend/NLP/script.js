var highmem_enabled = true;
var lowmem_enabled = true;
var debug_1 = false;
var debug_2 = false;
function exe() {
  //everything executed on button press
  nlp();
  send_lowmem();
  send_highmem();
  clear_input();
}
function clear_input() {
  document.getElementById("inp").value = "";
}
function send_lowmem() {
  //sends input to low memory
  if (lowmem_enabled === true) {
    document.getElementById("lowmem1").innerText = "Low Memory:";
    let input = document.getElementById("inp").value;
    document.getElementById("lowmem").innerText = input;
  }
}
var mem_count = 1;
function send_highmem() {
  //sends input to high memory.
  if (highmem_enabled === true) {
    document.getElementById("highmem").innerText = "High Memory:";
    let input = document.getElementById("inp").value;
    const mem = document.createElement("p");
    mem.innerText = `${mem_count}. You:  ${input}`;
    mem.setAttribute("id", "mem_text");
    document.body.appendChild(mem);
    ++mem_count;
  }
}
function keypart() {
  document.addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
      //check if enter key pressed
      event.preventDefault(); //prevents default function
      exe();
    }
    if (event.keyCode === 9) {
      //checks if tab is pressed
      event.preventDefault(); //prevents from selecting everything on tab press
      document.getElementById("inp").focus();
    }
  });
}
keypart();
function nlp() {
  let input = document.getElementById("inp").value;
  let token = input
    .toLowerCase()
    .split(" ")
    .toString()
    .replace(/;|&|!|@|~|_|<|>|\?|\.|\//g, "")
    .split(" ")
    .filter((output) => output !== " ")
    .toString()
    .replace(/,,/g, " ")
    .replace(/,/g, " ")
    .split(" ");
  function lemmatize(x) {
    return x
      .replace("is", "iss")
      .replace(/'re$/, " ")
      .replace(/n't/g, ":not")
      .replace(/'d$/, " ")
      .replace(/'ve$/, " ")
      .replace(/'ll$/, " ")
      .replace(/ality$/, "y")
      .replace(/ilities$/, "e")
      .replace(/ional$/, " ")
      .replace(/ence$/, "e")
      .replace(/ance$/, "e")
      .replace(/iness$/, " ")
      .replace(/ingly$/, "y")
      .replace(/able$/, "e")
      .replace(/tive$/, "e")
      .replace(/nary$/, "y")
      .replace(/ion$/, " ")
      .replace(/ties$/, "e")
      .replace(/ing$/, " ")
      .replace(/ive$/, "e")
      .replace(/ism$/, " ")
      .replace(/ess$/, "e")
      .replace(/ors$/, " ")
      .replace(/'s$/, " ")
      .replace(/ies$/, "y")
      .replace(/ous$/, " ")
      .replace(/en$/, "e")
      .replace(/es$/, "e")
      .replace(/ly$/, "y")
      .replace(/s$/, " ")
      .replace("", " ")
      .split(" ")
      .filter((v) => v !== "") //removes spaces
      .toString();
  }
  var result = token.map(lemmatize);
  if (debug_1 === true) {
    console.log(result);
  }
  async function fet() {
    let x = await fetch("./data.json"); //gets json
    let y = await x.text(); //converts to text
    const bow = JSON.parse(y);
    //Keys and subkeys counter
    var keys_count = Object.keys(bow).length;
    var keys = Object.keys(bow).map(function (key) {
      return bow[key];
    });
    var subkeys = [];
    for (let x = 0; x < keys_count; x++) {
      let str_keys = String(keys[x]);
      let key_split = str_keys.split(",");
      subkeys.push(key_split);
    }
    let substr = String(Object.values(keys)); //converts to string
    var subkeys_count = substr.split(",").length; //gets length
    //FIND MOSTUSED WORDS//
    //checks for first item in list
    for (let x = 0; x < subkeys.length; x++) {
      let exist = subkeys[x].includes(result[x]);
      if (exist === true) {
        console.log(`Hit with ${result[x]} at ${x}`);
      } else {
        console.log(`miss with ${result[x]} at ${x}`);
        console.log(subkeys[x]);
      }
    }

    if (debug_2 === true) {
      console.log(`Key Count:${keys_count}`);
      console.log(`Subkey Count:${subkeys_count}`);
      console.log(`Sub keys:\n(${subkeys})`);
    }
  }
  fet();
}

/* function response(x) {
  const res = document.createElement("p");
  res.innerText = `Jimmy: ${x}`;
  res.setAttribute("id", "Jimmy_text");
  document.body.appendChild(res);
}
function rand_select(x) {
  return x[Math.floor(Math.random() * x.length)];
}
*/
