import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

import giveClassesBgImage from '../../assets/give-classes-background.png'

import styles from './styles'

const GiveClasses: React.FC = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <ImageBackground
        source={giveClassesBgImage}
        style={styles.backgroundContainerSize}
        resizeMode="contain"
      >
        <Text style={styles.title}>
          Quer ser um Proffy?
        </Text>
        <Text style={styles.description}>
          Para começar, você deve se cadastrar como professor na nossa plataforma web.
        </Text>
      </ImageBackground>

      <RectButton
        style={styles.confirmationButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.confirmationButtonText}>
          Tudo bem
        </Text>
      </RectButton>
    </View>
  )
}

export default GiveClasses
