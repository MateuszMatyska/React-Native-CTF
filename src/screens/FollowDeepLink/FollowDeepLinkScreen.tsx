import React, {useState, useEffect} from 'react'
import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { SafeAreaView, View} from 'react-native'
import ButtonComponent from '../../components/button/ButtonComponent'
import {styles} from './FollowDeepLink.styles'

type FollowDeepLinkScreenProps = {
    DeepLink: {follow: boolean | undefined};
};
  
  type FollowDeepLinkScreenRouteProp = RouteProp<FollowDeepLinkScreenProps, 'DeepLink'>;
  
  type DetailsScreenNavigationProp = NativeStackNavigationProp<
    FollowDeepLinkScreenProps,
    'DeepLink'
  >;
  
  type Props = {
    route: FollowDeepLinkScreenRouteProp;
    navigation: DetailsScreenNavigationProp;
  };

const FollowDeepLinkScreen: React.FC<Props> = (props) => {
    const {follow} = props.route.params;
    const [isFollowed, setIsFollowed] = useState<boolean>(false)

    useEffect(() => {
        if(follow) {
            setIsFollowed(true)
        }
    }, [])

    const followAction = () => {
        if(isFollowed) {
            setIsFollowed(false)
            return 
        }

        setIsFollowed(true)
    }

    return <SafeAreaView style={styles.container}>
        <View style={styles.container}>
            <View style={[styles.dogBackground, isFollowed ? styles.followed : styles.unfollowed]}>
                <View style={styles.dog}>
                    <View style={[styles.dogEars, isFollowed ? styles.followed : styles.unfollowed ]}>
                        <View style={styles.dogEar} />
                        <View style={styles.dogEar} />
                    </View>
                    <View style={styles.dogHead}>
                        <View style={styles.dogEyes}>
                            <View style={styles.dogEye}/>
                            <View style={styles.dogEye}/>
                        </View>
                        <View style={styles.dogNose}/>
                        <View style={styles.dogMouth}/>
                    </View>
                </View>
            </View>
            <ButtonComponent value={'Follow Dog'} onPress={followAction} />
        </View>
    </SafeAreaView>
}

export default FollowDeepLinkScreen;