const yargs = require("yargs");
const commands = require("./commands");

//For Encryption
const crypto = require("cryptr");
const cryptr = new crypto("Nabaraj");

//Encryption Completed

let command = yargs.argv._[0];
let name = yargs.argv.name;
let email = yargs.argv.email;
let password = yargs.argv.password;
let encPassword = cryptr.encrypt(password);
let address1 = yargs.argv.address1;

if (command === "add") {
  if (name && email && encPassword && address1) {
    commands.add(name, email, encPassword, address1);
  }
} else if (command === "list") {
  commands.list();
} else if (command === "update") {
  if (email) {
    commands.update(name, email, address1);
  }
} else if (command === "remove") {
  if (email) {
    commands.remove(email);
  }
} else {
  console.log(
    "You Entered the command that the file does not allows you to do."
  );
}
