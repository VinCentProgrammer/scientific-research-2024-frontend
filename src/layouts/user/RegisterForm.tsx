function RegisterForm() {
    return (
        <section className="py-5" style={{ backgroundColor: '#eee' }}>
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-11">
                        <div className="card text-black" style={{ borderRadius: '25px' }}>
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                                        <form className="mx-1 mx-md-4">
                                            {/* Username */}
                                            <div className="d-flex flex-row align-items-center mb-4  text-start">
                                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label" htmlFor="username">Username <span className="text-danger">(*)</span></label>
                                                    <input type="text" required id="username" className="form-control" />
                                                </div>
                                            </div>

                                            {/* Email */}
                                            <div className="d-flex flex-row align-items-center mb-4  text-start">
                                                <i className="fa-solid fa-envelope fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label" htmlFor="email">Email <span className="text-danger">(*)</span></label>
                                                    <input type="email" required id="email" className="form-control" />
                                                </div>
                                            </div>

                                            {/* Password */}
                                            <div className="d-flex flex-row align-items-center mb-4  text-start">
                                            <i className="fa-solid fa-key fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label" htmlFor="password">Password <span className="text-danger">(*)</span></label>
                                                    <input type="password" required id="password" className="form-control" />
                                                </div>
                                            </div>

                                            {/* Repeat Password */}
                                            <div className="d-flex flex-row align-items-center mb-4  text-start">
                                            <i className="fa-solid fa-key fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label" htmlFor="passwordRepeat">Repeat password <span className="text-danger">(*)</span></label>
                                                    <input type="password" required id="passwordRepeat" className="form-control" />
                                                </div>
                                            </div>

                                            <div className="form-check d-flex justify-content-center mb-5">
                                                <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                                                <label className="form-check-label" htmlFor="form2Example3">
                                                    I agree all statements in <a href="#!">Terms of service</a>
                                                </label>
                                            </div>

                                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <button type="button" className="btn btn-primary btn-lg">Register</button>
                                            </div>

                                        </form>

                                    </div>
                                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                            className="img-fluid" alt="Sample image" />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RegisterForm;