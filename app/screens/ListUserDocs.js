import React from 'react'
import {Text} from 'react-native'

export default function ListUserDocs( {route} ) {
    console.log(route.params._id)
    return (
        <div>
            <Text>{route.params._id}</Text>
        </div>
    )
}