import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((_nuxtApp) => {
  if (import.meta.server) return

  console.log(`%c[====================================================================]
[ Template downloaded from https://github.com/brokuka/nuxt-templates ]
[                                                                    ]
[                          Powered by %c@brokuka%c                       ]
[                      (https://github.com/brokuka)                  ]
[====================================================================]

`, 'font-weight: bold;', 'color: red; font-weight: bold', 'color: black; font-weight: bold')
})
