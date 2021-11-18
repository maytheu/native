import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const Button = ({text, img, action}) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={() => action()}>
      {img && <Icon name={img} size={17} color="white" style={styles.img} />}
      <Text style={styles.btnText}>{text}</Text>
    </TouchableOpacity>
  );
};

Button.defaultProps = {text: 'value'};

const styles = StyleSheet.create({
  btn: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'rgba(19, 1, 97, 1)',
    padding: 10,
    justifyContent: 'center',
    marginBottom: 5,
    alignItems: 'center',
    marginLeft: 13,
    marginRight: 13,
    borderRadius: 50,
  },
  img: {
    paddingRight: 20,
  },
  btnText: {
    textTransform: 'capitalize',
    fontSize: 16,
    color: 'white',
    fontFamily: 'Poppins-SemiBold',
  },
});

export default Button;
