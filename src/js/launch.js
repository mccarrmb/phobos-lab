//const {shell} = require('electron');
var exec = require('child_process').execFile;
var os = require('os');

// getExe()
// auto-populates the exe paths for development purposes
// TODO: replace this function with a config file or 
// database or whatever
function getExe(){
  if(os.platform() == 'win32'){
    document.getElementById("sourceport").value = 'B:\\Doom\\bin\\gzdoom\\gzdoom.exe';
    document.getElementById("parameters").value = '-iwad B:\\Doom\\data\\doom.wad';
  }
  else if(os.platform() == 'darwin'){
    document.getElementById("sourceport").value = '/Applications/GZDoom.app';
    document.getElementById("parameters").value = '-iwad \'~/Library/Application Support/gzdoom/doom.wad\'';
  }
  else{
    //assumes unixy systems like bsd, linux, and solaris(lol)
    document.getElementById("sourceport").value = '/usr/games/gzdoom';
    document.getElementById("parameters").value = '-iwad ~/.gzdoom/doom.wad';
  }
}

// run()
// Executes the specified sourceport as a child_process
// with parameters derived from interface
function run() {
  var srcprt = document.getElementById("sourceport").value;
  var params = document.getElementById("parameters").value.split(" ");

  //shell.openItem('/Applications/GZDoom.app ' + params);
  return exec(srcprt, params);
}
