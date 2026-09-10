/**
 * แก้เพิ่มที่ ลองไล่อ่านดู
 * 1.Field
 * 2.registerScreen
 */
import { SQLiteProvider } from "expo-sqlite";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { DATABASE_NAME, initDb } from "./src/db/database";
import RegisterScreen from "./src/screens/registerScreen"; // R ใหญ่ เปลี่ยนตรงข้างล่างด้วย<registerScreen />
import { styles } from "./src/styles/appstyles";
import { colors } from "./src/styles/theme";

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={colors.bg} />
      <SQLiteProvider databaseName={DATABASE_NAME} onInit={initDb}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>ระบบลทบเรียนนิสิต</Text>
          </View>
          <RegisterScreen /> 
        </View>
      </SQLiteProvider>
    </>
  );
}

/* ทำไมของเอิงพังตรงนี้ไม่รู้ ปล่อยไว้งี้ก่อนแหละ ไม่ต้องทำอะไร
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});*/


