
import React, { Component } from 'react'

import {Link, NavLink} from 'react-router-dom'
import './css/Blog.css'
export default class NavBar extends Component {
  render() {
    return (
      <div class="container">
   

        <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <Link class="navbar-brand" to="/">Explore With Nayem</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <NavLink class="nav-link active" to="/">Home</NavLink>
                
                </li>
                <li class="nav-item">
                    <NavLink class="nav-link" to="/about">About</NavLink>
                </li>
                <li class="nav-item">
                    <NavLink class="nav-link" to="/contact">Contact</NavLink>
                </li>
  
            </ul>
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div>
        </div>
        </nav>
        <br />
 
      </div>
    )
  }
}
