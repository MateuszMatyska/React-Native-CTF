import { navigate } from '../navigation/ServiceNavigation'

export const handleUrl = (url: string): void => {
    const urlArray = url.split('/')

    if(urlArray[3] === 'link'){
        if(urlArray[4] === 'follow'){
            navigate('DeepLink', {follow: true})
        }
        
        navigate('DeepLink', {follow: false})
    }
}

export const handleUrlError = (url: string): void => {
    console.warn(url)
}