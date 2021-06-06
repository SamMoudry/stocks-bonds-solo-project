import {useDispatch} from 'react-redux';
import {useParams} from 'react-router';
import React, {useState} from 'react';
import './EditForm.css';

function EditForm() {
    const params = useParams();
    const dispatch = useDispatch();
    const [description, setDescription] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({type: 'UPDATE_DESCRIPTION', payload: {description: description, id: params.id}})
    }
    
    return (
        <div>
            <h2>Edit Description</h2>
            <form onSubmit={handleSubmit}>
                <input placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)} />
                <input type='submit' value='Update Description' />
            </form>
        </div>
    );
}

export default EditForm;