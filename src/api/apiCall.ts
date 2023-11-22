import React, { useState } from "react";
import axios from 'axios'


export const fetchByName = async (name: string) => {

    try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`)
        return response.data.meals
    } catch (error) {
        console.log(error)
    }

}


export const fetchById = async (id: string) => {
    try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        return response.data.meals[0]
    } catch (error) {
        console.log(error)
    }
}