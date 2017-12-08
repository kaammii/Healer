import {
  StyleSheet,
  Dimensions,
} from 'react-native';

export const NAV_TAB_HEIGHT = 95;
export const NAV_HEIGHT = 45;
export const TAB_HEIGHT = 50;

export const deviceHeight = Dimensions.get('window').height;
export const deviceWidth = Dimensions.get('window').width;
export const shadowOpt = {btnWidth: deviceWidth - 55, btnHeight: 45}

// Only for FindDoctors, FindHospital, Appointment screens
export const spaceHeight = deviceHeight -  375 - 45;

// Only for Intro screens
export const introSpaceHeight = deviceHeight - 364;

// Common gradient colors
export const blueGradient = {
  colors: ['rgb(75,102,234)', 'rgb(130,160,247)'],
  colorsStart: {x: 0.2, y: 0.4},
  colorsEnd: {x: 1.0, y: 1.0}
}

// CommonStyles
export default CommonStyles = StyleSheet.create({
  normalPage: {
    position: 'relative',
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  normalSinglePage: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  wrapperBox: {
    marginTop: 20,
    marginBottom: 20,
  },
  noTabScrollView: {
    marginTop: NAV_HEIGHT,
  },
  smallWrapperBox: {
    marginTop: 20,
    marginBottom: 20,
  },
  scrollView: {
    marginTop: NAV_HEIGHT,
    marginBottom: TAB_HEIGHT, 
  },
  // Color
  whiteColor: {
    color: '#FFFFFF',
  },
  greyColor: {
    color: 'rgb(105,105,105)',
  },
  lightgreyColor: {
    color: 'rgb(150,150,150)',
  },
  blackColor: {
    color: 'rgb(19,19,19)',
  },
  softBlueColor: {
    color: 'rgb(75,102,234)',
  },
  darkSkyBlueColor: {
    color: 'rgb(63,103,230)',
  },
  periBlueColor: {
    color: 'rgb(79,109,230)',
  },
  // Text 
  extraLargeText: {
    height: 52,
    fontSize: 32,
    fontFamily: 'Poppins-Bold',
  },
  titleText: {
    fontSize: 30,
    lineHeight: 38
  },
  headerText: {
    fontSize: 18,
    lineHeight: 30
  },
  itemHeaderText: {
    fontSize: 17,
    lineHeight: 29 
  },
  mediumText: {
    fontSize: 16,
  },
  normalText: {
    fontSize: 15,
    lineHeight: 23
  },
  smallText: {
    fontSize: 13,
    lineHeight: 30 
  },
  shortSmallText: {
    fontSize: 13,
    lineHeight: 23 
  },
  light: {
    fontFamily: 'Poppins-Light',
  }, 
  regularBold: {
    fontFamily: 'Poppins-Regular',
  }, 
  mediumBold: {
    fontFamily: 'Poppins-Medium',
  }, 
  semiBold: {
    fontFamily: 'Poppins-SemiBold',
  }, 
  extraBold: {
    fontFamily: 'Poppins-Bold',
  }, 
  // Image
  borderRadius: {
    borderRadius: 200,
  },
  // Item box
  itemWhiteBox: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    elevation: 6,
  },
  // Form Styles
  textInputField: {
    flexDirection: 'row',
    width: deviceWidth - 55,
    height: 45,
    marginBottom: 25,
    borderColor:'rgb(229,229,229)',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 50,
    backgroundColor:'#FFFFFF',
  },
  textInput: {
    width: deviceWidth - 55,
    height: 45,
    paddingLeft: 50,
    color: 'rgb(150,150,150)',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
  selectboxField: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: deviceWidth - 55,
    height: 45,
    paddingLeft: 20,
    paddingRight: 20,
    borderColor:'rgb(229,229,229)',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 50,
    backgroundColor:'#FFFFFF',
  },
  selectboxLabel: {
    color: 'rgb(150,150,150)',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
  // Button Styles
  backButton: {
    flex: 1,
    alignItems: 'center',
    width: 41,
    height: 41 
  },
  nextButton: {
    flex: 1,
    alignItems: 'center',
    width: 60,
    height: 60 
  },
  // Intro pages styles
  introPageImageBox: {
    alignItems: 'center',
    marginTop: introSpaceHeight * 0.33,
  },
  introPageTextBox: {
    alignItems: 'center',
    marginTop: introSpaceHeight * 0.27,
  },
  introPageSubText: {
    width: deviceWidth - 75,
    height: 60,
    marginTop: 15,
    color: 'rgb(105,105,105)',
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
  },
  introPageButtonBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: introSpaceHeight * 0.27,
    marginBottom: 20,
  },
  introPageButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
  },
  // StartScreens 
  labelField: {
    marginTop: 30 + NAV_HEIGHT,
    marginBottom: 25,
    paddingLeft: (deviceWidth - (deviceWidth - 55))/2,
  },
  pickerBox: {
    position: 'relative',
    height: 402,
    flexDirection: 'row',
    marginBottom: 15,
  },
  selectedOption: {
    position: 'absolute',
    top: deviceHeight/2.6 + NAV_HEIGHT,
    width: deviceWidth,
    height: 75,
  },
  // Form Screens
  screenTitleBox: {
    height: 75,
    marginTop: (spaceHeight * 0.3) + NAV_HEIGHT,
    marginBottom: spaceHeight * 0.15,
    paddingLeft: (deviceWidth - (deviceWidth - 55))/2,
  },
  buttonBox: {
    height: 45,
    alignItems: 'center',
  },
  // Circle edit button
  editButton: {
    position: 'absolute',
    top: 25, 
    right: 15,
    elevation: 12,
  },
});
