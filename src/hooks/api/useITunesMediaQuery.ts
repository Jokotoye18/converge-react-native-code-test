import { useQuery } from "react-query"
import { IMovie, IMusicAlbum } from "@models"
import { axiosInstance } from "@utils"

type useITunesMediaSearchArgs = {
    search: string
    enableSearch: boolean
    mediaType: 'movie' | 'music'
    handleEnableSearch: (enable: boolean) => void
}

export const useITunesMediaSearch = ({search, enableSearch, mediaType, handleEnableSearch}: useITunesMediaSearchArgs) => {
    const entity = mediaType === 'music' ? 'album': 'movie'
    return useQuery<IMovie[]| IMusicAlbum[], unknown>(['search', mediaType], () => axiosInstance.get(`search?term=${search}&country=GB&media=${mediaType}&entity=${entity}`)
    .then((res) =>  res.data.results), {
        onSettled: () => handleEnableSearch(false),
        enabled: enableSearch && search? true : false
    })
}