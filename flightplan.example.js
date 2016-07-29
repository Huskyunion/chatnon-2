// flightplan.js
var plan = require('flightplan');

var username = 'username';
var appName = 'chatnon';
var startFile = 'server.js';

// configuration
plan.target('staging', [
  {
    host: 'IP_ADDRESS',
    username: username,
    agent: process.env.SSH_AUTH_SOCK
  }
]);

plan.target('production', [
  {
    host: 'IP_ADDRESS',
    username: username,
    agent: process.env.SSH_AUTH_SOCK
  }
]);

var tmpDir = appName + '-' + new Date().getTime();

// run commands on localhost
plan.local(function(local) {
  local.log('Run build');
  local.exec('npm run build');

  local.log('Copy files to remote hosts');
  var filesToCopy = [
    'build/',
    'server.js',
    'package.json'
  ];
  // rsync files to all the target's remote hosts
  local.transfer(filesToCopy, '/tmp/' + tmpDir);
});

// run commands on the target's remote hosts
plan.remote(function(remote) {
  remote.log('Move folder to root');
  remote.sudo('cp -R /tmp/' + tmpDir + ' ~', {user: username});
  remote.rm('-rf /tmp/' + tmpDir);

  remote.log('Install dependencies');
  remote.sudo('npm --production --prefix ~/' + tmpDir + ' install ~/' + tmpDir, {user: username});

  remote.log('Reload application');
  remote.sudo('ln -snf ~/' + tmpDir + ' ~/'+appName, {user: username});
  remote.exec('NODE_PATH=~/chatnon');
  remote.exec('forever stop ~/'+appName+'/'+startFile, {failsafe: true});
  remote.exec('forever start ~/'+appName+'/'+startFile);
});

// run more commands on localhost afterwards
plan.remote('provision', function(remote) {
  remote.log('Provisioning Digital Ocean droplet for Chatnon!');
  remote.sudo('curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -');
  remote.sudo('apt-get install -y nodejs');
  remote.sudo('npm install -g forever');
});
