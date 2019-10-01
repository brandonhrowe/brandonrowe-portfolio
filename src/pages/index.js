import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'
import Experience from '../components/Experience'

import thumb01 from '../assets/images/thumbs/Bloom_Thumb.png'
import thumb02 from '../assets/images/thumbs/Simmer_Thumb.png'
import thumb03 from '../assets/images/thumbs/BigSplice_Thumb.png'

import full01 from '../assets/images/fulls/Bloom_Full.png'
import full02 from '../assets/images/fulls/Simmer_Full.png'
import full03 from '../assets/images/fulls/BigSplice_Full.png'

import fsa from '../assets/images/experience/fsa-logo-stacked.png'
import pft from '../assets/images/experience/pft_logo.jpg'
import deluxe from '../assets/images/experience/deluxe-entertainment.jpg'
import nyu from '../assets/images/experience/nyu_logo.png'

import resume from '../assets/downloads/Brandon_H_Rowe_Tech_Resume_2019.pdf'

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
    long_desc:
      'BLOOM WRITING is a creative writing app that generates a random prompt with which to start writing. The app also includes features such as suggested next sentences, definition lookups, and downloading stories.',
    stack: [
      'Node',
      'Express',
      'React',
      'Redux',
      'Postgres',
      'Sequelize',
      'Compromise',
      'Sentencer',
      'WordsAPI',
      'CKEditor',
    ],
    supplement: {
      site: 'medium',
      link:
        'https://medium.com/@brandon.h.rowe/in-search-of-lost-words-8a431227da67?source=friends_link&sk=a63a2cfe1c3ff9cf6d462754d452ab52',
      name: 'Article',
    },
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
    long_desc:
      'Simmer is a Progressive Web App that allows users to bookmark recipes from different cooking sites through a Chrome extension. Users can also find more recipes with the Search and Recommendations features, and can access their recipes even when offline.',
    stack: [
      'Node',
      'Express',
      'React',
      'Redux',
      'Postgres',
      'Sequelize',
      'Service Workers',
      'Cheerio',
      'Bulma',
    ],
    supplement: {
      site: 'youtube',
      link: 'https://www.youtube.com/embed/N-c-Lw-gp-o',
      name: 'Presentation',
    },
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
    long_desc:
      "THE BIG SPLICE is an app that lets users edit together their own, old-fashioned film-noir. Utilizing the Internet Archive's collection of classic films, the user is presented with a handful of clips, which they can splice together in any order to produce a final movie for their viewing pleasure.",
    stack: [
      'Python',
      'Django',
      'React',
      'Postgres',
      'FFmpeg',
      'Internet Archive API',
      'React Sortable HOC',
    ],
    supplement: {
      site: 'medium',
      link:
        'https://medium.com/@brandon.h.rowe/splicing-concepts-together-faedc90170a9?source=friends_link&sk=12dc945a03cf4a027c9c7dd0c4a274ec',
      name: 'Article',
    },
  },
]

const work = [
  {
    company: 'Fullstack Academy of Code',
    title: 'Software Engineer Teaching Fellow',
    logo: fsa,
    details: [
      'Mentor ~40 software engineering students on Node.js, React and other modern JavaScript projects',
      'Lead algorithm reviews',
      'Act as scrum master for senior-phase group projects',
      'Interview student candidates and vet their technical abilities',
    ],
  },
  {
    company: 'Prime Focus Technologies',
    title: 'Post Production Technician',
    logo: pft,
    details: [
      'Coded scripts to automate workflows using Bash and FFmpeg, speeding up processes by 500%',
      'Managed and updated daily workflows for tech department with advanced software, increasing encoding capacity from 5 to 40 a day',
      'Liaised with key stakeholders at HBO, IFC and A&E to manage their video encoding and editing work',
    ],
  },
  {
    company: 'Deluxe Digital Services',
    title: 'Ingest Operator',
    logo: deluxe,
    details: [
      'Guided the archiving of thousands of video and audio assets into remote storage system',
      'Encoded and edited content for Netflix, HBO, and other clients',
    ],
  },
]

const education = [
  {
    company: 'Fullstack Academy of Code',
    logo: fsa,
    details: [
      'Software Engineering Immersive Program',
      'JavaScript Fullstack, including Node.js, Express, PostgreSQL, React, and Redux',
    ],
  },
  {
    company: 'New York University',
    title: 'Tisch School of the Arts',
    logo: nyu,
    details: [
      'Bachelor of Fine Arts',
      'Major: Film and Television Production',
      'Minor: Metropolitan Studies',
      'GPA: 3.83',
      'Magna Cum Laude',
    ],
  },
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
              <h2>
                <u>About Me</u>
              </h2>
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
            <header className="major">
              <h2>
                <u>Projects</u>
              </h2>
            </header>
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
                  long_desc,
                  stack,
                  supplement,
                }) => ({
                  source,
                  thumbnail,
                  caption,
                  description,
                  github,
                  link,
                  long_desc,
                  stack,
                  supplement,
                })
              )}
            />
          </section>

          <section id="three">
            <header className="major">
              <h2>
                <u>Experience</u>
                <a href={resume} className="button resume">
                  Download Resume
                </a>
              </h2>
            </header>
            <div className="experience-columns">
              <div>
                <h2>
                  <u>Work</u>
                </h2>
                <br />
                <Experience experience={work} />
              </div>
              <div>
                <h2>
                  <u>Education</u>
                </h2>
                <br />
                <Experience experience={education} />
              </div>
            </div>
          </section>

          <section id="four">
            <header className="major">
              <h2>
                <u>Contact Info...</u>
              </h2>
            </header>
            <div>
              <h3>
                Feel free to reach out to me or see my work by way of{' '}
                <a href="https://www.linkedin.com/in/brandonhrowe/">
                  <u>LinkedIn</u>
                </a>
                ,{' '}
                <a href="https://github.com/brandonhrowe">
                  <u>GitHub</u>
                </a>
                ,{' '}
                <a href="https://medium.com/@brandon.h.rowe">
                  <u>Medium</u>
                </a>
                , or{' '}
                <a href="mailto:brandonhrowe@gmail.com?subject=Greetings!">
                  <u>email</u>
                </a>{' '}
                (or you can take a peek at my{' '}
                <a href={resume}>
                  <u>resume</u>
                </a>
                ). I look forward to hearing from you!
              </h3>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
