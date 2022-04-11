import React, { memo } from 'react'
import { Image, StyleSheet,  View } from 'react-native'

import { Text } from '@components'
import { IMovie, IMusicAlbum } from '@models'
import { globalStyles } from '@globalStyles'
import { layout } from '@utils'

type ITunesMediaCardProps = {
    mediaInfo: IMusicAlbum & IMovie
    mediaType: 'music' | 'movie'
}

export const ITunesMediaCard = memo(({mediaInfo, mediaType}: ITunesMediaCardProps) => {
    const isMovie = mediaType === 'movie'
    return (
        <View style={[globalStyles.rowBetween, styles.container]} >
            <View style={styles.imgBox}> 
                <Image source={{uri: mediaInfo.artworkUrl100}} style={styles.img} />
            </View>
            <View style={styles.content}>
                <Text text={ isMovie? mediaInfo.trackName : mediaInfo.collectionName} fontSize={20} fontWeight='600' />
                <Text text={mediaInfo.artistName} style={{paddingVertical: layout.pixelSizeVertical(5)}} />
                <Text text={`£ ${isMovie? mediaInfo.trackPrice || 'Price is not available' : mediaInfo.collectionPrice || 'Price is not available'}`} />
            </View>
        </View>
    )
})

const styles = StyleSheet.create({
    container: {
    marginBottom: layout.pixelSizeVertical(20)
    },
    imgBox: {
        width: layout.widthPixel(100),
        height: layout.heightPixel(100),
        alignSelf: 'flex-start',
    },
    img: {
        flex: 1,
        width: layout.widthPixel(100),
        height: layout.heightPixel(100),
    },
    content: {
        flex: 1,
        alignSelf: 'flex-start',
        paddingLeft: layout.pixelSizeHorizontal(10)
    }
})
