app.factory('portfolioService', 
  [
  function() {


  /*

  // transactions = {
    "date" : [{stock objects with symbol,price, quantity, and action}

  }

  */

  var _transactions = {};
  var _balance = {};



  var stub = {};

  stub.addTransaction = function(stockObject) {
    var newStock = {
      symbol: stockObject.symbol,
      price: stockObject.price,
      quantity: stockObject.quantity,
      action: stockObject.action
    };
    if (_transactions[stockObject.date]) {
      _transactions[stockObject.date].push(newStock);
    } else {
    _transactions[stockObject.date] = [newStock];
    }
  }

  stub.getTransactions = function () {
    return _transactions;
  }  

  return stub;
}]);