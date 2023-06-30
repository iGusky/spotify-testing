import searchRepository from "../../data/network/repositories/searchRepository";

export default {
    get: async (queryParam: string): Promise<any> => {
        return await searchRepository.search(queryParam)
    }
}