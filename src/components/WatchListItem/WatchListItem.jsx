import  {useState, useContext } from 'react';
import WatchListContext from '../../contexts/WatchListContext';
import './WatchListItem.css'



const WatchListItem = ({ id, title, type, year, duration, episodes, ...otherProps }) => {
    const { removeWatchListItem , watchList , } = useContext(WatchListContext);
    const [watched , setWatched] = useState(false);

    const handleClick = () => {
        console.log('Delete Button Triggered For item' , id);
        removeWatchListItem(id);
    }

    const handleClickWatched = () => {
        console.log('Edit Button Triggered For item' , id);
        setWatched(true)


    }

    return (
        <li className={watched ? "list-group-item mb-3 item-watched" : "list-group-item mb-3"}>
            {id && <p className='fw-bold fst-italic text-success'> Entry ID: <span className='fw-normal text-secondary'>{id}</span> </p>}   
            <h3 className='text-center text-purple'>{title}</h3>
            <p className='fw-bold'>Type: <span className='fw-normal text-info'>{type}</span></p>
            <p className='fw-bold'> Year: <span className='fw-normal text-info'>  {year}</span></p>
            {episodes && <p className='fw-bold'>Episodes: <span className={ episodes === 'No Info' ? 'fw-normal fst-italic text-danger' : 'fw-normal text-info'}>{episodes}</span> </p>}
            {duration && <p className='fw-bold'>Duration: <span className='fw-normal text-info'>{duration}</span> ( M )</p>}

            <div className='d-flex gap-2'>
                <button className='btn btn-danger' onClick={()=>handleClick(id)}>Delete</button>
                <button className='btn btn-success' onClick={()=>handleClickWatched(id)}>Watched</button>

            </div>

        </li>
    );
};

export default WatchListItem;