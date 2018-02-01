'use strict';

var loopCount = 100;
var sampleSize = 100;

if(process.argv.length > 0 && process.argv[2]){
  loopCount = process.argv[2];
}
if(process.argv.length > 1 && process.argv[3]){
  sampleSize = process.argv[3];
}

console.log("loopCount "+ loopCount);
console.log("sampleSize "+ sampleSize);

var start = process.hrtime();

for(var i = 0; i<=sampleSize; i++){ // this loop is for averaging results out
  for(var j = 0; j<=loopCount; j++){ //this loop is for actual iteration
  //do nothing here
  }
}

var end = process.hrtime(start);
console.log(`Average time for ${loopCount} loops with sample size of ${sampleSize} in millis is ` + (((end[0] * 1000 * 1000 * 1000) + end[1])/(1000 * 1000 * sampleSize)));

exit();

function exitWithError(err){
  console.error(err);
  process.exit(1);
}

function exit(){
  console.log('Exiting the script now!');
  process.exit(0);
}
