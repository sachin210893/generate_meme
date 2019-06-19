import React from 'react'
import ReactDom from 'react-dom'


export default class Header extends React.Component{
    constructor(){
        super();

    }

    render(){
        return(
            <header>
                <img src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png" alt="problem?" />
                <p>Meme Generator</p>
            </header>
        );
    }
}