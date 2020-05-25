/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: ['gatsby-plugin-emotion', {
    resolve: 'gatsby-plugin-google-fonts', 
    options: {
      fonts: ['Amatic SC\:700'],
      display: 'swap'
    }
  }],
}
