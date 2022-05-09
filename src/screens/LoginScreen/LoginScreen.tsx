import React, {useState} from 'react'
import {SafeAreaView, View} from 'react-native'
import { navigate } from '../../navigation/ServiceNavigation'
import ButtonComponent from '../../components/button/ButtonComponent'
import TextBoxComponent from '../../components/textBox/TextBoxComponent'
import TextInputComponent from '../../components/textInput/TextInputComponent'
import {styles} from './LoginScreen.styles'

const LoginScreen: React.FC<any> = () => {
    const loginValue = "admin"
    const passwordValue = 'pass123'

    const [login, setLogin] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const loginUser = (): void => {
        if (login === loginValue && password === passwordValue) {
            navigate('Home')
        }
    }

    return <SafeAreaView style={styles.container}>
        <View style={[styles.container, styles.elementContainer]}>
            <TextBoxComponent 
                value={"Login"}
            />
        </View>
        <View style={[styles.container, styles.elementContainer]}>
            <TextInputComponent 
                placeholder={"Login"}
                value={login}
                onChangeText={setLogin}
            />
            <TextInputComponent 
                placeholder={"Password"}
                value={password}
                onChangeText={setPassword}
            />
        </View>
        <View style={[styles.container, styles.elementContainer]}>
            <ButtonComponent
                onPress={loginUser}
                value={"LogIn !"}
            />
        </View>
    </SafeAreaView>
}

export default LoginScreen;