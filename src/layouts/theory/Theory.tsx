import { useParams } from "react-router-dom";
import ScrollToTopButton from "../../utils/ScrollToTopButton";
import SidebarMenu from "./SidebarMenu";
import { useEffect, useState } from "react";
import TheoryModel from "../../models/TheoryModel";
import { getTheoryByCatId } from "../../api/TheoryAPI";

function Theory() {
    const { theoryCatIdParam } = useParams();

    let theoryCatId = 0;
    try {
        theoryCatId = parseInt(theoryCatIdParam + '');
    } catch (error) {
        theoryCatId = 0;
        console.log('Error', error);
    }
    if (Number.isNaN(theoryCatId))
        theoryCatId = 0;

    const [theory, setTheory] = useState<TheoryModel | null>(null);

    useEffect(() => {
        getTheoryByCatId(theoryCatId)
            .then((result) => {
                if (result != null) {
                    setTheory(result);
                }
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
            });
    }, [theoryCatId]);

    return (
        <div id="layoutSidenav">
            <ScrollToTopButton />
            <div className="container-fluid mt-4" style={{ minHeight: '700px' }}>
                <div className="row">
                    <div className="col-md-3">
                        <SidebarMenu />
                    </div>
                    <div className="col-md-9">
                        <div id="content" style={{ textAlign: 'left' }}>
                            {
                                theory 
                                ?
                                <div dangerouslySetInnerHTML={{ __html: theory?.content }} />
                                : 
                                <div>
                                    Lý thuyết toán rời rạc
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Theory;