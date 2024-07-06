import React , {useState , useEffect} from "react";
import WatchListContext from "./WatchListContext";


const WatchListProvider = ({children}) => {

    const [showModal , setShowModal] = useState(false); 
        const [watchList, setWatchList] = useState(() => {
          // Initialize state with localStorage data if it exists
          const data = window.localStorage.getItem('WATCH_LIST');
          return data ? JSON.parse(data) : [];
        });

    

    useEffect(()=>{
        console.log('Watch List § ' , watchList );
        window.localStorage.setItem('WATCH_LIST' , JSON.stringify(watchList))
    } ,[watchList])


    function addWatchListItem(item) {
        setWatchList(prevList => [...prevList , item]);
    }

    function handleShow() {
        setShowModal(true);
        // console.log(watchList);
      };

    function removeWatchListItem(id){
        try {
            setWatchList(prevList => prevList.filter(item => item.id !== id));

        } catch (error) {
            console.error(error);
        }
    
    }
    

    
      

    return (
        <WatchListContext.Provider value={{watchList , setWatchList , addWatchListItem , removeWatchListItem , handleShow , setShowModal , showModal }}>
            {children}
        </WatchListContext.Provider>
    )
}


export default WatchListProvider;