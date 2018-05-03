######## Setup 
npm init
npm install -g bower
#Bower is used to manage web component depndencies
bower init
bower install --save angular
bower install --save ui-router#0.2.15

######## To integrate with React, need below dependencies 
bower install --save react
npm install --save gulp browserify babelify vinyl-source-stream
npm install --save event-stream
npm install --save babel-core
npm install --save babel-preset-es2015
npm install --save babel-preset-react
npm install --save babel-preset-stage-0


######## To build 
gulp build

######## To Run 
npm install -g httpserver
httpserver

