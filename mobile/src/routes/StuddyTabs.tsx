import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import TeacherList from '../screens/TeacherList'
import Favorites from '../screens/Favorites'

const { Navigator, Screen } = createBottomTabNavigator()

const StuddyTabs: React.FC = () => {
  return (
    <Navigator>
      <Screen name="TeacherList" component={TeacherList} />
      <Screen name="Favorites" component={Favorites} />
    </Navigator>
  )
}

export default StuddyTabs
