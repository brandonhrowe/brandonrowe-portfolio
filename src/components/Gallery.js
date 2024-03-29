import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Carousel, { Modal, ModalGateway } from 'react-images'
import CustomModal from './CustomModal'

class Gallery extends Component {
  constructor() {
    super()

    this.state = {
      lightboxIsOpen: false,
      selectedIndex: 0,
    }

    this.toggleLightbox = this.toggleLightbox.bind(this)
  }
  toggleLightbox(selectedIndex) {
    this.setState(state => ({
      lightboxIsOpen: !state.lightboxIsOpen,
      selectedIndex,
    }))
  }
  renderGallery(images) {
    if (!images) return

    const gallery = images.map((obj, i) => {
      return (
        <article className="6u 12u$(xsmall) work-item" key={i}>
          <a
            className="image fit thumb"
            href={obj.source}
            onClick={e => {
              e.preventDefault()
              this.toggleLightbox(i)
            }}
          >
            <img src={obj.thumbnail} alt={obj.caption}/>
          </a>

          <div className="thumb-header">
            <a href={obj.link}>
              <h2 id={`${obj.font}-title`}>{obj.caption}</h2>
            </a>
            <div>
              <a href={obj.link} className="button">
                Link <span className="icon fa-globe"></span>
              </a>
              <a href={obj.github} className="button">
                GitHub <span className="icon fa-github"></span>
              </a>
              <a href={obj.supplement.link} className="button">
                {obj.supplement.name}{' '}
                <span className={`icon fa-${obj.supplement.site}`}></span>
              </a>
            </div>
          </div>
          <p>{obj.description}</p>
        </article>
      )
    })

    return <div className="row">{gallery}</div>
  }
  render() {
    const { images } = this.props
    const { selectedIndex, lightboxIsOpen } = this.state

    return (
      <div>
        {this.renderGallery(images)}
        <ModalGateway>
          {lightboxIsOpen && (
            <Modal onClose={this.toggleLightbox}>
              <Carousel
                currentIndex={selectedIndex}
                views={images}
                components={{ View: CustomModal }}
              />
            </Modal>
          )}
        </ModalGateway>
      </div>
    )
  }
}

Gallery.displayName = 'Gallery'
Gallery.propTypes = {
  images: PropTypes.array,
}

export default Gallery
