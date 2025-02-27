

function Sidebar(){
    return(
        <div className="m-3 position-fixed top-0">
        <div className="d-flex flex-column gap-3">
            <img className= "logo-text" src= "src\assets\Instagram_logo.svg.webp" alt=""/>
            <div><i className="bi bi-house-door"></i>Home</div>
            <div><i className="bi bi-search"></i>Search</div>
            <div><i className="bi bi-compass"></i>Explore</div>
            <div> <i className="bi bi-collection-play-fill"></i>Reels</div>
            <div> <i className="bi bi-chat-left-text"></i>Messages</div>
            <div> <i className="bi bi-bell-fill"></i>Notification</div>
            <div> <i className="bi bi-file-plus"></i>Create</div>
            <div><i className="bi bi-person-circle"></i>Profile</div>

        </div>
        <div className="d-flex flex-column gap-3 position-fixed bottom-0 mb-3">
            <div><i className="bi bi-threads"></i>Threads</div>
            <div> <i className="bi bi-list"></i>More</div>
        </div>
        </div>
        
    )
}

export  default Sidebar