import { StyleSheet } from 'react-native';

export const styles: any = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dogBackground: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        margin: 55,
    },
    dog: {
        width: 100,
        height: 180,
        backgroundColor: '#996633',
    },
    dogEars: {
        height: 60,
        width: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    dogEar: {
        width: 40,
        height: 60,
        backgroundColor: '#996633',
    },
    dogHead: {
        width: 100,
        height: 120,
        backgroundColor: '#996633',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dogEyes: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    dogEye: {
        width: 10,
        height: 10,
        backgroundColor: '#000000',
        marginHorizontal: 5
    },
    dogNose: {
        width: 30,
        height: 30,
        backgroundColor: '#000000',
    },
    dogMouth: {
        width: 10,
        height: 10,
        backgroundColor: '#FF0000',
        marginTop: 10
    },
    followed: {
        backgroundColor: '#0000ff'
    },
    unfollowed: {
        backgroundColor: '#00FF00'
    }
});
