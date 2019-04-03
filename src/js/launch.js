//const {shell} = require('electron');
var child = require('child_process').execFile;
// Open a local file in the default app
function run() {
  var params = [ "" + document.getElementById("parameters").value ];
  //shell.openItem('/Applications/GZDoom.app ' + params);
  child('/Applications/GZDoom.app', params, function(err, data) {
    console.log(err)
    console.log(data.toString());
  });
}
