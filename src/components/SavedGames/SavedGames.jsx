import React, {useEffect, useState} from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import './SavedGames.css';

function SavedGames() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const savedGames = useSelector((store) => store.setSavedGame);
  const dispatch = useDispatch();
  const history = useHistory();

  const deleteHandle = (e) => {
    dispatch({type: 'DELETE_SAVED_GAME', payload: e.target.id});
    dispatch({type: 'GET_SAVED_GAMES', payload: user.id});
  }

  const editName = (event, game) => {
    history.push(`/detail/${game.id}`)
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
                <button onClick={(event) => editName(event, game)}>Edit</button></div>)
      }): <h1>You have no saved games!  GO PLAY!!!</h1>}
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default SavedGames;
