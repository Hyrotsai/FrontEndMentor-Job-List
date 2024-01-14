import { useState } from 'react';
import JobCard from './JobCard';
import './JobList.css';

function JobList() {
  const [languages, setLanguages] = useState([]);

  const getLanguages = (data) => {
    setLanguages((prev) => {
      if (prev.includes(data)) return [...prev];
      return [...prev, data];
    });
  };

  const clearItemLanguages = (data) => {
    setLanguages((prev) => prev.filter((item) => item !== data));
  };

  const clearAllLanguages = () => {
    setLanguages([]);
  };

  return (
    <>
      {languages?.length > 0 ? (
        <div className='filter__container'>
          <div className='filter__items'>
            {languages.map((item) => (
              <div className='text__filter__container' key={item}>
                <p className='text__filter'>{item}</p>
                <button
                  className='x__filter'
                  onClick={() => clearItemLanguages(item)}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
          <div>
            <p className='text__clear' onClick={clearAllLanguages}>
              Clear
            </p>
          </div>
        </div>
      ) : null}
      <div className='job__container'>
        <JobCard handleClick={getLanguages} languages={languages} />
      </div>
    </>
  );
}

export default JobList;
