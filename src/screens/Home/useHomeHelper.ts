import { useEffect, useRef, useState } from "react"

import { axiosInstance } from "@utils"
import { IMovie, IMusicAlbum } from "@models"
import { useITunesMediaSearch } from "@hooks"

export const useHomeHelper = () => {
    const [search, setSearch] = useState('')
    const [enableSearch, setEnableSearch] = useState(false)
    const [mediaType, setMediaType] = useState<'music' | 'movie'>('music')

    const mediaOptions = ['music', 'movie']

    const handleEnableSearch = (enable: boolean) => {
        setEnableSearch(enable)
    }

    const handleFilter = (mediaType: 'music'| 'movie') => {
        setMediaType(mediaType);
        if(search){
            setEnableSearch(true)
        }
    }

    const {data : searchResult, isError, error, isLoading, isRefetching, refetch} = useITunesMediaSearch({search, enableSearch, mediaType, handleEnableSearch})


    return {
        search,
        mediaType,
        mediaOptions,
        searchResult,
        isLoading,
        isRefetching,
        isError,
        error,
        refetch,
        handleEnableSearch,
        handleFilter,
        setMediaType,
        setSearch,
    }
}
