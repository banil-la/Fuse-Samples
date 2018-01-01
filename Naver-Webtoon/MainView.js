var Observable=require('FuseJS/Observable');

// var test = Observable('test');
var scrollPos=Observable([500, 0]);
function consoling(args){
	debug_log(JSON.stringify(args.value[1]));
}

function tester(){
	debug_log('tester');
}

module.exports={
	// test,
	// consoling,
	// scrollPos,
	// tester
}