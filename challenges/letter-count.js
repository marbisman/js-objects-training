/*

  Create a function `letterCount` that accepts a string, and finds the number of times each letter
  occurs in the string. For example, given the word "apple", letterCount("apple") should count all
  occurrences of the letters "a", "p", "l" and "e" and then return the following output:

  ```javascript
  {
    "a": 1,
    "p": 2,
    "l": 1,
    "e": 1
  }
  ```
*/


function letterCount(word){
  var letters = new Object;
  for (i=0; i < word.length; i++){
    var l = word.charAt(i);
    letters[l] = (isNan(letters[l]) ? 1: letters [l] +1);
  }
  //NaN represents not a number - when you're trying to count something that is not a number.
  //? operator takes three operands and looks at the condition. condition ? experience 1 : experience 2
  for (key in letters){
    console.log (key + ' : ' + letters[key]);
  }
}

letterCount("hellothere");
/*
  Bonuses
  - Make sure that lower case letters and upper case letters count for the same character.
  - Ignore spaces, special characters, and punctuation.
  - Instead of just counting letters, calculate their percent-based frequency.
    See: http://www.math.cornell.edu/~mec/2003-2004/cryptography/subs/frequencies.html

    ```javascript
    {
      "a": 0.2, // percent
      "p": 0.4,
      "l": 0.2,
      "e": 0.2
    }
    ```

*/

// YOUR CODE HERE
