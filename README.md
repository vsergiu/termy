termy
=====

A Node.js logger that uses OS X notifications

## Installation

  On OS X 10.8, Notification Center is supported using [terminal-notifier](https://github.com/alloy/terminal-notifier). To install:
  
      $ sudo gem install terminal-notifier
      
  Install [npm](http://npmjs.org/) and run:
  
      $ npm install termy

## Usage

	var termy = require('termy');
	termy.yell('Error');
	termy.yell('Error', { sticky: true }); // make it sticky
	termy.yell('Error', { title: 'Module error'}); // define your title
	termy.yell('Error', {}, function() {
		// do some cool stuff in this callback
	})
	
## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request