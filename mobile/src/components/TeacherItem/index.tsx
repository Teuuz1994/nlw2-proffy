import React from 'react'
import { Image, Text, View } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import heartOutlineIcon from '../../assets/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/icons/unfavorite.png'
import whatsappIcon from '../../assets/icons/whatsapp.png'

import styles from './styles'

const TeacherItem: React.FC = () => {
  return (
    <View style={styles.container} >
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{ uri: 'https://github.com/Teuuz1994.png' }}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>Matheus da Guia de Campos</Text>
          <Text style={styles.subject}>Biologia</Text>
        </View>
      </View>

      <Text style={styles.bio}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Cras consequat augue nec auctor tristique. Suspendisse faucibus egestas est,{'\n'}
      nec egestas nulla imperdiet at. Phasellus lacinia malesuada leo a venenatis.
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {'   '}
          <Text style={styles.priceValue}>R$ 20,00</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton style={[styles.favoriteButton, styles.favorited]}>
            {/* <Image source={heartOutlineIcon} /> */}
            <Image source={unfavoriteIcon} />
          </RectButton>

          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>
              Entrar em contato
          </Text>
          </RectButton>
        </View>
      </View>
    </View>
  )
}

export default TeacherItem
