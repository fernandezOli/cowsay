
const information = require("./information");
const cowsay = require("cowsay");

console.log(cowsay.say({
    text : "Salut, je suis " + information.name + " du campus " + information.campus,
    e : "oO",
    T : "U "
}));
