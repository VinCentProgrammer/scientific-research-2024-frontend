import { NavLink } from 'react-router-dom';

function Banner() {
    return (
        <div className="container px-5">
            <div className="row gx-5 align-items-center justify-content-center">
                <div className="col-lg-8 col-xl-7 col-xxl-6">
                    <div className="my-5 text-center text-xl-start">
                        <h1 className="display-5 fw-bolder text-white mb-2">
                            Xin chào, đây là website hỗ trợ toán rời rạc - UTC2
                        </h1>
                        <p className="lead fw-normal text-white-50 mb-4">
                            Giúp bạn tra cứu, giải bài tập và trao đổi kiến thức Toán rời rạc
                        </p>
                        <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                            <NavLink className="btn btn-primary btn-lg px-4 me-sm-3" to="#features">Bắt đầu ngay</NavLink>
                            <NavLink className="btn btn-outline-light btn-lg px-4" to="#!">Tìm hiểu thêm</NavLink>
                        </div>
                    </div>
                </div>
                <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
                    <img className="img-fluid rounded-3 my-5" src={'./../../../images/discrete-math-support-utc2.jpg'} alt="..." style={{ width: '450px' }} />
                </div>
            </div>

        </div>
    )
}

export default Banner;