import React from "react";
import { View } from "react-native";

import ErrorMessage from "../ErrorMessage";
import AppPicker from "../AppPicker";
import { useFormikContext } from "formik";

function AppFormPicker({ items, name, placeholder }) {
  const { setFieldValue, values, errors, touched } = useFormikContext();

  return (
    <View>
      <AppPicker
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </View>
  );
}

export default AppFormPicker;
