import Autocomplete from "./Autocomplete";
import Search from "./Search";

function SearchBar({searchValue, setSearchValue, handleSearch}) {
    return (
        <>
            <Search searchValue={searchValue} setSearchValue={setSearchValue} handleSearch={handleSearch}/>
        </>
    );
}

export default SearchBar;