import './App.css';
import JobList from './components/JobList';

function App() {
  return (
    <section className='main__section'>
      <div className='svg__background'>
        <img
          src='../public/bg-header-desktop.svg'
          alt='SVG Desktop'
          className='svg__background__desktop'
        />
        <img
          src='../public/bg-header-mobile.svg'
          alt='SVG Desktop'
          className='svg__background__mobile'
        />
      </div>
      <div className='content__section'>
        <JobList />
      </div>
    </section>
  );
}

export default App;
