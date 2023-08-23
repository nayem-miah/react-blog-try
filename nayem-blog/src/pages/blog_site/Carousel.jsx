
import './css/Blog.css'
import React, { Component } from 'react'

export default class Carousel extends Component {

  constructor(props) {
    super(props);
    this.state = {

        shorttile: {
            sTitle1: "This is short title 1 here",
            sTitle2: "This is short title 2 here",
            sTitle3: "And finaly this is short title 3 here",

        },

        lTitle: {

            lTitle1:"Live with Anisul Islam vaiya",
            lTitle2:"How to become a good developer",
            lTitle3:"Make yourself telented things will be yours",

        },
        p:{
            p1:"Be sure to have your pages set up with the latest design and development standards. That means using an HTML5 doctype and including a viewport meta tag for proper responsive behaviors. Put it all together and your pages should look like this:",
            p2:"Lorem ipsum dolor sit amet consectetur adipisicing elit Repellendus quis, dolorum quisquamsunt asperiores deleniti? Itaque culpa voluptas",
            p3:"Bootstrap employs a handful of important global styles and settings that you’ll need to be aware of when using it, all of which are almost exclusively geared towards the normalization of cross browser styles. Let’s dive in.",
        },
        cName:{
            cName1:"Explore With Nayem",
            cName2:"Stack Learner",
            cName3:"Learn With Sumit",
        },

        date:{
            date1:"2020-03-01",
            date2:"2020-07-02",
            date3:"2020-05-03",
        }

        

        

      
    };
  }

  render() {
    return (
      
        <div>
        <br />
        <br />
        <div id="carouselExampleFade" class="carousel slide carousel-fade container" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                   <div className='row'>
                     <div className='col-md-6'>
                         
                     <img src="img/1.jpg" class="d-block w-100" alt="..."/>

                     </div>
                     <div className='col-md-6'>
                         
                      <p class="shorttile">{this.state.shorttile.sTitle1}</p>
                      <h3 class="longtitle">{this.state.lTitle.lTitle1}</h3>
                      <p class="shorttile">{this.state.p.p1}</p>

                        <p class="channelName">{this.state.cName.cName1}</p>
                        <p>{this.state.date.date1}</p>

                     </div>

                   </div>
                </div>

                <div class="carousel-item">
                   <div className='row'>
                     <div className='col-md-6'>
                         
                     <img src="img/2.jpeg" class="d-block w-100" alt="..."/>

                     </div>
                     <div className='col-md-6'>
                         
                      <p class="shorttile">{this.state.shorttile.sTitle2}</p>
                      <h3 class="longtitle">{this.state.lTitle.lTitle2}</h3>
                      <p class="shorttile">{this.state.p.p2}</p>

                        <p class="channelName">{this.state.cName.cName2}</p>
                        <p>{this.state.date.date2}</p>

                     </div>

                   </div>
                </div>

                <div class="carousel-item">
                   <div className='row'>
                     <div className='col-md-6'>
                         
                     <img src="img/1.jpg" class="d-block w-100" alt="..."/>

                     </div>
                     <div className='col-md-6'>
                         
                      <p class="shorttile">{this.state.shorttile.sTitle3}</p>
                      <h3 class="longtitle">{this.state.lTitle.lTitle3}</h3>
                      <p class="shorttile">{this.state.p.p3}</p>

                        <p class="channelName">{this.state.cName.cName3}</p>
                        <p>{this.state.date.date3}</p>

                     </div>

                   </div>
                </div>
           
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span class="carousel-control-prev-icon"></span>
               
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span class="carousel-control-next-icon"></span>
                
            </button>
            <br />
            <h2> Recent Post</h2>
        </div>

    </div>  
    )
  }
}


