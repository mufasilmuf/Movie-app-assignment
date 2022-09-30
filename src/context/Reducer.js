export function addToList(state, { type, payload }) {
    switch (type) {
        case "add":
            return [...state, payload];

        case "remove":
            return state.filter((movie) => movie.mal_id !== payload);

        default:
            throw new Error();
    }
}

export function initList() {
    const storeList = localStorage.getItem('watchlist');
    const parseList = storeList ? JSON.parse(storeList) : [];
    return parseList;
}