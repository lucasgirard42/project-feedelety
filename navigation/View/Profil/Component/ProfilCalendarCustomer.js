import React, {useState} from 'react';
import {View, Button, Platform, StyleSheet, Text} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function ProfilCalendarCustomer () {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  const heure = date.toLocaleTimeString('fr-FR', { hour: "2-digit", minute: '2-digit', second: undefined }).slice(0, -3);

  return (
    <View>
      <View style={styles.container} >
        <Button style={styles.buttonCalendar} onPress={showDatepicker} title="Show date " />
        <Text>{date.toLocaleDateString('fr-FR', { hour: "numeric", minute: 'numeric' })}</Text>
      </View>
      <View>
        <Button onPress={showTimepicker} title="Show time " />
        <Text>{heure}</Text> 
         {/* pas possible de passer en option les seconde undefined sur Adroid, use slice  */}
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};


const styles = StyleSheet.create({

   
})