import SideBar from "../sidebar/SideBar";

function PageList() {
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

export default PageList;