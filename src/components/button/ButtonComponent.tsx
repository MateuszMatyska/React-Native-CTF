import React from 'react'
import {TouchableOpacity, Text, TextStyle} from 'react-native'
import {styles} from './ButtonComponent.styles'

enum ButtonType {
    primary = 'primary',
    secondary = 'secondary'
}

type ButtonComponentPropTypes = {
    onPress: () => void
    value: string
    style: TextStyle | undefined
    type: ButtonType
}

const ButtonComponent : React.FC<any> = ({
    value,
    style,
    onPress,
    type = ButtonType.primary
}: ButtonComponentPropTypes) => <TouchableOpacity
    onPress={onPress} 
    style={styles.container}
    >
    <Text style={[type === ButtonType.primary ? styles.primaryBtn : styles.secondaryBtn, style]}>
        {value}
    </Text>
</TouchableOpacity>

export default ButtonComponent
