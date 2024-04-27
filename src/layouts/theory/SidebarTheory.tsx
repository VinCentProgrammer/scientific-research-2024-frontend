import { useEffect, useState } from "react";
import TheoryCatModel from "../../models/TheoryCatModel";
import { getAllTheoryCats } from "../../api/TheoryCatAPI";
import { NavLink } from "react-router-dom";

function SidebarTheory() {
    const [theoryCategories, setTheoryCategories] = useState<TheoryCatModel[]>([]);

    useEffect(() => {
        getAllTheoryCats()
            .then(
                result => {
                    setTheoryCategories(result);
                }
            )
    }, [])

    const renderSubcategories = (subcategories: TheoryCatModel[]) => {
        if (subcategories.length === 0) return null;

        return (
            <ul className="sub-menu">
                {subcategories.map(category => (
                    <li key={category.theoryCatId}>
                        <NavLink to={`/theory/${category.theoryCatId}`} title="">{category.name}</NavLink>
                        {renderSubcategories(getSubcategories(category.theoryCatId))}
                    </li>
                ))}
            </ul>
        );
    };

    const getSubcategories = (parentId: number): TheoryCatModel[] => {
        return theoryCategories.filter(category => category.theoryParentCatId === parentId);
    };

    return (
        <div className="sidebar fl-left">
            <div className="section" id="category-product-wp">
                <button className="btn btn-success w-100 p-3" style={{fontWeight: 'bold'}}>CƠ SỞ LÝ THUYẾT</button>
                <div className="section-detail">
                    <ul className="list-item">
                        {theoryCategories.filter(category => category.theoryParentCatId === 1).map(category => (
                            <li key={category.theoryCatId} className="">
                                <NavLink to={`/theory/${category.theoryCatId}`} title="">{category.name}</NavLink>
                                {renderSubcategories(getSubcategories(category.theoryCatId))}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SidebarTheory;