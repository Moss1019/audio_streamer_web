import axios from "axios";
import { baseUrl } from "./axios";

export function getArtists(onSuccess: (artists: string[]) => void, onError: (err: any) => void) {
    axios.get(`${baseUrl}/api/content`)
        .then(res => {
            onSuccess(res.data);
        })
        .catch(onError);
}

export function getAlbums(artist: string, onSuccess: (albums: string[]) => void, onError: (err: any) => void) {
    axios.get(`${baseUrl}/api/content/${artist}`)
        .then(res => {
            onSuccess(res.data);
        })
        .catch(onError);
}

export function getSongs(artist: string, album: string, 
        onSuccess: (songs :string[]) => void, onError: (err: any) => void) {
    axios.get(`${baseUrl}/api/content/${artist}/${album}`)
        .then(res => {
            onSuccess(res.data);
        })
        .catch(onError);
}

