// Copyright (c) 2023 Shyla Oommen All rights reserved
//
// Created by: Shyla Oommen
// Created on: May 2023
// This file contains the JS functions for index.html

"use strict";

// This function allows for a specific output when the user input text field is left empty
function isEmpty(str) {
  return !str || 0 === str.length;
}

/**
 * This function generates a list of numbers starting from the min given to the max given.
 */

function DisplayListNumbers () {
  // initializing variables user min, max, and list and error Response as empty string for formatting the list
  let userMin = parseInt(document.getElementById('min').value)
  let userMax = parseInt(document.getElementById('max').value)
  let list = "";
  let response = "";
  // response for when the min is greater than the max
  if ((isEmpty(userMin)) || (isEmpty(userMax))) {
    response = "You have not entered a minimum and/or a maximum number. Please enter one or both of the following."
  }
  else if (userMin > userMax) {
    response = "ERROR: You entered a minimum value that is greater than your maximum value. Try a smaller minimum."
  }
  // else to start the loop
  else {
    // while loop to display the numbers from min to max
    while (userMin <= userMax) {
      // build the list by adding the "list" and min with a line break each time
      list = list + userMin + "<br>"
      // increment min by 1 each time
      userMin = userMin + 1
      // re-assign response to how it should correctly be formatted
      response = "Your list is as follows: <br>" + list
    }
  }
    
  // display list to user
  document.getElementById('results').innerHTML = response
}
