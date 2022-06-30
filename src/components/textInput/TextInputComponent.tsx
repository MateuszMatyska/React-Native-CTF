import React from 'react'
import {TextInput, TextStyle} from 'react-native'
import {styles} from './TextInputComponent.styles'

type TextInputComponentPropTypes = {
    onChangeText: () => void
    value: string
    placeholder: string
    style: TextStyle | undefined
}

const TextInputComponent : React.FC<any> = ({
    onChangeText,
    value,
    placeholder,
    style
}: TextInputComponentPropTypes) => <TextInput
    placeholderTextColor={'#696969'}
    onChangeText={onChangeText}
    value={value}
    placeholder={placeholder}
    style={[styles.textInputStyle, style]} />

export default TextInputComponent
