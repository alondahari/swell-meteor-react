import React, {Component} from 'react'

export default class BGVideo extends Component {
  render () {
    const containerStyle = {
      minWidth: '100%',
      minHeight: '100%',
      width: 'auto',
      position: 'fixed',
      backgroundColor: '#2a5680',
      transition: 'opacity .4s',
      // opacity: 0,
    }
    return (
      <div className="bg-video-container" style={containerStyle}>
        <video className="bg-video" autoPlay loop muted>
          <source src="video/bgVideo.mp4" type="video/mp4" className="bg-video-source" />
        </video>
      </div>
    )
  }
}
