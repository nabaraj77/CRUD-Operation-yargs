const fs = require("fs");

const add = (name, email, encPassword, address1) => {
  let addedName = [];

  try {
    addedName = JSON.parse(fs.readFileSync("addedName.json"));
  } catch (error) {
    //console.log(error);
  }
  let index = addedName.findIndex((x) => x.email === email);
  if (index === -1) {
    addedName.push({ name, email, encPassword, address1 });
    fs.writeFileSync("addedName.json", JSON.stringify(addedName));
    console.log(
      `Account created with the following details => Name:${name} Email:${email} Address:${address1}`
    );
  } else {
    console.log("Email Already Exists. Try again with the new email.");
  }
};

const remove = (email) => {
  let addedName = [];

  try {
    addedName = JSON.parse(fs.readFileSync("addedName.json"));
  } catch (error) {
    //console.log(error);
  }
  const filteredList = addedName.filter((x) => x.email != email);
  //console.log(filteredList);
  fs.writeFileSync("addedName.json", JSON.stringify(filteredList));
};

const list = () => {
  let addedName = [];

  try {
    addedName = JSON.parse(fs.readFileSync("addedName.json"));
  } catch (error) {
    //console.log(error);
  }
  count = 0;
  addedName.forEach((element) => {
    count++;
    console.log(
      ` SN:${count} Name:${element.name}  Email:${element.email}  Address:${element.address1}`
    );
  });
};

const update = (name, email, address1) => {
  let addedName = [];

  try {
    addedName = JSON.parse(fs.readFileSync("addedName.json"));
  } catch (error) {
    //console.log(error);
  }
  let index = addedName.findIndex((x) => x.email === email);
  if (index === -1) {
    console.log("No such email found. Please Enter the correct email.");
  } else {
    addedName[index].name = name;
    addedName[index].address1 = address1;
  }
  fs.writeFileSync("addedName.json", JSON.stringify(addedName));
};
module.exports = {
  add,
  remove,
  list,
  update,
};
