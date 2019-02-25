const util = require('util');
const exec = util.promisify(require('child_process').exec);

module.exports = {
    send: (processName, signal)=>{
        return exec(`killall -${signal} ${processName}`)
    }
}