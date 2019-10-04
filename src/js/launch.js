/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const { exec } = require('child_process');
const os = require('os');

// getExe()
// auto-populates the exe paths for development purposes
// TODO: replace this function with a config file or
// database or whatever
function getExe() {
  if (os.platform() === 'win32') {
    document.getElementById('sourceport').value = 'B:\\Doom\\bin\\gzdoom\\gzdoom.exe';
    document.getElementById('parameters').value = '-iwad B:\\Doom\\data\\doom.wad';
  } else if (os.platform() === 'darwin') {
    document.getElementById('sourceport').value = `${os.homedir()}/Applications/GZDoom.app`;
    document.getElementById('parameters').value = `-iwad "${os.homedir()}/Library/Application Support/gzdoom/doom.wad"`;
  } else {
    // assumes unixy systems like bsd, linux, and solaris(lol)
    document.getElementById('sourceport').value = '/usr/games/gzdoom';
    document.getElementById('parameters').value = `-iwad "${os.homedir()}/.config/gzdoom/doom.wad"`;
  }
}

// run()
// Executes the specified sourceport as a child_process
// with parameters derived from interface
// (even doomseeker doesn't handle this intuitively)
function run() {
  const srcprt = (os.platform() === 'darwin' ? `open ${document.getElementById('sourceport').value} --args ` : document.getElementById('sourceport').value);
  const params = document.getElementById('parameters').value;
  // shell.openItem('/Applications/GZDoom.app ' + params);
  console.log(srcprt);
  console.log(params);
  return exec((`${srcprt} ${params}`), (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
  });
}

function createMacOSConfigurationFile() {

}

function createLinuxConfigurationFile() {

}

function createWindowsConfigurationFile() {

}

