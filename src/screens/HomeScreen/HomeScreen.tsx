import React from 'react'
import { SafeAreaView, View} from 'react-native'
import ButtonComponent from '../../components/button/ButtonComponent'
import { navigate } from '../../navigation/ServiceNavigation'
import {styles} from './HomeScreen.styles'

const HomeScreen: React.FC<any> = () => {
    return <SafeAreaView style={styles.container}>
        <View>
            <ButtonComponent value={'WebView Screen'} onPress={() => {navigate('WebView')}} />
            <ButtonComponent value={'Storage Screen'} onPress={() => {navigate('Storage')}} />
        </View>
    </SafeAreaView>
}

export default HomeScreen;