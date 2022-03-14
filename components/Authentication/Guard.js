import AsyncStorage from '@react-native-async-storage/async-storage';

export class Guard {

    static authenticated = false

    static login = async (username, password) => {

        const request = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({ username, password })
        }

        const res = await fetch('http://localhost:5000/login', request)

        if (res.ok) {
            console.log('res', res.headers.get('Set-Cookie'))
            Guard.authenticated = true
            const content = await res.json()
            await AsyncStorage.setItem('jwt', res.headers.get('Set-Cookie'))
            await AsyncStorage.setItem('uid', content.uid)
            return { ...content.user }
        }
    }

    static logout = async () => {
        const request = {
            method: 'GET',
            headers: { 'uid': await AsyncStorage.getItem('uid') },
            credentials: 'include'
        }

        try {
            const res = await fetch('http://localhost:5000/logout', request);
            await AsyncStorage.clear()
            Guard.authenticated = false;
        } catch (err) {
            return console.log(err);
        }
    }

    static isAuthenticated = () => {
        console.log('authenticated', Guard.authenticated)
        return Guard.authenticated
    }
}