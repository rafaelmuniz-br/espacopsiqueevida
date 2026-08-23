// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // Site institucional simples, sem backend — SSR + prerender (nuxt generate)
  // pra sair como HTML estático de verdade (bom pra SEO e pra hospedar no
  // Netlify sem função nenhuma rodando).
  ssr: true,

  app: {
    head: {
      htmlAttrs: { lang: 'pt-BR' },
      title: 'Espaço Psique e Vida — Psicologia e Neuropsicologia em Salvador-BA',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Espaço Psique e Vida: Avaliação Neuropsicológica, Psicoterapia, Reabilitação e Estimulação em Salvador-BA. Atendimento particular, com escuta ética, sensível e individualizada para crianças, adolescentes, adultos e famílias.',
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Espaço Psique e Vida' },
        { property: 'og:url', content: 'https://espacopsiqueevida.netlify.app/' },
        {
          property: 'og:title',
          content: 'Espaço Psique e Vida — Psicologia e Neuropsicologia em Salvador-BA',
        },
        {
          property: 'og:description',
          content:
            'Avaliação Neuropsicológica, Psicoterapia, Reabilitação e Estimulação. Um espaço pensado para acolher, escutar e cuidar — atendimento particular em Salvador-BA.',
        },
        { property: 'og:image', content: 'https://espacopsiqueevida.netlify.app/marca/og-image.jpg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:locale', content: 'pt_BR' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: 'https://espacopsiqueevida.netlify.app/marca/og-image.jpg' },
      ],
      link: [{ rel: 'icon', type: 'image/png', href: '/marca/favicon.png' }],
    },
  },

  css: [
    '@fontsource-variable/playfair-display/wght.css',
    '@fontsource-variable/playfair-display/wght-italic.css',
    '@fontsource-variable/nunito-sans/wght.css',
    '@fontsource-variable/dancing-script/wght.css',
    '~/assets/css/main.css',
  ],

  nitro: {
    preset: 'netlify',
    prerender: {
      routes: ['/'],
    },
  },
})
