import ScrollToTopButton from "../../utils/ScrollToTopButton";
import SearchForm from "../homepage/components/SearchForm";

function Problem() {
    return (
        <div style={{minHeight: '700px', background: '#fff9f9'}} className="py-5">
            <SearchForm />
            <ScrollToTopButton />
        </div>
    )
}

export default Problem;