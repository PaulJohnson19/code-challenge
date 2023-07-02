const findSum = function(array) {
  // your code here - don't forget to return a number!
    return array.reduce((accumulator, current) => {
    return accumulator + current;
}, 0);
};

const findFrequency = function(array) {
  // your code here - don't forget to return an object!
      let occurr = {};
    var most = null;
    var least = null;
    
    for (let i = 0; i < array.length; i++) {
      let element = array[i];
      occurr[element] = (occurr[element] || 0) + 1;
    }
    for (let element in occurr) {
      if (most === null || occurr[element] > occurr[most]) {
        most = element;
      }
  
      if (least === null || occurr[element] < occurr[least]) {
        least = element;
      }
    }
    return {most: most, least: least};
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
      let score = 0;
    var letterPoint = {
      'a': 1, 'e': 1, 'i': 1, 'o': 1, 'u': 1, 'l': 1, 
      'n': 1, 'r': 1, 's': 1, 't': 1, 'd': 2, 
      'g': 2, 'b': 3, 'c': 3, 'm': 3, 'p': 3,
      'f': 4, 'h': 4, 'v': 4, 'w': 4, 'y': 4,
      'k': 5, 'j': 8, 'x': 8, 'q': 10,'z': 10
    };
  
    for (let i = 0; i < str.length; i++) {
      score += letterPoint[str[i]];
    }
  
    return score;
};
