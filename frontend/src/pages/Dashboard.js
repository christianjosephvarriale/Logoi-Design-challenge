import { useEffect, useState } from "react";
import { InfiniteLoader, List } from 'react-virtualized';

const DashBlock = (props) => {
    return (
        <div style={{
            padding: 32,
            border: "solid black 8px"
        }}>
            Chat Block
        </div>
    )
}

function Dashboard(props) {
    const [page, setPage] = useState(null)
    const [rooms, setRooms] = useState({
        publicRooms: [],
        privateRooms: [],
        pendingRooms: []
    })

    function rowRenderer ({ key, index, style}) {
        return (
            <DashBlock />
        )
    }

    loadMorePublicRows = ({ nextId }) => {
        return fetch(`api/rooms/public?page=${nextId}&limit=25`)
          .then(res => {
            setRooms({
                publicRooms: res.data.publicRooms,
                privateRooms: res.data.privateRooms,
                pendingRooms: res.data.pendingRooms
            })
        })
    }

    loadMorePrivateRows = ({ nextId }) => {
        return fetch(`api/rooms/private?page=${nextId}&limit=25`)
          .then(res => {
            setRooms({
                publicRooms: res.data.publicRooms,
                privateRooms: res.data.privateRooms,
                pendingRooms: res.data.pendingRooms
            })
        })
    }

    loadMorePendingRows = ({ nextId }) => {
        return fetch(`api/rooms/pending?page=${nextId}&limit=25`)
          .then(res => {
            setRooms({
                publicRooms: res.data.publicRooms,
                privateRooms: res.data.privateRooms,
                pendingRooms: res.data.pendingRooms
            })
        })
    }

    // get rooms on a user
    useEffect(() => {

        // if the user doesn't exist inside MongoDB document, this'll return only rooms collection
        axios({
            method: 'get',
            url: `api/rooms`,
        })     
        .then(res=> {
            setRooms({
                publicRooms: res.data.publicRooms,
                privateRooms: res.data.privateRooms,
                pendingRooms: res.data.pendingRooms
            })
        })
        .catch(error => {
            console.log(error)
        })

    }, [])

    const {setChat} = props;

    return (
        <>
            <h1> Dashboard </h1>
            <h2>Public Rooms</h2>

                <InfiniteLoader
                    isRowLoaded={isRowLoaded}
                    loadMoreRows={loadMoreRows}
                    rowCount={remoteRowCount}
                >
                    {({ onRowsRendered, registerChild }) => (
                    <List
                        height={200}
                        ref={registerChild}
                        rowHeight={20}
                        rowRenderer={rowRenderer}
                        width={300}
                    />
                    )}
                </InfiniteLoader>

            <h2>Private Rooms</h2>

                <InfiniteLoader
                    isRowLoaded={isRowLoaded}
                    loadMoreRows={loadMoreRows}
                    rowCount={remoteRowCount}
                >
                    {({ onRowsRendered, registerChild }) => (
                    <List
                        height={200}
                        ref={registerChild}
                        rowHeight={20}
                        rowRenderer={rowRenderer}
                        width={300}
                    />
                    )}
                </InfiniteLoader>

            <h2>Pending Approval Rooms</h2>

                <InfiniteLoader
                    isRowLoaded={isRowLoaded}
                    loadMoreRows={loadMoreRows}
                    rowCount={remoteRowCount}>

                    {({ onRowsRendered, registerChild }) => (
                    <List
                        height={200}
                        ref={registerChild}
                        rowHeight={20}
                        rowRenderer={rowRenderer}
                        width={300}
                    />
                    )}
                </InfiniteLoader>
        </>
    )
}

export default Dashboard;