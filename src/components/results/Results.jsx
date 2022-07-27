import "./results.css";
import ResultCard from '../result-card/ResultCard';

const Results = () => {
  return (
    <div className="results">
      <h2>Lagos: 446 properties found</h2>
      <ResultCard/>
      <ResultCard/>
      <ResultCard/>
      <ResultCard/>
      <ResultCard/>
    </div>
  );
};

export default Results;
