import React, {Component} from 'react'

export default class BGVideo extends Component {
  render () {
    return (
      <div className="bg-video-container">
        <video className="bg-video" autoPlay loop muted>
          <source src="video/bgVideo.mp4" type="video/mp4" className="bg-video-source" />
        </video>
      </div>
    )
  }
}
