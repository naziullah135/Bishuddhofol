import Banner from './Banner/Banner';
import Shop from './Shop/Shop';
import Footer from '../Shared/Footer/Footer'
import About from './About/About';
const Home = () => {
    return (
        <div>
            <Banner />
            <About />
            <Shop />
            <Footer />
        </div>
    );
};
export default Home;