import React from 'react'
import ReactDom from 'react-dom'
import './style.css'

export default class ImageDisplay extends React.Component{
    
    render(){
        console.log(this.props)
        //console.log(this.props.key)
        return(
            <div className="image_div">
                <span className="meme-top-caption">Top Text</span>
                <img className="img_tag" src={this.props.src} alt={this.props.name} key={this.props.id} />
                <span className="meme-bottom-caption">Bottom Text</span>
            </div>
        )
    }
}