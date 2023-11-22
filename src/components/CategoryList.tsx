import { Text, View, Image, Pressable } from 'react-native'
import React, { FC, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParams } from '../Navigator';

type Props = {
    item: any;
}

const CategoryList: FC<Props> = ({ item }) => {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();

    return (
        <Pressable onPress={() => {
            navigation.navigate("DetailScreen", {
                name: item.strCategory
            })
        }}>
            <View style={{ paddingHorizontal: 14, backgroundColor: 'white', margin: 10, flexDirection: 'row', alignItems: 'center', borderTopLeftRadius: 50, borderBottomLeftRadius: 50, gap: 15 }}>
                <Image style={{ width: 100, minHeight: 100, resizeMode: 'contain' }} source={{ uri: item.strCategoryThumb }}></Image>
                <Text style={{ fontSize: 26, color: 'black' }}>{item.strCategory}</Text>
            </View>
        </Pressable>
    )
}

export default CategoryList

