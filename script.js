// Example array of names
var names = ["John", "Jane", "Paul", "Diana"];

// Loop through each name in the array
for (var i = 0; i < names.length; i++) {
  var name = names[i];
  // Check if the name starts with 'J' or 'j'
  if (name.charAt(0).toLowerCase() === 'j') {
    console.log("Goodbye " + name);
  } else {
    console.log("Hello " + name);
  }
}
