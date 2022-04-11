import React from 'react'
import {  FlatList, View, TouchableOpacity  } from 'react-native'

import { SafeAreaView, Text, SearchBar, Error, ITunesMediaCard, Loader } from '@components'
import { globalStyles } from '@globalStyles'
import {useHomeHelper} from './useHomeHelper'
import { styles } from './styles'

export const Home = () => {  

    const {
        searchResult,
        isLoading,
        isRefetching,
        isError,
        error,
        search,
        mediaType,
        mediaOptions,
        refetch,
        handleEnableSearch,
        handleFilter,
        setSearch,
    } = useHomeHelper()


    if(isLoading) {
        return <Loader visible={true} />
    }

    if(isError) {
        return <Error error={error} handleRetry={() => refetch()}  />
    }

    return (
        <SafeAreaView>
            {isRefetching? <Loader visible={true} />: null}
            <View style={styles.header} >
                <SearchBar 
                    value={search} 
                    onChangeText={(input) => setSearch(input)} 
                    returnKeyType='search'
                    onEndEditing={() => handleEnableSearch(true)}
                    containerStyles={styles.search}
                />
                <View style={[globalStyles.rowStart, styles.mediaOptions]}>
                    {mediaOptions.map((media) =>  {
                        const isActive = media === mediaType
                        return (
                            <TouchableOpacity key={media}  activeOpacity={0.7} style={[styles.mediaOption, isActive && styles.mediaOptionActive]} onPress={() => handleFilter(media)} >
                                <Text text={media} color={isActive? '#fff': '#000'}  />
                            </TouchableOpacity>
                        )
                    })}
                </View>
            </View>
            <FlatList 
                data={searchResult? searchResult : []}
                ListEmptyComponent={
                    searchResult && searchResult?.length === 0 ?
                    <View style={[globalStyles.rowCenter, { flex: 1}]} >
                        <Text  text='No results' />
                    </View> : null
                }
                renderItem={({item}) => <ITunesMediaCard mediaInfo={item} mediaType={mediaType} /> } 
                keyExtractor={item => `${item.artistId} ${mediaType === 'movie' ? item.trackId : item.collectionId}`}
                contentContainerStyle={[globalStyles.container, styles.container]}
            />
        </SafeAreaView>
    )
}

