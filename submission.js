const findSum = function(array) {
  // your code here - don't forget to return a number!
    return array.reduce((accumulator, current) => {
    return accumulator + current;
}, 0);
};

const findFrequency = function(array) {
  // your code here - don't forget to return an object!
};

const isPalindrome = function(str) {
    // your code here - don't forget to return a boolean!
    var str = str.toLowerCase()
    var splitStr = str.split("")
    var backward = splitStr.reverse()
    var finished = backward.join("")
    
    if (str === finished) {
        return true
        
    } else {
        return false
        
    }
   
  };

const largestPair = function(array) {
  // your code here - don't forget to return a number!
     var notoriousBig = []
   array.forEach((number, i) => {
    if (i < array.length) {
      let product = number * array[i + 1];
      if (notoriousBig === [] || product > notoriousBig) {
          notoriousBig = product;
      }
    }
  });

  return notoriousBig;
};

const removeParenth = function(str) {
  // your code here - don't forget to return a string!
    return str.replace(/ *\([^)]*\) */g, "");
};

const scoreScrabble = function(str) {
  // your code here - don't forget to return a number!
};
