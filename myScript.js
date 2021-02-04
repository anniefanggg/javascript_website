myDiv = document.getElementById("myDiv");
console.log(myDiv);
// Create global array to hold multiple values.
var myJSON = {
  'fchoice': "",
  'schoice': "",
  'yes': yes.checked,
  'result': result.checked,
}

function myClick() {
  /*
    Parameters: None
    Returns: None
    Purpose: Add user's first and second choice into array and display correct pictures.
  */
  console.log("pig");
  myJSON["fchoice"] = document.getElementById('fchoice').value;
  myJSON["schoice"] = document.getElementById('schoice').value;
  console.log(myJSON);

  myDiv.innerHTML += "\t\t<img src='cat.jpg' />\n";
  myDiv.innerHTML += "\t\t<img src='cookie.jpg' />\n";
}

function mySecondClick () {
  /*
    Parameters: None
    Returns: None
    Purpose: Add user's input to array, and display image depending on their input.
  */
  console.log("grass");
  yes = document.getElementById("yes");
  no = document.getElementById("no");
  myJSON["yes"] = yes.checked
  if (myJSON["yes"]) {
    myRadio.innerHTML += "\t\t<img src='clapping.gif' />\n";
  } else {
    myRadio.innerHTML += "\t\t<img src='shame.gif' />\n";
  }
  // Store to local storage.
  myNewJSON = JSON.parse(localStorage.getItem("myJSON"));
  console.log(myNewJSON);
  myNewJSON.push(myJSON);
  console.log(myJSON);
  localStorage.setItem("myJSON", JSON.stringify(myNewJSON));
}

function myThirdClick () {
  /*
    Parameters: None
    Returns: None
    Purpose: Display text and image.
  */
  console.log("wood");
  loadList();
  myCheckbox.innerHTML += "\t\t<h1>Well regardless I really don't care.</h1>\n";
  myCheckbox.innerHTML += "\t\t<img src='shrug.gif' />\n";
}

function loadList() {
  /*
    Parameters: None
    Returns: None
    Purpose: load list by checking if there's anything to load.
  */
  if (localStorage.getItem("myJSON") != null) {
    console.log(localStorage)
    var myJSON = JSON.parse(localStorage.getItem("myJSON"));

    for (var i = 0; i < myJSON.length; i++) {
      var myEvenNewerJSON = myJSON[i];
    }
  }
}

function myFourthClick () {
  /*
    Parameters: None
    Returns: None
    Purpose: Add user's input to array and display text based on their input.
  */
  result = document.getElementById("result");
  noResult = document.getElementById("noResult");
  myJSON["result"] = result.checked
  if (myJSON["result"]) {
    myResults.innerHTML += "You chose the following: " + myJSON.fchoice + "," + myJSON.schoice
  } else {
    myResults.innerHTML += "Oh, okay then."
  }
}
