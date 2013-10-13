var termy = require('./lib/termy');

termy.yell('Application error');
termy.yell('Authentication error', {
	sticky: true,
	title: 'Debug'
});
termy.yell('Callback function', {}, function() {
	// do smart code here
	console.log('debug');
})