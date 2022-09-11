import { createSlice } from "@reduxjs/toolkit"

interface ContentState {
    currentArtist: string,
    currentAlbum: string
}

const initialState: ContentState = {
    currentAlbum: '',
    currentArtist: ''
}

export const contentSlice = createSlice({
    name: 'content',
    initialState,
    reducers: {
        changeArtist: (state, action) => {
            return {
                ...state,
                currentArtist: action.payload
            }
        },
        changeAlbum: (state, action) => {
            return {
                ...state,
                currentAlbum: action.payload
            }
        }
    }
})

export const { changeArtist, changeAlbum } = contentSlice.actions;

export default contentSlice.reducer;
