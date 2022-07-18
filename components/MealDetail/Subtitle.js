import { Text, View, StyleSheet } from "react-native"

const SubTitle = ({ children }) => {
  return (
    <View style={styles.subTitleContainer}>
        <Text style={styles.subTitle}>{children}</Text>
    </View>
  )
}

export default SubTitle
const styles = StyleSheet.create({
    subTitle: {
        color: '#e2b497',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
      },
      subTitleContainer: {
        padding: 6,
        marginHorizontal: 12,
        marginVertical: 4,
        borderBottomColor: '#e2b497',
        borderBottomWidth: 2,
      }
})