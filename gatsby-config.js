module.exports = {
  pathPrefix: "/brandonrowe-portfolio",
  siteMetadata: {
    title: "Brandon Rowe",
    author: "Brandon Rowe",
    description: "Portfolio page for Brandon Rowe, software engineer. Built off of a Gatsby.js Starter - Strata by HTML5 UP"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'brandonrowe-portfolio',
        short_name: 'brandonrowe',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
