import React, {useState} from 'react'
import { SafeAreaView, View, StyleSheet, Text} from 'react-native'
import {WebView} from 'react-native-webview'
import ButtonComponent from '../../components/button/ButtonComponent'
import TextInputComponent from '../../components/textInput/TextInputComponent'
import {styles} from './WebViewScreen.style'

const WebViewScreen: React.FC<any> = () => {
    const [path, setPath] = useState<string>('https://reactnative.dev/')
    const [uriPath, setUriPath] = useState<string>('https://reactnative.dev/')

    const setUriPathAction = () => {
        setUriPath(path)
    }

    return <SafeAreaView style={styles.container}>
        <View style={styles.wrapper}>
        <View style={styles.pathContainer}>
            <View style={styles.sectionWrapper}>
                <TextInputComponent 
                    placeholder={"Enter path..."}
                    value={path}
                    onChangeText={setPath}
                />
            </View>
            <View style={styles.sectionWrapper}>
                <ButtonComponent 
                    value={'Set path'}
                    onPress={setUriPathAction}
                />
            </View>
        </View>
        <WebView source={{ uri: uriPath }} style={styles.webview}/>
        </View>
    </SafeAreaView>
}

export default WebViewScreen;
