import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useForm, Controller } from 'react-hook-form';
import { Button, Text, TextInput, View } from 'react-native';
import { Guard } from './Guard';
import { styles } from '../../Style';

export const Login = (props) => {

    React.useEffect(() => {
        (async() => {
            const uid = await AsyncStorage.getItem('uid')
            const jwt = await AsyncStorage.getItem('jwt')
            // console.log('jwt', jwt)

            fetch('http://localhost:5000/authenticated', {
                method: 'GET',
                headers: { uid: uid, Cookie: `access_token=${jwt}` },
                credentials: 'include'
            }).then(async (res) => {
                if (res.ok) {
                    setMe(await res.json())
                    Guard.authenticated = true
                    navigation.navigate('Base')
                }
            }).catch(err => console.log(err))
        })()
    }, [])

    const { setMe, navigation } = props

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            username: '',
            password: ''
        }
    })

    const onSubmit = async (data) => {
        setMe(await Guard.login(data.username, data.password))
        if (Guard.isAuthenticated()) {
            navigation.navigate('Base')
        }
    }

    return (
        <View style={styles.container}>
            <Text style={{ fontWeight: "bold", fontSize: 24 }}>Please sign in</Text>

            <Controller control={control} rules={{ required: true }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput style={styles.input} onBlur={onBlur} onChangeText={onChange} value={value} placeholder="Username" />
                )}
                name="username"
            />
            {errors.username && <Text>Username is required.</Text>}

            <Controller control={control} rules={{ required: true }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput style={styles.input} onBlur={onBlur} onChangeText={onChange} value={value} secureTextEntry={true} placeholder="Password" />
                )}
                name="password"
            />
            {errors.password && <Text>Password is required.</Text>}

            <Button title='Submit' onPress={handleSubmit(onSubmit)} />
        </View>
    )
}