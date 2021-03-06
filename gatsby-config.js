module.exports = {
  siteMetadata: {
    title: `RyanOldford.com`,
    subtitle: `Portfolio`,
    description: `Former teacher, current student, future developer`,
    description_l1: `Former teacher, `,
    description_l2: `current student, `,
    description_l3: `future developer`,
    keywords: `code, programming, javascript, python, react, redux, gatsby`,
    siteUrl: `https://ryanoldford.com`
  },
  plugins: [
    `gatsby-plugin-jss`,
    `gatsby-plugin-flow`,
    `gatsby-disable-404`,
    `gatsby-plugin-react-helmet`,
    `gatsby-remark-copy-linked-files`,
    `gatsby-plugin-catch-links`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        hoist: false,
        sourceMap: false,
        autoLabel: false,
        labelFormat: "[local]",
        extractStatic: false,
        outputDir: "",
        importedNames: {
          styled: "styled",
          css: "css",
          keyframes: "keyframes",
          injectGlobal: "injectGlobal",
          merge: "merge"
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              quality: 100,
              maxWidth: 860,
              linkImagesToOriginal: false,
              sizeByPixelDensity: true
            }
          },
          "gatsby-remark-embed-soundcloud",
          "gatsby-remark-copy-linked-files"
        ]
      }
    },
    {
      resolve: `gatsby-remark-images`,
      options: {
        linkImagesToOriginal: false,
        sizeByPixelDensity: true,
        quality: 100,
        maxWidth: 860
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        exclude: ["/category/*"],
        query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }

          allSitePage {
            edges {
              node {
                path
              }
            }
          }
      }`
      }
    }
  ]
};
