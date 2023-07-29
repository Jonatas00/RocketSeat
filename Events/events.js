const {EventEmitter} = require('events')
const ev = new EventEmitter()

ev.on('saySomething', (arg) => {
    console.log("Eu ouvi você", arg)
})
ev.once('saySomething', (arg) => {
    console.log("Eu ouvi você só uma vez!", arg)
})

ev.emit("saySomething", "Mensagem 1")
ev.emit("saySomething", "Mensagem 2")