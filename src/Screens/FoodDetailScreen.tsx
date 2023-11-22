import { View, Text, Image, ActivityIndicator, Dimensions, ScrollView, Button } from 'react-native'
import React, { useState, useEffect, useLayoutEffect } from 'react'
import { useRoute, useNavigation } from '@react-navigation/native'
import { fetchById } from '../api/apiCall'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParams } from '../Navigator'



const { width, height }: any = Dimensions.get('window');

const FoodDetailScreen = () => {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParams, "FoodDetailScreen">>();

    const route = useRoute();
    const { id }: any = route.params;

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);

    const fetchData = async (id: string) => {
        const response = await fetchById(id);
        if (response) {
            setLoading(false)
            setData(response)
        }
    }
    useEffect(() => {
        fetchData(id)
    }, [id])

    function PageDetail() {

        useLayoutEffect(() => {
            navigation.setOptions({
                title: `${data?.strMeal}`,
                headerTitleAlign:'center',
                headerTitleStyle : {color : 'orange'}
            })
        }, [id])

        return (
            <ScrollView showsVerticalScrollIndicator={false} style={{ width: width }}>
                <Image source={{ uri: data?.strMealThumb }} style={{ width: '100%', height: 300 }}></Image>
                <View style={{ borderBottomWidth: .8, padding: 8, borderColor: 'gray' }}>
                    <Text style={{ color: 'red', fontSize: 22, fontWeight: 'bold' }}>{data?.strMeal}</Text>
                    <Text style={{ color: 'red', fontSize: 22, fontWeight: 'bold' }}>{data?.strArea}</Text>
                </View>
                <View>
                    <Text style={{ textAlign: 'left', fontSize: 16, paddingLeft: 8 , padding:3 }}>{data?.strInstructions}</Text>
                    <View style={{ marginHorizontal: 10, marginVertical: 3 }}>
                        <Button title='Watch On Youtube' color={'red'} onPress={() => { alert('Tik') }} ></Button>
                    </View>

                </View>


            </ScrollView>

        )
    }

    return (
        <View style={{ flex: 1 }}>
            {
                loading ? <ActivityIndicator size={'large'}></ActivityIndicator> : (
                    <PageDetail></PageDetail>
                )
            }
        </View>
    )
}

export default FoodDetailScreen