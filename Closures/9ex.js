function IndiaDevPassword() {
  var password = 'abcd1234!@#$';
  return {
    guessPassword: function (passwordGuess) {
      if (passwordGuess === password) {
        return true;
      } else {
        return false;
      }
    }
  }
}

 var password = IndiaDevPassword();
 console.log(password.guessPassword("I don't know the pwd")); // false
 console.log(password.guessPassword("abcd1234!@#$")); // true