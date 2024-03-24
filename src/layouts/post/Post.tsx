import PostItem from "./components/PostItem";

function Post() {
    return (
        <div className="text-start">
            <section className="py-5">
                <div className="container px-5">
                    <h1 className="fw-bolder fs-5 mb-4">Company Blog</h1>
                    <div className="card border-0 shadow rounded-3 overflow-hidden">
                        <div className="card-body p-0">
                            <div className="row gx-0">
                                <div className="col-lg-6 col-xl-5 py-lg-5">
                                    <div className="p-4 p-md-5">
                                        <div className="badge bg-primary bg-gradient rounded-pill mb-2">News</div>
                                        <div className="h2 fw-bolder">Article heading goes here</div>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique delectus ab doloremque, qui doloribus ea officiis...</p>
                                        <a className="stretched-link text-decoration-none" href="#!">
                                            Read more
                                            <i className="bi bi-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-xl-7"><div className="bg-featured-blog" style={{ backgroundImage: `url('https://dummyimage.com/700x350/343a40/6c757d')` }}></div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-5 bg-light">
                <div className="container px-5">
                    <div className="row gx-5">
                        <div className="col-xl-8">
                            <h2 className="fw-bolder fs-5 mb-4">News</h2>
                            <div className="mb-4">
                                <div className="small text-muted">May 12, 2023</div>
                                <a className="link-dark" href="#!"><h3>Start Bootstrap releases Bootstrap 5 updates for templates and themes</h3></a>
                            </div>
                            <div className="mb-5">
                                <div className="small text-muted">May 5, 2023</div>
                                <a className="link-dark" href="#!"><h3>Bootstrap 5 has officially landed</h3></a>
                            </div>
                            <div className="mb-5">
                                <div className="small text-muted">Apr 21, 2023</div>
                                <a className="link-dark" href="#!"><h3>This is another news article headline, but this one is a little bit longer</h3></a>
                            </div>
                            <div className="text-end mb-5 mb-xl-0">
                                <a className="text-decoration-none" href="#!">
                                    More news
                                    <i className="bi bi-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="card border-0 h-100">
                                <div className="card-body p-4">
                                    <div className="d-flex h-100 align-items-center justify-content-center">
                                        <div className="text-center">
                                            <div className="h6 fw-bolder">Contact</div>
                                            <p className="text-muted mb-4">
                                                For press inquiries, email us at
                                                <br />
                                                <a href="#!">press@domain.com</a>
                                            </p>
                                            <div className="h6 fw-bolder">Follow us</div>
                                            <a className="fs-5 px-2 link-dark" href="#!"><i className="bi-twitter"></i></a>
                                            <a className="fs-5 px-2 link-dark" href="#!"><i className="bi-facebook"></i></a>
                                            <a className="fs-5 px-2 link-dark" href="#!"><i className="bi-linkedin"></i></a>
                                            <a className="fs-5 px-2 link-dark" href="#!"><i className="bi-youtube"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-5">
                <div className="container px-5">
                    <h2 className="fw-bolder fs-5 mb-4">Featured Stories</h2>
                    <div className="row gx-5">
                        <PostItem />
                        <PostItem />
                        <PostItem />
                    </div>
                    <div className="text-end mb-5 mb-xl-0">
                        <a className="text-decoration-none" href="#!">
                            More stories
                            <i className="bi bi-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Post;