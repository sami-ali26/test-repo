function getLength(str) {
  console.log("Original String:", str);
  console.log("Length:", str.length);
}
// getLength('Sami ali')
function findindex(str, point) {
  console.log("Original String:", str);
  console.log("Index of point :", str.indexOf(point));
}
function lastindex(str, point) {
  console.log("Original String:", str);
  console.log("Index of point :", str.lastIndexOf(point));
}
// lastindex("hello sami ali sami", "sami");

function slicemethod(str, val1, val2) {
  console.log("original string:", str);
  console.log("After slice string:", str.slice(val1, val2));

}
// slicemethod('Hello sami ali', 6, 10)

function getsubstring(str, val1, val2) {
  console.log("original string:", str);
  console.log("After sub string:", str.substring(val1, val2));

}
// getsubstring('hello sami ali', 6, 10)

function getreplacement(str, point, replace) {
  console.log('Original string:', str);
  console.log('After replacement string:', str.replace(point, replace));

}
// getreplacement("hellow world", "world", "sami")

function splitinto(str, point) {
  return str.split(point);

}
// let result = splitinto('sami ali', ' ')
// console.log(result[1]);

function trimmethod(str, point) {
  console.log('Afer triming:', str.trim(point));

}
// trimmethod('   Hello my name is sami    ', ' ')

function intouppercasae(str) {
  console.log("Changing into uppercase:", str.toLowerCase());

}
intouppercasae('HELLO SAMI ALI')