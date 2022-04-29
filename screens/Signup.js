import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Formik, Field, Form, ErrorMessage } from "formik";
import styled, {createGlobalStyle} from 'styled-components';

import * as Yup from 'yup';

const schema = Yup.object().shape({
  fullname: Yup.string()
    .min(2, "Seu nome é muito curto")
    .max(50, "O nome precisa ter 50 ou menos caracteres")
    .required("Por favor, insira um nome"),
  email: Yup.string()
    .email("Seu email está incorreto")
    .required("Por favor, insira o seu e-mail"),
  user: Yup.string()
    .min(2, "Seu usuario é muito curto")
    .max(20, "O usuario precisa ter 20 ou menos caracteres")
    .required("Por favor, insira um usuario"),
  password: Yup.string()
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
    .required('No password provided.') 
})

import { 
  StyledContainer, 
  FormField, 
  GlobalStyle, 
  Titles, 
  Input, 
  ButtonSubmit,
  FormStyle,
  InputErrorMessage
} from '../components/styles.js'


export default function SignUp() {

  const [verifyFullname, setVerifyFullname] = useState()

    return (
      <View style={styles.container}>

        <GlobalStyle/>

        <StyledContainer>

<FormStyle>

        <Image
        style={styles.tinyLogo}
        source={require('../assets/icon-kiskadee.png')}
      />

            <Titles>Crie sua conta</Titles>

            </FormStyle>
      <FormStyle>

            <Formik
            validationSchema={schema}

            initialValues={{
              fullname: '',
              email: '',
              user: '',
              password: ''
            }}
            onSubmit={(values, { setSubmitting }) => {
              const timeOut = setTimeout(() => {
                console.log(values);
                setSubmitting(false);
    
                clearTimeout(timeOut);
              }, 1000);
            }}
            > 
              {props => (

                <form name="contact" method="post" onSubmit={props.handleSubmit}>
             
                  <Input 
                  name="fullname" 
                  type="text" 
                  placeholder='nome' 
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.fullname}
              
                  />
                  {props.errors.fullname && <InputErrorMessage id="feedback">{props.errors.fullname}</InputErrorMessage>}
                  {console.log(props.values)}

                  < Input 
                  autoComplete="email" 
                  name="email" 
                  type="text" 
                  placeholder='email' 
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.email}
                  />
                  {props.errors.email && <InputErrorMessage id="feedback">{props.errors.email}</InputErrorMessage>}

                  <Input 
                  name="user" 
                  type="text" 
                  placeholder='usuario' 
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.user}
                  />
                  {props.errors.user && <InputErrorMessage id="feedback">{props.errors.user}</InputErrorMessage>}

                  <Input 
                  name="password" 
                  type="password" 
                  placeholder='senha'
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.password}
                  />
                  {props.errors.password && <InputErrorMessage id="feedback">{props.errors.password}</InputErrorMessage>}


                </form>
              )}
            </Formik>

</FormStyle>

            <FormStyle>

            <ButtonSubmit type='submit'>Avançar</ButtonSubmit>
            
            </FormStyle>
            </StyledContainer>

        <StatusBar style="auto" />
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    tinyLogo: {
      width: 40,
      height: 40,
      margin: '30px'
    }
  });
  