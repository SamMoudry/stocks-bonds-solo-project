import React, {useEffect} from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';

function SavedGames() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const savedGames = useSelector((store) => store.setSavedGame);
  const dispatch = useDispatch();

  const deleteHandle = (e) => {
    dispatch({type: 'DELETE_SAVED_GAME', payload: e.target.id});
    dispatch({type: 'GET_SAVED_GAMES', payload: user.id});
  }

  useEffect(() => {
    dispatch({type: 'GET_SAVED_GAMES', payload: user.id})
  }, [dispatch, user]);
  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      {savedGames ? savedGames.map((game) => {
        return (<div key={game.id}><div>{game.description}</div>
                <button id={game.id} onClick={deleteHandle}>Delete</button>
                <button>Edit</button></div>)
      }): <p></p>}
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default SavedGames;
