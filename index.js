const yargs = require("yargs");
const {hideBin} = require('yargs/helpers');
console.log('Current working directory:', process.cwd());
const contacts = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      return console.log(allContacts);

    case "get":
      const oneContacts = await contacts.getContactById(id);
      return console.log(oneContacts);

    case "add":
      const newContacts = await contacts.addContact({ name, email, phone });
      return console.log(newContacts);

    case "remove":
      const removeContact = await contacts.removeContact(id);
      return console.log(removeContact);

    case "updateById":
      const updateContacts = await contacts.updateById(id, {name, email, phone});
      return console.log(updateContacts);

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

const arr = hideBin(process.argv);
const {argv} = yargs(arr);
invokeAction(argv);