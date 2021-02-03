import React from "react";
import { Image } from "react-native";

import styles from "./styles";

import * as Yup from "yup";

import AppForm from "../../components/forms/AppForm";
import AppText from "../../components/AppText";
import AppFormField from "../../components/forms/AppFormField";
import SubmitButton from "../../components/forms/SubmitButton";
import Screen from "../../components/Screen";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  return (
    <Screen>
      <Image
        style={styles.logo}
        source={require("../../assets/logo/logo_horizontal_g.png")}
      />
      <AppText style={styles.motto}>Sua encomenda a qualquer horário!</AppText>
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <AppText style={styles.password}>Esqueceu a senha?</AppText>
        <SubmitButton title="Entrar" style={styles.button} />
      </AppForm>
    </Screen>
  );
}

export default LoginScreen;
