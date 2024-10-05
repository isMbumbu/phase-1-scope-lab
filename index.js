// Write your solution in this file!
var customerName='bob';
function upperCaseCustomerName() {
    // Modify the global variable customerName
    customerName = customerName.toUpperCase();
}

function setBestCustomer(){
    bestCustomer='not bob';
}
function overwriteBestCustomer(){
    bestCustomer='maybe bob';
}
const leastFavoriteCustomer='dere';
function changeLeastFavoriteCustomer(){
    return leastFavoriteCustomer='key';
}