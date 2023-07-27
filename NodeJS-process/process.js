//node process --name "Jonatas" --greeting "Tudo bem com você?"

const getFlagValue = require('./function')

console.log(`Oi, ${getFlagValue('--name')}. ${getFlagValue('--greeting')}`)