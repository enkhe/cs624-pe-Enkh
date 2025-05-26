import { StyleSheet, Platform } from 'react-native';

const profileCardColor = 'dodgerblue';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  cardContainer: {
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 3,
    borderStyle: 'solid',
    borderRadius: 20,
    backgroundColor: profileCardColor,
    width: 140,
    height: 180,
    margin: 10,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: 10 },
        shadowOpacity: 1,
      },
      android: {
        elevation: 15,
      },
    }),
  },
  cardExpanded: {
    transform: [{ scale: 1.8 }],
    zIndex: 1
  },
  cardThumbnail: {
    transform: [{ scale: 1 }],
  },
  cardImageContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'black',
    width: 80,
    height: 80,
    borderRadius: 40,
    marginTop: 10,
    paddingTop: 5,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: 10 },
        shadowOpacity: 1,
      },
      android: {
        elevation: 15,
      },
    }),
  },
  cardImage: {
    width: 50,
    height: 50,
  },
  cardName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 10,
    textShadowColor: 'black',
    textShadowOffset: { height: 2, width: 2 },
    textShadowRadius: 2,
    textAlign: 'center'
  },
  cardOccupationContainer: {
    borderColor: 'black',
    borderBottomWidth: 2,
    marginTop: 5,
  },
  cardOccupation: {
    fontWeight: 'bold',
    fontSize: 12,
    marginBottom: 5,
    textAlign: 'center'
  },
  cardDescription: {
    fontStyle: 'italic',
    fontSize: 10,
    margin: 5,
    textAlign: 'center'
  }
});

export default styles;