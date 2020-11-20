import React from 'react'
import { Image, Text, View } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

import backIcon from '../../assets/icons/back.png'
import logoImg from '../../assets/logo.png'

import styles from './styles'

interface PageHeaderProps {
  title: string
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  const navigation = useNavigation()

  const handleNavigateToLanding = () => {
    navigation.navigate('Landing')
  }

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <BorderlessButton onPress={handleNavigateToLanding}>
          <Image
            source={backIcon}
            resizeMode="contain"
          />
        </BorderlessButton>

        <Image
          source={logoImg}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

export default PageHeader
