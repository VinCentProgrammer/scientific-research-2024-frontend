import SideBar from "../sidebar/SideBar";

function PostList() {
    return (
        <div id="layoutSidenav">
            <SideBar />
            <div id="layoutSidenav_content">
                <main>
                    Page List
                </main>
            </div>
        </div>
    )
}

export default PostList;