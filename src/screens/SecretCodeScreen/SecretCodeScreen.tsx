import React, { useState } from 'react'
import { SafeAreaView, View, ToastAndroid, NativeModules } from 'react-native'
import ButtonComponent from '../../components/button/ButtonComponent'
import TextBoxComponent from '../../components/textBox/TextBoxComponent'
import TextInputComponent from '../../components/textInput/TextInputComponent'
import { styles } from './SecretCodeScreen.styles'

const LoginScreen: React.FC<any> = () => {
    const [code, setCode] = useState<string>('')

    const checkCodeAction = (): void => {
        const { SecretCodeModule } = NativeModules
        const result = SecretCodeModule.checkSecretCode(
            code, 
            () => { ToastAndroid.show('Yup you are right it is a secret code', 10) }, 
            () => {ToastAndroid.show('Wrong Code, try again', 10)}
        )
    }

    return <SafeAreaView style={styles.container}>
        <View style={[styles.container, styles.elementContainer]}>
            <TextBoxComponent
                value={"Enter Secret Code"}
            />
        </View>
        <View style={[styles.container, styles.elementContainer]}>
            <TextInputComponent
                placeholder={"Code"}
                value={code}
                onChangeText={setCode}
            />
        </View>
        <View style={[styles.container, styles.elementContainer]}>
            <ButtonComponent
                onPress={checkCodeAction}
                value={"Check Code !"}
            />
        </View>
    </SafeAreaView>
}

export default LoginScreen;