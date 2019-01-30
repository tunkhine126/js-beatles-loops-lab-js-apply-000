// add solution here
function theBeatlesPlay(instruments, musicians) {
  var array = [];
  for (var i = 1; i < 4; i++) {
    array.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return array
