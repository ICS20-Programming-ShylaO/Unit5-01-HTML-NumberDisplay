// Copyright (c) 2023 Shyla Oommen All rights reserved
//
// Created by: Shyla Oommen
// Created on: May 2023
// This file contains the JS functions for index.html

"use strict";
/**
 * This function generates a list of numbers starting from the min given to the max given.
 */

function DisplayListNumbers () {
  // initializing variables user min, max, and list as empty string for formatting the list
  let userMin = parseInt(document.getElementById('min').value)
  let userMax = parseInt(document.getElementById('max').value)
  let list = "";
  // response for when the min is greater than the max
  if (userMin > userMax) {
    document.getElementById('results').innerHTML = "ERROR: You entered a minimum value that is greater than your maximum value. Try a smaller minimum."
    return;
  }
    
  // else to start the loop
  else {
    // while loop to display the numbers from min to max
    while (userMin <= userMax) {
      // build the list by adding the "list" and min with a line break each time
      list = list + userMin + "<br>"
      // increment min by 1 each time
      userMin = userMin + 1
    }
  }
    
  // display list to user
  document.getElementById('results').innerHTML = "Your list is as follows: <br>" + list
}
