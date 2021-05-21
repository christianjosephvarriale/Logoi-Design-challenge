const DashBlock = (props) => {
    const {setChat} = props;

    return (
        <div onClick={() => setChat()} style={{
            padding: 32,
            border: "solid black 8px"
        }}>
            Chat Block
        </div>
    )
}

function Dashboard(props) {
    const {setChat} = props;

    return (
        <div>
            <h1>
                Dashboard
            </h1>
            <h2>Public Rooms</h2>
            <DashBlock setChat={setChat}/>
            <h2>Private Rooms</h2>
            <DashBlock setChat={setChat}/>
            <h2>Pending Approval Rooms</h2>
            <DashBlock setChat={setChat}/>
        </div>
    )
}

export default Dashboard;