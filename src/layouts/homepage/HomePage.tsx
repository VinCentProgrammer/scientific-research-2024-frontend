import React, { useEffect, useState } from 'react';
import Quote from './components/Quote';
import SearchForm from './components/SearchForm';
import Banner from './components/Banner';
import Post from '../post/Post';


function HomePage() {

    return (
        <div>
            <header className="bg-dark py-5">
                <SearchForm />
                <Banner />
            </header>
            <Quote />
            <Post/>
        </div >
    )
}

export default HomePage;