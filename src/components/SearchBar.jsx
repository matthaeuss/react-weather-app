import Autocomplete from "./Autocomplete";
import Search from "./Search";

function SearchBar(props) {
    return (
        <>
            <Search/>
            <Autocomplete/>
        </>
    );
}

export default SearchBar;