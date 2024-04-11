import ScrollToTopButton from "../../utils/ScrollToTopButton";
import SidebarMenu from "./SidebarMenu";
import TheoryContent from "./TheoryContent";

function Theory() {
    return (
        <div id="layoutSidenav">
            <ScrollToTopButton />
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-3">
                        <SidebarMenu />
                    </div>
                    <div className="col-md-9">  
                        <TheoryContent/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Theory;