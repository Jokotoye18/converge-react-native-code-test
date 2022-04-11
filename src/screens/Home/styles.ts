import { StyleSheet, } from 'react-native'

import { globalStyles } from '@globalStyles'
import { layout } from '@utils'

export const styles = StyleSheet.create({
    header: {
        marginHorizontal: globalStyles.container.paddingHorizontal,
    },
    search: {
        marginTop: layout.pixelSizeVertical(20)
    },
    mediaOptions: {
        marginVertical: layout.pixelSizeVertical(10)
    },
    mediaOption: {
        paddingVertical: layout.pixelSizeVertical(5),
        paddingHorizontal: layout.pixelSizeHorizontal(20),
        marginRight: layout.pixelSizeHorizontal(15),
        backgroundColor: 'transparent',
        borderWidth: 0.5,
        borderRadius: 4
    },
    mediaOptionActive: {
        backgroundColor: '#1E016F'
    },
    container: {
        paddingTop: layout.pixelSizeVertical(20)
    }
})
