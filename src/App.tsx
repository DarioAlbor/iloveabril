import { useEffect } from 'react';
import PDFList from './components/PDFViewer/PDFList';
import { Data } from './components/PDFViewer/data/PDFListData';
import IPDFList from './components/PDFViewer/models/PDFList.model';

function App() {
  const data: IPDFList[] = Data;

  const GithubLink = () => {
    const githubLink = 'https://github.com/DarioAlbor/';
    const imageUrl = 'https://cdn-icons-png.flaticon.com/512/25/25231.png';

    useEffect(() => {
      document.onkeydown = function (e) {
        if (e.ctrlKey || e.altKey) {
          return false;
        }
      };

      window.addEventListener('contextmenu', function (e) {
        e.preventDefault();
      }, false);
    }, [])

    return (
      <div className="small-space">
        <div className='container'>
          <h1 className='main-title'>PDF VIEWER</h1>
          <PDFList lists={data} />
        </div>
        <div className='container'>
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
            <img src={imageUrl} alt="GitHub Logo" className="github-icon" style={{ width: '48px', height: '48px', marginTop: '10px', marginLeft: '580px'}} />
            <h1 className="main-title">CALIFICA MI GITHUB ASI CONSIGO CHAMBA</h1>
          </a>
        </div>
      </div>
    );
  }

  return <GithubLink />;
}

export default App;
