import React, { useState } from 'react'
import { View, ScrollView } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect } from '@react-navigation/native'

import PageHeader from '../../components/PageHeader'
import TeacherItem, { Teacher } from '../../components/TeacherItem'

import styles from './styles'

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState([])

  const loadFavorites = async () => {
    try {
      const response = await AsyncStorage.getItem('@Proffy:favorites')

      if (response) {
        const favoritedTeachers = JSON.parse(response)

        setFavorites(favoritedTeachers)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useFocusEffect(() => {
    loadFavorites()
  })

  return (
    <View style={styles.container}>
      <PageHeader title="Meus Proffys favoritos" />

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16
        }}
      >
        {favorites.map((teachers: Teacher) => (
          <TeacherItem
            key={teachers.id}
            teacher={teachers}
            favorited
          />
        ))}
      </ScrollView>
    </View>
  )
}

export default Favorites
