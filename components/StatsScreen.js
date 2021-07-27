import * as React from 'react'
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Button,
  } from 'react-native';
  
import {LineChart} from 'react-native-charts-wrapper';
import {Picker} from '@react-native-picker/picker';


const sales = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120]
const month = sales.slice(11)
const sixMonths = sales.slice(6)
const year = sales.slice(0)
const data = {
  'Year': year,
  '6 Months': sixMonths,
  '1 Month': month
}

const StatsScreen = ({ navigation }) => {

    const [value, setValue] = React.useState(year)
    const [selectedValue, setSelectedValue] = React.useState('Year');

    React.useEffect(() => {
      setValue(data[selectedValue])
  }, [selectedValue])

    return (
        <>
        <Text>{value[0]}</Text>
        <Button
            title="Go home"
            onPress={() =>
                navigation.navigate('Home', { name: 'Home' })
            }
            />

    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => {
          setSelectedValue(itemValue)
        }}
      >
          <Picker.Item label='Year' value='Year' />
          <Picker.Item label='6 Months' value='6 Months' />
          <Picker.Item label='1 Month' value='1 Month' />

      </Picker>
    </View>

        <View style={{flex: 1}}>
            <View style={styles.container1}>
                <LineChart style={styles.chart}
                    data={{dataSets:[{label: "demo", values: [{y: 1}, {y: 2}, {y: 1}]}]}}
                />
            </View>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container1: {
      flex: 1,
      backgroundColor: '#F5FCFF'
    },
    chart: {
      flex: 1
    },
    container: {
      flex: 1,
      paddingTop: 40,
      alignItems: "center"
    }
  });

export default StatsScreen
