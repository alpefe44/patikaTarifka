import { View, Text, ActivityIndicator, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import useFetch from '../api/useFetch';
import CategoryList from '../components/CategoryList';

const URL: string = "https://www.themealdb.com/api/json/v1/1/categories.php";

const CategoryScreen = () => {

    const { data, loading } = useFetch(URL)

    const dataRenderer = ({ item }: any) => <CategoryList item={item} />

    return (
        <View style={{ flex: 1 }}>
            <View style={{ alignItems: 'center', backgroundColor: 'white', padding: 8 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 22 }}>Categories</Text>
            </View>
            {
                loading ? <ActivityIndicator size={'large'}></ActivityIndicator> : (
                    <View style={{ flex: 1, backgroundColor: 'orange' }}>
                        <FlatList
                            data={data}
                            renderItem={dataRenderer}
                        ></FlatList>
                    </View>
                )
            }
        </View>
    )
}

export default CategoryScreen