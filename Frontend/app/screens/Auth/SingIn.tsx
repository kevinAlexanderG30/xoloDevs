import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native'
import React, { useState } from 'react';
import { COLORS, FONTS } from '../../constants/theme'
import { GlobalStyleSheet } from '../../constants/StyleSheet'
import { useTheme } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from '../../navigation/RootStackParamList'
import Input from '../../components/Input/Input'
import { IMAGES } from '../../constants/Images'
import Button from '../../components/Button/Button'
import {useAuthStore} from "../../store/useAuthStore";
import {SignInViewModel} from "./ViewModel/SignInViewModel";


type SingInScreenProps = StackScreenProps<RootStackParamList, 'SingIn'>;

const SingIn = ({navigation} : SingInScreenProps) => {

    const {
        isAuthenticated,
        refresh,
        access,
        user_id,
        login,
        logout
    } = useAuthStore();

    const [password, setPassword] = useState<string | null>(null);
    const [username, setUsername] = useState<string | null>(null);
    const [usernameError, setUsernameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string>('');

    const theme = useTheme();
    const { colors }: { colors : any} = theme;

    const [isFocused , setisFocused] = useState(false);
    const [isFocused2 , setisFocused2] = useState(false);

    const handleSignIn = async () => {
        let hasError = false;
        console.log("===> entro")

        // Validar campos vacíos
        if (!username) {
            setUsernameError(true);
            hasError = true;

        } else {
            setUsernameError(false);
        }

        if (!password) {
            setPasswordError(true);
            hasError = true;
        } else {
            setPasswordError(false);
        }

        if (hasError) {
            setErrorMessage("Todos los campos son requeridos");
            return;
        }

        try {
            const response = await SignInViewModel(username, password);
            console.log("==> response", response);
            if (response.status === 200) {
                login(response.refresh, response.access, response.user_id);
                setErrorMessage('');
                console.log("==> cambiando")
                navigation.navigate('DrawerNavigation',{screen : 'Home'} )
            } else {
                setErrorMessage('Error en la autenticación, revisa tus credenciales');
            }
        } catch (error) {
            setErrorMessage('Error en la autenticación, revisa tus credenciales');
        }
    };

  return (
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.card }}>
          <View style={[GlobalStyleSheet.container, { justifyContent: 'center', alignItems: 'center', paddingVertical: 50 }]}>
              <Image
                  style={{ resizeMode: 'contain', height: 36, width: 120 }}
                  source={theme.dark ? IMAGES.appVacaLogoHorizontal : IMAGES.appVacaLogoHorizontal}
              />
          </View>
          <ScrollView style={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
              <View style={[GlobalStyleSheet.container, { flexGrow: 1, paddingBottom: 0, paddingHorizontal: 30, paddingTop: 0 }]}>
                  <View style={{}}>
                      <View style={{ marginBottom: 30 }}>
                          <Text style={[styles.title1, { color: colors.title }]}>Iniciar Sesión</Text>
                          <Text style={[styles.title2, { color: colors.title }]}>¡Bienvenido de nuevo!</Text>
                      </View>
                      <View style={[GlobalStyleSheet.container, { padding: 0 }]}>
                          <Text style={[styles.title3, { color: '#8A8A8A' }]}>Usuario</Text>
                      </View>
                      <View style={{ marginBottom: 20, marginTop: 10 }}>
                          <Input
                              onFocus={() => setisFocused(true)}
                              onBlur={() => setisFocused(false)}
                              onChangeText={(value) => setUsername(value)}  // Guardar el nombre de usuario
                              isFocused={isFocused}
                              inputBorder
                              placeholder="username@ejemplo.com"
                          />
                      </View>
                      {usernameError && <Text style={{ color: 'red' }}>El usuario es requerido</Text>}

                      <View style={[GlobalStyleSheet.container, { padding: 0 }]}>
                          <Text style={[styles.title3, { color: '#8A8A8A' }]}>Contraseña</Text>
                      </View>
                      <View style={{ marginBottom: 10, marginTop: 10 }}>
                          <Input
                              onFocus={() => setisFocused2(true)}
                              onBlur={() => setisFocused2(false)}
                              backround={colors.card}
                              onChangeText={(value) => setPassword(value)}  // Guardar la contraseña
                              isFocused={isFocused2}
                              type={'password'}
                              inputBorder
                              placeholder="********"
                          />
                      </View>
                      {passwordError && <Text style={{ color: 'red' }}>La contraseña es requerida</Text>}

                      {errorMessage ? <Text style={{ color: 'red', textAlign: 'center' }}>{errorMessage}</Text> : null}
                  </View>
                  <View style={{ marginTop: 30 }}>
                      <Button
                          title={"Acceder"}
                          onPress={handleSignIn}
                          style={{ borderRadius: 52 }}
                      />
                      <View
                          style={[GlobalStyleSheet.flex, {
                              marginBottom: 20,
                              marginTop: 10,
                              paddingHorizontal: 10,
                              justifyContent: 'flex-start',
                              gap: 5
                          }]}
                      >
                          <Text style={[styles.text, { color: colors.title }]}>¿Has olvidado tu contraseña?</Text>
                          <TouchableOpacity
                              activeOpacity={0.5}
                              onPress={() => navigation.navigate('ForgotPassword')}
                          >
                              <Text style={{ ...FONTS.fontMedium, fontSize: 14, color: COLORS.primary }}>Reiniciar aquí</Text>
                          </TouchableOpacity>
                      </View>
                      <View style={{ marginBottom: 15 }}>
                          <Text style={[styles.title2, { color: colors.title, textAlign: 'center', opacity: .5 }]}>¿No tienes una cuenta?</Text>
                      </View>
                      <Button
                          title={"Crear una Cuenta"}
                          onPress={() => navigation.navigate('SignUp')}
                          text={COLORS.title}
                          color={COLORS.secondary}
                          style={{ borderRadius: 52 }}
                      />
                  </View>
              </View>
          </ScrollView>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    text:{
        ...FONTS.fontRegular,
        fontSize:14,
        color:COLORS.title,
    },
    title1:{
        ...FONTS.fontSemiBold,
         fontSize: 24,
        color: COLORS.title,
        marginBottom: 5 
    },
    title2:{
        ...FONTS.fontRegular,
        fontSize: 14,
        color: COLORS.title, 
    },
    title3:{
        ...FONTS.fontMedium,
        fontSize:14,
        color:'#8A8A8A'
    }
})

export default SingIn