import React, { useState, useEffect } from 'react'
import { View, ScrollView, Text } from 'react-native'
import { BorderlessButton, RectButton, TextInput } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'

import api from '../../services/api'

import PageHeader from '../../components/PageHeader'
import TeacherItem, { Teacher } from '../../components/TeacherItem'

import styles from './styles'

const TeacherList: React.FC = () => {
  const [teachersList, setTeachersList] = useState<Teacher[]>([])
  const [isFiltersVisible, setIsFiltersVisible] = useState(false)
  const [favorites, setFavorites] = useState<number[]>([])

  const [subject, setSubject] = useState('')
  const [week_day, setWeek_Day] = useState('')
  const [time, setTime] = useState('')

  const loadFavorites = async () => {
    try {
      const response = await AsyncStorage.getItem('@Proffy:favorites')

      if (response) {
        const favoritedTeachers = JSON.parse(response)
        const favoritedIds = favoritedTeachers.map((teachers: Teacher) => teachers.id)

        setFavorites(favoritedIds)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleToggleFiltersvisible = () => {
    setIsFiltersVisible(!isFiltersVisible)
  }

  const handleFiltersSubmit = async () => {
    loadFavorites()

    const response = await api.get('/classes', {
      params: {
        subject,
        week_day,
        time
      }
    })

    setIsFiltersVisible(!isFiltersVisible)
    setTeachersList(response.data)
  }

  return (
    <View style={styles.container}>
      <PageHeader title="Proffys disponíveis" headerRight={(
        <BorderlessButton onPress={handleToggleFiltersvisible}>
          <Feather name="filter" size={20} color="#fff" />
        </BorderlessButton>
      )}>
        {isFiltersVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Matéria</Text>
            <TextInput
              style={styles.input}
              onChangeText={text => setSubject(text)}
              placeholder="Digite a matéria"
              placeholderTextColor="#c1bccc"
            />

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={text => setWeek_Day(text)}
                  placeholder="Qual o dia?"
                  placeholderTextColor="#c1bccc"
                />
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={text => setTime(text)}
                  placeholder="Qual o horário?"
                  placeholderTextColor="#c1bccc"
                />
              </View>
            </View>

            <RectButton
              style={styles.submitButton}
              onPress={handleFiltersSubmit}
            >
              <Text style={styles.submitButtonText}>Filtrar</Text>
            </RectButton>
          </View>
        )}
      </PageHeader>

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16
        }}
      >
        {teachersList.map(teachers =>
          <TeacherItem
            key={teachers.id}
            teacher={teachers}
            favorited={favorites.includes(teachers.id)}
          />)}
      </ScrollView>
    </View>
  )
}

export default TeacherList
