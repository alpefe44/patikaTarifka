import { View, Text, Image, Dimensions, ScaledSize, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParams } from '../Navigator'

type Props = {
    item: any
}

const { height, width }: ScaledSize = Dimensions.get('window')

const MealList = (props: Props) => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();

    return (
        <Pressable
            onPress={() => {
                navigation.navigate("FoodDetailScreen", {
                    id: props.item.idMeal
                })
            }}

        >
            <View style={{ position: 'relative', width: width * .8, height: 200, margin: 5, }}>
                <Image source={{ uri: props.item.strMealThumb }} style={{ flex: 1, borderRadius: 15, borderBottomLeftRadius: 0, resizeMode: 'center' }} ></Image>
                <View style={{ position: 'absolute', bottom: 0, right: 0, backgroundColor: '#000000', width: '100%', padding: 10, opacity: 0.6 }}>
                    <Text style={{ textAlign: 'right', textTransform: 'uppercase', fontSize: 22, fontWeight: 'bold', color: 'white' }}>{props.item.strMeal}</Text>
                </View>
            </View>
        </Pressable>



    )
}

export default MealList