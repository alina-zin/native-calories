import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import { Picker, TextInput } from 'react-native-web';

export default function App() {

  const [weight, setWeight] = useState(0);
  const [intensity, setIntensity] = useState(1.3);
  const [gender, setGender] = useState(0);
  const [calories, setCalories] = useState(0);

  const intensities = Array();
  intensities.push({label: 'light', value: 1.3});
  intensities.push({label: 'usual', value: 1.5});
  intensities.push({label: 'moderate', value: 1.7});
  intensities.push({label: 'hard', value: 2});
  intensities.push({label: 'very hard', value: 2.2});

  const genders = [
    {label: 'Male', value: 'male'},
    {label: 'Female', value: 'female'}
  ]


  function calculate() {
    let result = 0;
    if (gender === 'male') {
      result = (879 + 10.2 * weight) * intensity;
    } else {
      result = (795 + 7.18 * weight) * intensity;
    }
    setCalories(result);
  }


  return (
    <View style={styles.container}>
      <Text style={styles.label}>Weight</Text>
      <TextInput
        value={weight}
        onChangeText={text => setWeight(text)}
        keyboardType='number-pad'
        placeholder='Enter your weight'></TextInput>
      <Text style={styles.label}>Intensity</Text>
      <Picker
        selectedValue={intensity}
        onValueChange={(itemValue) => setIntensity(itemValue)}
      >
      {intensities.map((intensity) => (
        <Picker.Item label={intensity.label} value={intensity.value} />
      ))}
      </Picker>
      <Text style={styles.label}>Gender</Text>
      <RadioForm
        radio_props={genders}
        buttonSize={10}
        initial={gender}
        onPress={(value) => {setGender(value)}}
      />
      <Text>{calories.toFixed(0)}</Text>
      <Button onPress={calculate} title='Calculate'></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginLeft: 5,
    marginTop: 5,
  },
  label: {
    marginBottom: 10,
  }
});
