import { StyleSheet } from 'react-native';
import constants from '../../constants/appConstants';
import colors from '../../helper/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    paddingHorizontal: constants.hs(20),
  },
  forgotPassword: {
    color: colors.appBlue,
    textAlign: 'center',
  },
  loginButton: {
    marginVertical: constants.vs(30),
  },
});

export default styles;
