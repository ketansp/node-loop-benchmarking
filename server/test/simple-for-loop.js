'use strict';

var loopCount = 100;
if(process.argv.length > 0 && process.argv[2]){
  loopCount = process.argv[2];
}

console.log("loopCount "+ loopCount);
console.time("loops");
for(var i = 0; i<=loopCount; i++){
  //do nothing here
}
console.timeEnd("loops");
exit();

function exitWithError(err){
  console.error(err);
  process.exit(1);
}

function exit(){
  console.log('Exiting the script now!');
  process.exit(0);
}
