import './App.css';
import JobList from './components/JobList';

function App() {
  return (
    <section className='main__section'>
      <div className='svg__background'>SVG AQUI</div>
      <div className='content__section'>
        <JobList />
      </div>
    </section>
  );
}

export default App;
