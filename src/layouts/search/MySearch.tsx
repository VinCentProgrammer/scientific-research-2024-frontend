import ScrollToTopButton from "../../utils/ScrollToTopButton";
import SearchForm from "./SearchForm";

function MySearch() {
    return (
        <div style={{minHeight: '700px', background: '#fff9f9'}} className="py-5">
            <SearchForm />
            <ScrollToTopButton />
        </div>
    )
}

export default MySearch;