// Your code here.
var hash = "#",
    space = ' ',
    size = 8;

for (var row = 0; row < size; row++) {
  for (var col = 0; col < size; col++) 
    write(col%2 == 0?space:hash);
  print( "\n");
  }
