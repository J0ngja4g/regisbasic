import { View, Text, TextInput } from "react-native";
import { styles } from "../styles/FieldStyles";
import { colors } from "../styles/theme";

const Field = ({ label, hint, error, style, ...inputProps }) => { 
  return ( // {}หายไปจุดหนึ่ง แต่ไม่บอก
    <View style={[styles.container, style]}>
      <Text style={styles.label}>{Field}</Text> 
      <TextInput
        style={[styles.input, error && style.inputError]}
        placeholderTextColor={colors.dim}
        {...inputProps}
      />
      {error ? (
        <Text>{error}</Text>
      ) : hint ? ( // ผิดนี่อีก1
        <Text style={styles.errorText}>{hint}</Text>
      ) : null}
    </View>
  );
};

export default Field;
