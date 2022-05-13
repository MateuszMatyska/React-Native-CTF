import React from 'react'
import { SafeAreaView, View } from 'react-native'
import ButtonComponent from '../../components/button/ButtonComponent'
import { StorageService } from '../../services/StorageService'
import { styles } from './StorageScreen.styles'

const StorageScreen: React.FC<any> = () => {

    const storeData = () => {
        const data = [
            'Elliot Alderson', 'Darlene Alderson', 'Angela Moss', 'Tyrell Wellick'
        ]
        StorageService.storeDataObject('people',data) 
    }

    return <SafeAreaView style={styles.container}>
        <View>
            <ButtonComponent value={'Add Records to data base'} onPress={() => {storeData}} />
        </View>
    </SafeAreaView>
}

export default StorageScreen;