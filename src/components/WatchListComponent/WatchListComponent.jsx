import React, { useContext  , useState , useEffect} from 'react';
import './WatchListComponent.css';
import WatchListContext from '../../contexts/WatchListContext';
import WatchListItem from '../WatchListItem/WatchListItem';

export const WatchListComponent = () => {
    const { watchList } = useContext(WatchListContext);

    return (
        <div className='d-flex flex-column'>
            <h1 className='text-center text-dark mb-5'>Your Watch List</h1>
            {watchList.length === 0 ? (
                <p className="empty-message">Add Shows or Movies to see them here.</p>
            ) : (
                <ul className='list-group'>
                    {watchList.map((watchItem) => (
                        <WatchListItem 
                            key={watchItem.id}
                            {...watchItem}
                        />
                    ))}
                </ul>
            )}
        </div>
    );
};