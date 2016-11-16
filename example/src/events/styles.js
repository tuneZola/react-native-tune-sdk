import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  eventSection: {
    flex: 0,
    padding: 10,
    minHeight: 50,
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 2,
    borderRadius: 3,
    flexDirection: 'column',
    backgroundColor: '#007AFF',
  },
  detailsContainer: {
    flex: 6,
    padding: 10,
    flexDirection: 'column',
  },
  text: {
    color: '#ffffff',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
