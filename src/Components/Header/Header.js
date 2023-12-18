/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link, Outlet, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import './Header.css';
import Home from '../Pages/Home/Home';

const Header = (() => {

    return (
        <div className='Header-header'>
            <span className='Header--Logo-Text Text'>
            TechTrade
            </span>
            <span>
                <Router>
                <nav class="crumbs">
                    <ol>
                        <li class="crumb nav--itens Text"><a href="/home">Home</a></li>
                        <li class="crumb nav--itens Text"><a href="/about">About</a></li>
                        <li class="crumb nav--itens Text"><a href="/contact">Contact</a></li>
                    </ol>
                </nav>
                </Router>
            </span>

        </div>
    )
    
});
export default Header;