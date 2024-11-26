(function() {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

// STEP 10:
// Loop over the names array and say either 'Hello' or "Good Bye"
// using either the helloSpeaker's or byeSpeaker's 'speak' method.
// See Lecture 50, part 1
  for (var index in names) {
    var name = names[index];
    var firstLetter = name.charAt(0).toLowerCase();
    console.log(firstLetter);
    if (firstLetter == 'j'){
      byeSpeaker.speak(name);
    } else { helloSpeaker.speak(name);}
}

})();

