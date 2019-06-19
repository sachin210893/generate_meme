import React, { Component } from 'react';
import './style.css';
import PropTypes from 'prop-types';
import ImageDisplay from './ImageDisplay'



// const initialState ={
//     toptext: "",
//     bottomtext: "",
//     isTopDragging: false,
//     isBottomDragging: false,
//     topY: "10%",
//     topX: "50%",
//     bottomX: "50%",
//     bottomY: "90%"
// }; 

export default class Gallery extends Component {
   
    constructor(){
        super();
        this.state={
            isLoaded: false,
            topText:"",
            bottomText:"",
            imageIsOpen :false,
            images : [],
            //...initialState
        }
    }

    componentDidMount(){
        
        fetch('https://api.imgflip.com/get_memes')
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded:true,
                images: json.data.memes
            })
        })
    }
    
    render() {
        //console.log(this.state.images)
        return(
        <div className="content">
            {this.state.images.map((image, index) => (
                // return <ImageDisplay key={image.id} id={image.id} alt={image.name} src={image.url} width={image.width} height={image.height}/>})
            
                <div className="image_div" key={index}>
                    <span className="meme-top-caption">Top Text</span>
                    <img 
                        style={{
                            width:"100%",
                            cursor:"pointer",
                            height:"100%"
                        }} 
                        alt={index}
                        src={image.url}
                        onClick={()=>this.openImage(index)}
                        />
                    <span className="meme-bottom-caption">Bottom Text</span>
                </div>
            )
                // <div className="image-holder">
                //     {/* <span className="meme-top-caption">Top text</span> */}
                //     {image_component}
                //     {/* <span className="meme-bottom-caption">Bottom Text</span> */}
                // </div>    
            
            )}
        </div> 
        )}
}

