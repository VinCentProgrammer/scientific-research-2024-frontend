import { useParams } from "react-router-dom";
import ScrollToTopButton from "../../utils/scroll/ScrollToTopButton";
import SidebarMenu from "./SidebarTheory";
import { useEffect, useState } from "react";
import TheoryModel from "../../models/TheoryModel";
import { getTheoryByCatId } from "../../api/TheoryAPI";
import { getTheoryByKeyword } from "../../api/TheoryKeywordAPI";

function Theory() {
    const { theoryCatIdParam } = useParams();
    const [theory, setTheory] = useState<TheoryModel | null>(null);
    const [keyword, setKeyword] = useState<string>('');
    const [searchResult, setSearchResult] = useState<TheoryModel | null>(null);
    const [statusSearch, setStatusSearch] = useState<boolean>(false);

    let theoryCatId = 0;
    try {
        theoryCatId = parseInt(theoryCatIdParam + '');
    } catch (error) {
        theoryCatId = 0;
        console.log('Error', error);
    }
    if (Number.isNaN(theoryCatId))
        theoryCatId = 18;

    useEffect(() => {
        getTheoryByCatId(theoryCatId)
            .then((result) => {
                if (result != null) {
                    setTheory(result);
                    setStatusSearch(false);
                }
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
            });
    }, [theoryCatId]);

    const handleClickBtnSearch = async () => {
        setSearchResult(await getTheoryByKeyword(keyword.toLowerCase()));
        setStatusSearch(true);
    }

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Ngăn chặn hành động mặc định của phím Enter trên form
            handleClickBtnSearch();
        }
    };

    return (
        <div id="layoutSidenav" className="my-2">
            <ScrollToTopButton />
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-3">
                        <div className="row mb-4">
                            <div className="container m-auto">
                                <form className="d-flex" onSubmit={handleClickBtnSearch}>
                                    <input
                                        className="form-control me-2" style={{ height: '60px' }}
                                        type="search"
                                        placeholder="Enter your keyword?"
                                        aria-label="Search"
                                        value={keyword}
                                        onChange={(e) => setKeyword(e.target.value)}
                                        onKeyPress={handleKeyPress}
                                    />
                                    <button
                                        className="btn btn-outline-success w-25"
                                        type="button"
                                        onClick={handleClickBtnSearch}
                                    >Search</button>
                                </form>
                            </div>
                        </div>
                        <SidebarMenu />
                    </div>
                    <div className="col-md-9">
                        <div id="content" style={{
                            textAlign: 'left', background: '#f4f4f4',
                            borderRadius: '10px',
                            padding: '25px',
                            minHeight: '700px',
                            marginBottom: '40px'
                        }} className="">
                            {
                                theory && !statusSearch
                                    ?
                                    <div dangerouslySetInnerHTML={{ __html: theory?.content }} />
                                    :
                                    (statusSearch && searchResult)
                                        ?
                                        <div>
                                            <h4 className="p-2 text-end fs-6">
                                                Kết quả tìm: <span style={{ fontWeight: 'bold' }}>"{keyword}"</span>
                                            </h4>
                                            <div dangerouslySetInnerHTML={{ __html: searchResult.content }} />
                                        </div>
                                        :
                                        <div>There are no results!</div>
                            }

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Theory;