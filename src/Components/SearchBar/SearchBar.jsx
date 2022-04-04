import { useState } from 'react';

const SearchBar = ({searchForGames}) => {
const [searchTerm, setSearchTerm] = useState('');

function handleSubmit(event) {
    event.preventDefault();
    searchForGames(searchTerm);
}

return (
    <div>
        <form onSubmit={handleSubmit}>
        <label>Game Search By Name: </label>
        <input type="text" value={searchTerm} placeholder="Happy Hunting (⌐■_■)" onChange={(event) => setSearchTerm(event.target.value)} />
        <button type="submit">Search</button>
        </form>
    </div>
);
}
export default SearchBar;