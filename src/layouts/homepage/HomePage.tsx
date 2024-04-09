import React, { useEffect, useState } from 'react';
import Quote from './components/Quote';
import SearchForm from './components/SearchForm';
import Banner from './components/Banner';
import Post from '../post/Post';
import ScrollToTopButton from '../../utils/ScrollToTopButton';


function HomePage() {

    return (

        <div>
            <header className="bg-dark py-5">
                <SearchForm />
                <Banner />
            </header>
            <Quote />
            <Post />
            <ScrollToTopButton />
        </div >
    )
}

export default HomePage;