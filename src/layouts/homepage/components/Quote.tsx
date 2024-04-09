function Quote() {
    return (
        <div className="py-5 bg-light">
            <div className="container px-5 my-5">
                <div className="row gx-5 justify-content-center">
                    <div className="col-lg-10 col-xl-7">
                        <div className="text-center">
                            <div className="fs-4 mb-4 fst-italic">"Discrete mathematics provides the mathematical foundations for many computer science courses, including data structures, algorithms, database theory, automata theory, formal languages, compiler theory, computer security, and operating systems!"</div>
                            <div className="d-flex align-items-center justify-content-center">
                                <img className="rounded-circle me-3" src={'./../../../images/kenneth-rosen.jpg'} alt="..."
                                style={{maxWidth: '100px'}}
                                />
                                <div className="fw-bold">
                                    ― Kenneth H. Rosen
                                    <span className="fw-bold text-primary mx-1">/</span>
                                    Discrete Mathematics and Its Applications
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Quote;