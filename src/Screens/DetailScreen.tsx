import { View, Text, FlatList, ActivityIndicator, ScrollView, SafeAreaView } from 'react-native'
import React, { FC, useEffect, useState } from 'react'
import { fetchByName } from '../api/apiCall'
import { useNavigation, useRoute } from '@react-navigation/native';
import MealList from '../components/MealList'



const DetailScreen = () => {

    
    const route = useRoute()

    const { name }: any = route.params;

    const [meals, setMeals] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchDetail = async (name: string) => {
        const response = await fetchByName(name)
        setLoading(false)
        if (response) {
            setMeals(response)
        }
    }


    useEffect(() => {
        fetchDetail(name)
    }, [])


    const renderMeal = (({ item }: any) => <MealList item={item}></MealList>)

    return (
        <SafeAreaView
            style={{ flex: 1 }}>
            {
                loading ? <ActivityIndicator size={'large'}></ActivityIndicator> : (
                    <View style={{ alignItems: 'center', backgroundColor: 'orange' }}>
                        <FlatList
                            data={meals}
                            renderItem={renderMeal}
                            showsVerticalScrollIndicator={false}
                        />
                    </View>
                )

            }

        </SafeAreaView >
    )
}

export default DetailScreen