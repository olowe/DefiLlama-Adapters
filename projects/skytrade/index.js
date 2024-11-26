const axios = require("axios");

async function tvl() {
  const totalTokenValue = (await axios.get('https://api.sky.trade/public/properties/tvl')).data
  return totalTokenValue.tvl
}

module.exports = {
  methodology: 'SkyTrade TVL is the accumulation of all property air rights, each being airRightsValuation * propertySquareArea, where airRightsValuation is provided by SkyTrade.',
  solana: {
    fetch: tvl
  },
  fetch: tvl
};