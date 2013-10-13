var exec = require('child_process').exec
  , path = require('path');

cmd = {
	pkg: 'terminal-notifier'
  , msg: '-message'
  , title: '-title'
  , sticky: '--sticky'
};

exports.yell = function(msg, options, fn) {
	var options = options || {},
	    fn = fn || function() {};

	title = options.title || 'termy notification';
	args = [cmd.pkg];

 	args.push(cmd.sticky);
 	args.push(cmd.msg);
 	args.push(JSON.stringify(msg));
 	args.push(cmd.title);
 	args.push(JSON.stringify(title));

 	if (options.sticky) args.push(cmd.sticky);
 	
 	exec(args.join(' '), fn);
}
