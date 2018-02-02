'use strict';

var loopCount = 100;
var sampleSize = 100;
var resultSet = [];

if(process.argv.length > 0 && process.argv[2]){
  loopCount = process.argv[2];
}
if(process.argv.length > 1 && process.argv[3]){
  sampleSize = process.argv[3];
}

console.log("loopCount "+ loopCount);
console.log("sampleSize "+ sampleSize);


for(var i = 0; i<=sampleSize; i++){ // this loop is for averaging results out
  let start = process.hrtime();
  for(var j = 0; j<=loopCount; j++){ //this loop is for actual iteration
  //do nothing here
  }
  let end = process.hrtime(start);
  resultSet.push((((end[0] * 1000 * 1000 * 1000) + end[1])/(1000 * 1000)));
}

console.log(`Average time for ${loopCount} loops with sample size of ${sampleSize} in millis is ` + average(resultSet));
exit();

function exitWithError(err){
  console.error(err);
  process.exit(1);
}

function exit(){
  console.log('Exiting the script now!');
  process.exit(0);
}

function average(arr){
  return arr.reduce((e1, e2) => e1 + e2,0)/arr.length;
}
