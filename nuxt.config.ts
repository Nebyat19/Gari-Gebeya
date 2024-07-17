// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app:{
    head:{
      title:"Gari.com",

      meta:[
        {name:'description', content:"Gari gebeya"}
      ],
      link:[
        {rel:'stylesheet', href:"https://fonts.googleapis.com/icon?family=Material+Icons"}
      ]
    }
  },
  runtimeConfig:{
    currencyKey: process.env.CURRENCY_API_KEY
  }
})
