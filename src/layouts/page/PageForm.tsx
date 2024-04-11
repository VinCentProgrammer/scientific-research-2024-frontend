import SideBar from "../sidebar/SideBar";

function PageForm(): JSX.Element {
    return (
        <div id="layoutSidenav">
            <SideBar />
            <div id="layoutSidenav_content" className="text-start">
                <main>
                    <div id="content" className="container-fluid">
                        <div className="card">
                            <div className="card-header font-weight-bold">
                                Add New Page
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="form-group mt-3">
                                        <label htmlFor="name">Name Page</label>
                                        <input className="form-control" type="text" name="name" id="name" />
                                    </div>
                                    <div className="form-group mt-3">
                                        <label htmlFor="desc">Short Description</label>
                                        <input className="form-control" type="text" name="name" id="desc" />
                                    </div>
                                    <div className="form-group mt-3">
                                        <label htmlFor="detail">Detail</label>
                                        <input className="form-control" type="text" name="name" id="detail" />
                                    </div>
                                    <button type="submit" className="btn btn-primary  mt-3">Add</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default PageForm;
