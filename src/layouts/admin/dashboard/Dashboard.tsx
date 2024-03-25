import SideBar from "../sidebar/SideBar";

function Dashboard() {
    return (
        <div id="layoutSidenav">
            <SideBar />
            <div id="layoutSidenav_content">
                <main>
                    Dashboard
                </main>
            </div>
        </div>

    )
}

export default Dashboard;