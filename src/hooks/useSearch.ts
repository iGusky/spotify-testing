import {Ref, ref} from "vue"
import search from "../arc/domain/useCase/search.ts"
import {Artist, ArtistResponse} from "../models/Artist.ts";


const useSearch = () => {

    const artistQuery: Ref = ref<string>("");
    const artistList: Ref = ref<Artist[]>([]);
    const searchArtist = async (): Promise<any> => {
        const response: ArtistResponse<Artist> = await search.get(artistQuery.value);
        artistList.value = response.artists.items
    };

    return {
        artistList, artistQuery, searchArtist
    }
}

export default useSearch