import Quote from './components/Quote';
import Banner from './components/Banner';
import Post from '../post/Post';
import ScrollToTopButton from '../../utils/ScrollToTopButton';


function HomePage() {
    return (
        <div>
            <header className="bg-dark">
                <Banner />
            </header>
            <Quote />
            <Post />
            <ScrollToTopButton />
        </div >
    )
}

export default HomePage;