/** Helper Methods are defined here
Helper Methods are general purpose methods used by controllers to perform a specific task */

let checkPasswordValidity = (password) => {
    let regex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
    return regex.test(password);
}

module.exports = {
    checkPasswordValidity
}