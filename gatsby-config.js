/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
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
  ],
}
