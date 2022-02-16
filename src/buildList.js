const { version } = require('../package.json')
const smartbch = require('./tokens/smartbch.json')
const polygon = require('./tokens/polygon.json')

module.exports = function buildList () {
  const parsed = version.split('.')
  return {
    name: 'WanWu CashNFT List',
    timestamp: new Date().toISOString(),
    version: {
      major: +parsed[0],
      minor: +parsed[1],
      patch: +parsed[2],
    },
    tags: {},
    logoURI: '',
    keywords: ["wanwu-cashnft", "default"],
    tokens: [...smartbch, ...polygon]
  }
}
