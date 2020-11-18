import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

/*
in app.js

import React from 'react'
import Header from './header'
import MemeGenerator from './MemeGenerator'

function App(){
      return(
          <div>
              <Header />
              <MemeGenerator />
          </div>
      )
}

export default App

------------------------------------------------------------
in header.js

import React from 'react'

function Header() {
    return(
        <header>
            <img src='something.jpg' alt='Problem?' />
            <p> Meme Generator </p>
        </header
    )
}

export default Header
-------------------------------------------------------------------------
in memegenerator.js

import React, {Component} from 'react'

class MemeGenerator extends Component {
    constructor(){
        super()
        this.state = {
            topText: ''
            bottomtext: ''
            randomImg: 'something.jpg'
            allMemeimgs: []
         this.handleChange = this.handleChange.bind(this)
         this.handleSubmit = this.handleSubmit.bind(this)}

     componentDidMount() {
        fetch('http://api.imgflip.com/get_memes')
        .then(response => response.json())
        .then(response => {
            const{memes} = response.data

            this.setState({allMemeimgs: memes})

        }

     }


    handleChange(event){
        const {name, value} = event.target
        this.setState({[name]: value})
    }

    handleSubmit(event){
        event.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allMemeimgs.length)
        const randMemeimg = this.state.allMemeimgs[randNum].url


        this.setState({randomImg : randMemeimg})


    }


    }

    render(){
        return(
            <div>
                <form className='meme-form' onSubmit={this.handleSubmit}>

                      <input

                          name='topText'
                          type=text
                          placeholder = 'Top Text'
                          value = {this.state.topText}
                          onChange ={this.handleChange}
                      />

                      <input

                          name='bottomText'
                          type=text
                          placeholder = 'Bottom Text'
                          value = {this.state.bottomText}
                          onChange ={this.handleChange}
                      />

                      <button>Gen </button


                </form>

                <div className='meme'>
                    <img src ='this.state.randomImg' alt='' />
                    <h2 className='top'>{this.state.topText} </h2>
                    <h2 className='bottom'>{this.state.bottomText} </h2>
                </div>


            </div>


          )
    }
}



export default MemeGenerator





 */