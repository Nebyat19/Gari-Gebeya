

export default defineEventHandler(async(event) => {
  const { code: CODE } = event.context.params;
  const {currencyKey} = useRuntimeConfig()
  const CURRENCY_URL = `http://api.currencyapi.com/v3/latest?apikey=${currencyKey}&currencies=${CODE}`;
  const {data} = await $fetch(CURRENCY_URL)
  return data
});
