'use strict'

module.exports = function(bundler) {
  bundler.addAssetType('ext', require.resolve('./MyAsset'))
  bundler.addPackager('foo', require.resolve('./MyPackager'))
}
