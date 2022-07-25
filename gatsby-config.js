/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  /* ABILITA l'SSR SOLO PER IL DEV */
  flags: {
    DEV_SSR: true
  },
  siteMetadata: {
    title: "CloudHunters",
    description: "A super-fast site using GatsbyJS",
    author: "Emiliano Pallini",
    twitterUsername: "barcadia",
    facebookUsername: "barcadia",
    instagramUsername: "barcadia",
    linkedinUsername: "Emiliano Pallini",
    image: "/macbook-color.jpg",
    siteUrl: "https://todbertuzi.com",
    developerName: "Emiliano Pallini",
    developerUrl: "https://todbertuzi.com",
  },
  /* Your site config here */
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://barcadia.netlify.com",
        sitemap: "https://barcadia.netlify.com/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-source-google-calendar`,
      options: {
         calendarIds: [
          'k2hj31l6g0efquag57r6nheju8@group.calendar.google.com',
        ],  
        // options to retrieve the next 10 upcoming events
        timeMin: (new Date()).toISOString(),
        maxResults: 100,
        singleEvents: true,
        orderBy: 'startTime',
      }
    },
    /* {
      resolve: `gatsby-source-google-calendar-events`,
      options: {
        includedFields: ['start', 'end', 'summary', 'status', 'organizer', 'description', 'location'],
        calendarId: '',
        assumedUser: '',
        envVar: '',
        pemFilePath: '',
        // only events after today
        timeMin: moment().format(),
        // only events two years from now
        timeMax: moment().add(2, 'y').format(),
        scopes: [
            `https://www.googleapis.com/auth/calendar.events.readonly`,
            `https://www.googleapis.com/auth/calendar.readonly`
        ]
      }
    }, */
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    {
      //resolve: require.resolve(`./gatsby-plugin-snipcart-advanced-custom`),
      resolve: `gatsby-plugin-snipcart-advanced`,
      options: {
        version: "3.4.0",
        publicApiKey: "#####", // use public api key here or in environment variable
        defaultLang: "it",
        currency: "eur",
        openCartOnAdd: true,
        useSideCart: false,
        loadStrategy: "on-user-interaction",

        // be careful with this mode cart. The cart in this mode has a bug of scroll in firefox
        locales: {
          it: {
            actions: {
              checkout: "Conferma il carrello",
            },
          },
        },
        templatesUrl:
        //  "path on your template file. Set file in the static folder, ex: '/snipcart/index.html'",
        // not work on dev. Gatsby not serve html file in dev https://github.com/gatsbyjs/gatsby/issues/13072
        '/snipcart/index.html',
        innerHTML: `
        <billing section="bottom">
        <div>
          <fieldset class="snipcart-form__set">
            <div class="snipcart-form__field">
                <snipcart-label class="snipcart__font--tiny" for="society">
                {{ $localize('address_form.society') }}
                </snipcart-label>
                <snipcart-input name="society"></snipcart-input>
            </div>
          </fieldset>
          <fieldset class="snipcart-form__set">
            <div class="snipcart-form__field">
              <snipcart-label class="snipcart__font--tiny" for="vatNumber">
                {{ $localize('address_form.vat') }}
              </snipcart-label>
              <snipcart-input name="vatNumber"></snipcart-input>
            </div>
          </fieldset>
        </div>
      </billing>
    `,
            /* `<div id="snipcart" data-api-key="<api_key>" hidden>
                <address-fields section="top">
                    <div>
                        <snipcart-label for="phone">
                            Phone number
                        </snipcart-label>
                        <snipcart-input name="phone">
                        </snipcart-input>
                    </div>
                </address-fields>
            </div>` */
      },
    },
  ],
}
