import React from 'react'
import { Image, View, Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

import LandingImage from '../../assets/landing.png'
import studyIcon from '../../assets/icons/study.png'
import giveClassesIcon from '../../assets/icons/give-classes.png'
import heartIcon from '../../assets/icons/heart.png'

import styles from './styles'

const landing: React.FC = () => {
  const navigation = useNavigation()

  const handleNavigateToGiveClasses = () => {
    navigation.navigate('GiveClasses')
  }

  const handleNavigateToStuddy = () => {
    navigation.navigate('Studdy')
  }

  return (
    <View style={styles.container}>
      <Image source={LandingImage} style={styles.banner} />

      <Text style={styles.title}>
        Seja Bem Vindo, {'\n'}
        <Text style={styles.titleBold}>O que deseja fazer?</Text>
      </Text>

      <View style={styles.buttonsContainer}>
        <RectButton
          style={[styles.button, styles.buttonPrimary]}
          onPress={handleNavigateToStuddy}
        >
          <Image source={studyIcon} />

          <Text style={styles.buttonText}>Estudar</Text>
        </RectButton>
        <RectButton
          style={[styles.button, styles.buttonSecondary]}
          onPress={handleNavigateToGiveClasses}
        >
          <Image source={giveClassesIcon} />

          <Text style={styles.buttonText}>Dar Aulas</Text>
        </RectButton>
      </View>

      <Text style={styles.totalConnection}>
        Total de 285 conexões já realizadas {' '}
        <Image source={heartIcon} />
      </Text>
    </View>
  )
}

export default landing
