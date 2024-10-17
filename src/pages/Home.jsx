import Header from '../components/header';
import AnimatedTitle from '../components/animated-title';
import Navigation from '../components/navigation';
import { purpose } from '../components/website-type'

const Home = () => {
    const { name } = purpose()
    return (
        <div className="font-jetbrains main-section min-h-screen flex justify-center">
        <div className="main-section-text font-[700] mt-80">
            <Header name={name} />
            <AnimatedTitle />
            <p className='font-cabinet text-center text-[30px] mb-5'>
            Learning and creating modern websites for a better user experience.
            </p>
            <div className="navigation-bar-links flex justify-center mx-auto">
            <Navigation />
            </div>
        </div>
        </div>
    );
};

export default Home;
