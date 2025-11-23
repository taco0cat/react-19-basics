
function UserGreeting({isLoggedIn = false, username = "Guest"}){
    // if (isLoggedIn){
    //     return <h2>Welcome {username}</h2>
    // }
    // else{
    //     return <h2>Please log in to Continue!</h2>
    // }

    const welcomeMsg = <h2 className="welcome-msg">Welcome {username}</h2>
    const loginPrompt = <h2 className="login-prompt">Please log in to continue!</h2>

    return(
        isLoggedIn ? welcomeMsg : loginPrompt
    );
}

export default UserGreeting