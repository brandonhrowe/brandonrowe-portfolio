import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/01.jpg'
import thumb02 from '../assets/images/thumbs/02.jpg'
import thumb03 from '../assets/images/thumbs/03.jpg'
import thumb04 from '../assets/images/thumbs/04.jpg'
import thumb05 from '../assets/images/thumbs/05.jpg'
import thumb06 from '../assets/images/thumbs/06.jpg'

import full01 from '../assets/images/fulls/01.jpg'
import full02 from '../assets/images/fulls/02.jpg'
import full03 from '../assets/images/fulls/03.jpg'
import full04 from '../assets/images/fulls/04.jpg'
import full05 from '../assets/images/fulls/05.jpg'
import full06 from '../assets/images/fulls/06.jpg'

const DEFAULT_IMAGES = [
  {
    id: '1',
    source: full01,
    thumbnail: thumb01,
    caption: 'Bloom Writing',
    description:
      'Write stories with the help of randomly-generated prompts and sentence suggestions.',
    link: 'https://bloom-writing.herokuapp.com',
    github: 'https://github.com/brandonhrowe/bloom-writing',
  },
  {
    id: '2',
    source: full02,
    thumbnail: thumb02,
    caption: 'Simmer',
    description:
      'Bookmark recipes from various cooking sites through the Simmer Chrome extension for on- and off-line access.',
    link: 'https://simmer.brook.li',
    github: 'https://github.com/1902cs-indigo-oscar/Simmer',
  },
  {
    id: '3',
    source: full03,
    thumbnail: thumb03,
    caption: 'The Big Splice',
    description:
      'Create old-fashioned, film-noir collages by assembling clips selected from the Internet Archive.',
    link: 'https://www.thebigsplice.com',
    github: 'https://github.com/brandonhrowe/the-big-splice',
  },
  //   {
  //     id: '4',
  //     source: full04,
  //     thumbnail: thumb04,
  //     caption: 'Photo 4',
  //     description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  //   },
  //   {
  //     id: '5',
  //     source: full05,
  //     thumbnail: thumb05,
  //     caption: 'Photo 5',
  //     description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  //   },
  //   {
  //     id: '6',
  //     source: full06,
  //     thumbnail: thumb06,
  //     caption: 'Photo 6',
  //     description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  //   },
]

class HomeIndex extends React.Component {
  render() {
    const siteTitle = 'Gatsby Starter - Strata'
    const siteDescription = 'Site description'

    return (
      <Layout>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>

        <div id="main">
          <section id="one">
            <header className="major">
              <h2>About Me</h2>
            </header>
            <p>
              I am a Fullstack Software Engineer, located in Brooklyn, NY. I
              specialize in JavaScript and the NERD stack (Node, Express, React,
              Postgres Databases), with additional experience in Python and
              Django.{' '}
            </p>
            <p>
              I have several years of experience in the world of Film/Television
              Post-Production, working with clients such as HBO, Netflix, and
              IFC. In addition to programming, my interests include film,
              reading, and photography. I also teach workshops in analog film
              processing.
            </p>
            {/* <ul className="actions">
              <li>
                <a href="#" className="button">
                  Learn More
                </a>
              </li>
            </ul> */}
          </section>

          <section id="two">
            <h2>Projects</h2>

            <Gallery
              images={DEFAULT_IMAGES.map(
                ({
                  id,
                  source,
                  thumbnail,
                  caption,
                  description,
                  github,
                  link,
                }) => ({
                  source,
                  thumbnail,
                  caption,
                  description,
                  github,
                  link,
                })
              )}
            />

            {/* <ul className="actions">
              <li>
                <a href="#" className="button">
                  Full Portfolio
                </a>
              </li>
            </ul> */}
          </section>

          <section id="three">
            <h2>Get In Touch</h2>
            <p>
              Accumsan pellentesque commodo blandit enim arcu non at amet id
              arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi
              lorem vulputate lorem neque lorem ipsum dolor.
            </p>
            <div className="row">
              <div className="8u 12u$(small)">
                <form method="post" action="#">
                  <div className="row uniform 50%">
                    <div className="6u 12u$(xsmall)">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                      />
                    </div>
                    <div className="6u 12u$(xsmall)">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                      />
                    </div>
                    <div className="12u">
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Message"
                        rows="4"
                      ></textarea>
                    </div>
                  </div>
                </form>
                <ul className="actions">
                  <li>
                    <input type="submit" value="Send Message" />
                  </li>
                </ul>
              </div>
              <div className="4u 12u$(small)">
                <ul className="labeled-icons">
                  <li>
                    <h3 className="icon fa-home">
                      <span className="label">Address</span>
                    </h3>
                    1234 Somewhere Rd.
                    <br />
                    Nashville, TN 00000
                    <br />
                    United States
                  </li>
                  <li>
                    <h3 className="icon fa-mobile">
                      <span className="label">Phone</span>
                    </h3>
                    000-000-0000
                  </li>
                  <li>
                    <h3 className="icon fa-envelope-o">
                      <span className="label">Email</span>
                    </h3>
                    <a href="#">hello@untitled.tld</a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
