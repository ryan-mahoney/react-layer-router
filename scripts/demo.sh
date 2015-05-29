webpack=node_modules/.bin/webpack
server=node_modules/simple-express-static-server/start.js

$server demo/ &
$webpack --watch
