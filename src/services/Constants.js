const isProduction = process.env.NODE_ENV === 'production'

const platformMap = {
  douyu: '斗鱼',
  panda: '熊猫',
  huya: '虎牙'
}

const platforms = Object.keys(platformMap)
  .map(key => {
    return {
      code: key,
      name: platformMap[key]
    }
  })

const noop = function() {}

export {
  isProduction,
  noop,
  platforms,
  platformMap
}
