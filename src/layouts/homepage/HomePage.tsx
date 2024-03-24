import React from 'react';
import Feature from './components/Feature';
import Quote from './components/Quote';
import Post from '../post/components/ListPost';
import SearchForm from './components/SearchForm';
import Banner from './components/Banner';

function HomePage() {
    return (
        <div>
            <header className="bg-dark py-5">
                <SearchForm />
                <Banner />
            </header>
            <Feature />
            <Quote />
            <Post />
        </div>
    )
}

export default HomePage;