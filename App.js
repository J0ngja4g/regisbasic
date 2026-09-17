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
import RegisterScreen from "./src/screens/registerScreen"; 
import StudentListScreen from "./src/screens/StudentListScreen"; // R ใหญ่ เปลี่ยนตรงข้างล่างด้วย<registerScreen />

export default function App() {
  const [tab,setTab] = useState("register");

  const [reloadKey, setReloadKey] = useState(0);
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={colors.bg} />
      <SQLiteProvider databaseName={DATABASE_NAME} onInit={initDb}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>ระบบลทบเรียนนิสิต</Text>
          </View>

          <View style={styles.tabs}>
            <TabButton
              label="ลงทะเบียน"
              active={tab === "register"}
              onPress={() => setTab("register")}
            />
            <TabButton
              label="รายชื่อนิสิต"
              active={tab === "list"}
              onPress={() => setTab("list")}
            />
          </View>
          {
            tab === "register" ? (
              <RegisterScreen onRegistered={() => setReloadKey(reloadKey + 1)} /> //แท็บเป็นรีจิสเตอร์ ให้รีจิสเตอร์สกรีนขึ้น 
            ) : (
              <StudentListScreen reloadKey={reloadKey} /> //ถ้าไม่ม่งั้นให้เป็นสกรีนรายชื่อนิสิตแทน
            )
          }
        </View>
      </SQLiteProvider>
    </>
  );
}

function TabButton({ label, active, onPress }) {
  return (
    <Pressable style={[styles.tab, active && styles.tabActive]} onPress={onPress}>
      <Text style={[styles.tabText, active && styles.tabTextActive]}>
        {label}
      </Text>
    </Pressable>
  )
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


