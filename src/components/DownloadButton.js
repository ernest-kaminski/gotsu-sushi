import './App.css';
import {useState, useEffect} from 'react';

function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

function DownloadButton() {
    const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
      if (isLoading) {
        simulateNetworkRequest().then(() => {
          setLoading(false);
        });
      }
    }, [isLoading]);
  
    const handleClick = () => setLoading(true);
  
    return (
      <div className="App">
        <header className="App-header">
        <button 
              disabled={isLoading}
              onClick={!isLoading ? handleClick : null}
        >
        {isLoading ? 'Loading…' : 'Click to load'}
        </button>
        </header>
      </div>
    );
  }
  
  export default DownloadButton;