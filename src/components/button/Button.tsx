import React from 'react';
import {Button, StyleSheet, Text} from 'react-native';
import {handlePress} from './HandlePress';

const MyButton = () => {
  const [state, setState] = React.useState<boolean>(false);
  const [data, setData] = React.useState<any>(null);

  // useEffect(() => {
  //   axios.get('https://jsonplaceholder.typicode.com/todos/1').then(res => {
  //     setData(res.data);
  //   });
  // }, []);

  return (
    <>
      <Button title="Click me" onPress={() => handlePress(setData)} />
      {state && (
        <Text testID="message" style={styles.text}>
          Hello World
        </Text>
      )}
      {data && <Text style={styles.text}>{data.title}</Text>}
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
});

export default MyButton;
