import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (key: string, value: string) => {
    try {
        await AsyncStorage.setItem(key, value)
    } catch (e) {
        errorMessage(`${e}`)
    }
}

const storeDataObject = async (key: string, value: string[]) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(key, jsonValue)
    } catch (e) {
        errorMessage(`${e}`)
    }
}

const getData = async (key: string,) => {
    try {
        const value = await AsyncStorage.getItem(key)
        if (value !== null) {
            return value
        }
        return undefined
    } catch (e) {
        errorMessage(`${e}`)
    }
}

const getDatabject = async (key: string,) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key)
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        errorMessage(`${e}`)
    }
}


const errorMessage = (error: string): void => {
    console.warn(error)
}

export const StorageService = {
    getData,
    getDatabject,
    storeData,
    storeDataObject,
}
