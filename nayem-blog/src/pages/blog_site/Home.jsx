import React from 'react'
import Card from './Card'
import NavBar from './NavBar'
import Carousel from './Carousel'

function Home() {
  return (
    
       <div className='container'>
        <NavBar />
        <Carousel />
          <div className='row'>
             <div className='col-md-4'>
               <Card img="img/card1.jpeg" title=" Title for demo blog 1" p="Some quick example text to build on the card title and make up the bulk of the card's content."/>
             </div>
             <div class='col-md-4'>
             <Card img="img/card2.jpeg" title=" Title for demo blog 2" p="Some quick example text to build on the card title and make up the bulk of the card's content."/>
             </div>
             <div class='col-md-4'>
             <Card img="img/card3.jpeg" title=" Title for demo blog 3" p="Some quick example text to build on the card title and make up the bulk of the card's content."/>
             </div>
              
          </div>
        </div>

  )
}

export default Home