import { useEffect, useState, ChangeEvent } from "react";
import SideBar from "../sidebar/SideBar";
import { findUser, getUsers } from "../../api/UserAPI";
import UserRow from "./UserRow";
import UserModel from "../../models/UserModel";
import { Pagination } from "../../utils/Pagination";
// import { Search } from "react-bootstrap-icons";


const UserList: React.FC<{}> = () => {
    const [listUser, setListUser] = useState<UserModel[] | null>(null);
    const [loadingData, setLoadingData] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [currPage, setCurrPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [keyword, setKeyword] = useState('');
    const [temKeyword, setTemKeyword] = useState('');

    useEffect(() => {
        if (keyword === '') {
            getUsers(currPage - 1)
                .then(
                    res => {
                        setListUser(res.result);
                        setTotalPages(res.totalPages);
                        setLoadingData(false);
                    }
                )
                .catch((error) => {
                    setLoadingData(true);
                    setError(error.message);
                })
        } else {
            findUser(keyword)
                .then(
                    res => {
                        setListUser(res.result);
                        setTotalPages(res.totalPages);
                        setLoadingData(false);
                    }
                )
                .catch((error) => {
                    setLoadingData(true);
                    setError(error.message);
                })
        }

    }, [currPage, keyword])

    const paginate = (currPage: number) => {
        setCurrPage(currPage);
    }

    const onSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTemKeyword(e.target.value);
    }

    const handleSearch = () => {
        setKeyword(temKeyword);
    }

    if (loadingData) {
        return (
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        )
    }

    if (error) {
        return (
            <div>Gặp lỗi: {error}</div>
        )
    }

    if (listUser?.length === 0) {
        return (
            <div>Không có sách</div>
        )
    }

    return (
        <div id="layoutSidenav">
            <SideBar />
            <div id="layoutSidenav_content">
                <main>
                    <div id="content" className="container-fluid text-start">
                        <div className="card">
                            <div className="card-header font-weight-bold d-flex justify-content-between align-items-center">
                                <h5 className="m-0 ">Danh sách thành viên</h5>
                                <div className="form-search form-inline">
                                    <form action="#">
                                        <input type="" className="form-control form-search" placeholder="Tìm kiếm"
                                            onChange={onSearchInputChange}
                                            value={temKeyword}
                                        />
                                        <button className="btn btn-outline-success" type="button" onClick={handleSearch}>
                                            Search
                                            {/* <Search /> */}
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="analytic">
                                    <a href="" className="text-primary">Trạng thái 1<span className="text-muted">(10)</span></a>
                                    <a href="" className="text-primary">Trạng thái 2<span className="text-muted">(5)</span></a>
                                    <a href="" className="text-primary">Trạng thái 3<span className="text-muted">(20)</span></a>
                                </div>
                                <div className="form-action form-inline py-3 row">
                                    <div className="col-md-2">
                                        <select className="form-control mr-1" id="">
                                            <option>Action</option>
                                            <option>Delete</option>
                                            <option>Order By Name</option>
                                        </select>
                                    </div>
                                </div>
                                <table className="table table-striped table-checkall">
                                    <thead>
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">Username</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">First name</th>
                                            <th scope="col">Last name</th>
                                            <th scope="col">Active</th>
                                            <th scope="col">Created At</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            listUser?.map((user) => (
                                                <UserRow key={user.userId} user={user} />
                                            ))
                                        }
                                    </tbody>
                                </table>
                                <nav aria-label="Page navigation example">
                                    <Pagination currentPage={currPage} totalPages={totalPages} paginate={paginate} />
                                </nav>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>

    )
}

export default UserList;