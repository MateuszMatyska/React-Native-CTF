import React from 'react'
import {View, Text, TextStyle} from 'react-native'
import {styles} from './TextBoxComponent.styles'

type TextBoxComponentPropTypes = {
    value: string
    style: TextStyle | undefined
}

const TextBoxComponent : React.FC<any> = ({
    value,
    style
}: TextBoxComponentPropTypes) => <View style={styles.container}>
    <Text style={[styles.textBox, style]}>
        {value}
    </Text>
</View>

export default TextBoxComponent
