import { configureStore, createSlice } from '@reduxjs/toolkit';

const songsSlice = createSlice({
    name: 'song',
    initialState: [],
    reducers: {
        // 'song' + '/' + 'addSong' = 'song/addSong'
        addSong(state, action) {
            console.log(state.length);
            // STATE IS NOT THE BIG STATE OBJECT
            // IN THE STORE
            // IT IS THE PIECE OF STATE MANAGED
            // BY THIS REDUCER
            state.push(action.payload);
        },
        // 'song' + '/' + 'removeSong' = 'song/removeSong'
        removeSong(state, action) {
            //
        },
    },
});

const store = configureStore({
    reducer: {
        songs: songsSlice.reducer,
    },
});

export { store };
export const { addSong } = songsSlice.actions;

// console.log(songsSlice.actions.addSong());