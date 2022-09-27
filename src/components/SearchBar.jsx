import Autocomplete from "./Autocomplete";
import Search from "./Search";

function SearchBar({searchValue, setSearchValue}) {
    return (
        <>
            <Search searchValue={searchValue} setSearchValue={setSearchValue}/>
            <Autocomplete/>
        </>
    );
}

export default SearchBar;