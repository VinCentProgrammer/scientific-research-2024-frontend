import { NavLink } from "react-router-dom";


function Page403() {
    return (
        <div id="layoutError">
            <div id="layoutError_content">
                <main>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <div className="text-center mt-4">
                                    <h1 className="display-1">403</h1>
                                    <p className="lead">Forbidden</p>
                                    <p>Access to this resource on the server is denied.</p>
                                    <NavLink to="/">
                                        <i className="fas fa-arrow-left me-1"></i>
                                        Return to Home
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Page403;