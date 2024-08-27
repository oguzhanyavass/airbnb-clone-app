import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { defaultStyles } from '@/constants/Styles'

const Page = () => {
  return (
    <View style={defaultStyles.footer}>
      <TouchableOpacity style={[defaultStyles.btn, { paddingHorizontal: 20 }]}>
        <Text style={defaultStyles.btnText}>Inbox</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Page;