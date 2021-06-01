import {useState} from 'react';

function CreateRoom(props) {
    const [formState, setFormState] = useState({
        roomName: 'Random Room Name',
        roomType: 'public',
        roomMembers: []
    });

    return (
        <div>
            <label for="rname">Room Name:</label><br/>
            <input type="text" id="rname" name="rname" 
                value={formState.roomName} onChange={(e) => {
                    setFormState((oldState) => {
                        return {
                            ...oldState, roomName: e.target.value
                        }
                    })
                }}/><br/><br/>

            <div>
                <input type="radio" id="public" name="room-type" value="public"
                    checked={formState.roomType === 'public'} onClick={
                        () => setFormState((oldState) => {
                            return {
                                ...oldState, 
                                roomType: 'public',
                                roomMembers: []
                            }
                        })
                    }/>
                <label for="huey">Public</label><br/>
                <input type="radio" id="private" name="room-type" 
                    value="private" 
                    checked={formState.roomType === 'private'} onClick={
                    () => setFormState((oldState) => {
                        return {
                            ...oldState, roomType: 'private'
                        }
                    })
                }/>
                <label for="private">Private</label>
            </div><br/>

            <div>
                <label>Room Members (if private):</label><br/>
                {
                    formState.roomMembers.map((val, index) => {
                        return (
                            <div>
                            <input type="text" id={`mname-${index}`} 
                                name={`mname-${index}`} 
                                value={val} onChange={(e) => {
                                setFormState((oldState) => {
                                    oldState.roomMembers[index] = e.target.value;
                                    return {
                                        ...oldState, 
                                        roomMembers: [...oldState.roomMembers]
                                    }
                                })
                                }}/><br/>
                                </div>
                        )
                    })
                }
                
                <button onClick={(e) => {
                    if (formState.roomType === 'public') {
                        return console.log("Can't add members...");
                    }

                    setFormState((oldState) => {
                        return {
                            ...oldState, 
                            roomMembers: [...oldState.roomMembers, '']
                        }
                    })
                    e.preventDefault();
                }}>Add Members</button>
            </div><br/>

            <button>Submit</button>
        </div>
    );
}

export default CreateRoom;