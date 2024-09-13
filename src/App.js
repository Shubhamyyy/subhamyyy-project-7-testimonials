import logo from './logo.svg';
import './App.css';
import './input.css';
import reviews from './data';
import Testimonial from './components/Testimonial';

function App() {
  return (
    <div  className=''>
      <div className='flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200'>
      <div className='text-center '>
        <h1 className='text-4xl font-bold'>Our Testimonials</h1>
        <div className='bg-black h-[4px] w-[1/5] mt-1'></div>
        <Testimonial reviews={reviews}></Testimonial>
      </div>
    </div>
    </div>
  );
}

export default App;
