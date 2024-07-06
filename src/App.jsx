
import './App.css';
import Header from './components/Header/Header';
import { WatchListComponent } from './components/WatchListComponent/WatchListComponent';
import WatchListProvider  from './contexts/WatchListProvider';



function App() {
  



  return (
    <>
      <WatchListProvider  >
      <Header />

      <div className="list-group-container">

        <WatchListComponent/>

      </div>

      
        
      </WatchListProvider>      
      
    </>
  )
}

export default App
