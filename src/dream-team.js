const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let arr = [];
  if(Array.isArray(members)) {
    members.forEach(e => {
      if(typeof e == 'string'){
        let letter = e.trim()[0];
        arr.push(letter.toUpperCase());
      }
    })
    return arr.sort().join('');
  } else {
    return false;
  }
};