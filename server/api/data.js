


export default defineEventHandler(async (event) => {

  const {name} = getQuery(event)
  const {age} = await readBody(event) 
  const {data} = await $fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_aryZ1OMHvAm61tuTHNQe3IX0Ve63iMIDmBu6Uevh&currencies=EUR%2CUSD%2CCAD')
  return data
});
