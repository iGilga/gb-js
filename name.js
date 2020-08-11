var arg = process.argv.slice(2);

var login = {
  name:"",
  admin:""
};

console.log(login);

login.name = arg;

console.log(login);

login.admin = login.name;

console.log(login);
