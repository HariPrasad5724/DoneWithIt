import React from 'react'
import {Text} from 'react-native'

export default function DisplayDocs({route}) {
    return (
        <Text>{route.params.id}</Text>
    )
}
