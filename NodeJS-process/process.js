//node process --name "Jonatas" --greeting "Tudo bem com você?"

const getFlagValue = require('./function')

console.log(`Olá, ${getFlagValue('--name')}, ${getFlagValue('--greeting')}`)