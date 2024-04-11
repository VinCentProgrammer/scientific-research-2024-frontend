import { useEffect, useState } from "react";
import { getTheoryById } from "../../api/TheoryAPI";
import TheoryModel from "../../models/TheoryModel";

function TheoryContent() {
    const [theory, setTheory] = useState<TheoryModel | null>(null);

    useEffect(() => {
        getTheoryById(1)
            .then((res) => {
                if (res != null) {
                    setTheory(res);
                }
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
            });
    }, []);


    return (
        <div id="content" style={{textAlign: 'left'}}>
            {
                theory &&
                <div dangerouslySetInnerHTML={{ __html: theory?.content }} />
            }
        </div>
    )
}

export default TheoryContent;