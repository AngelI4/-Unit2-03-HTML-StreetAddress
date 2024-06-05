// Copyright (c) 2024 Angel All rights reseved
// 
// Created by: Angel
// Created on: May 2024
// This file contains the JS functions for index.html

function enetervClicked() { 
  // this function gets user street number and street name and shows it back to user

  // get street name from text field
  let streetName = document.getElementById("street-name").value
  // get street number from text field and cast it to the integer
  let streetNumber = parseInt(document.getElementById("street-number").value)

  // display street name and street number back to user
  document.getElementById("user-info").innerHTML = "Your street name is " + streetName + " and your street number is ."
}
