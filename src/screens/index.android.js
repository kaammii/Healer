import {Navigation} from 'react-native-navigation';

// Sample
import SideMenu from './SideMenu';

// Project
import StartUpScreen from './StartUpScreen';
import IntroOneScreen from './IntroOneScreen';
import IntroTwoScreen from './IntroTwoScreen';
import IntroThreeScreen from './IntroThreeScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import ForgotPasswordScreen from './ForgotPasswordScreen';
import StartNameScreen from './StartNameScreen';
import StartBirthdayScreen from './StartBirthdayScreen';
import StartGenderScreen from './StartGenderScreen';
import StartWeightScreen from './StartWeightScreen';
import StartHeightScreen from './StartHeightScreen';

import MainServiceScreen from './MainServiceScreen';
import AppointmentScreen from './AppointmentScreen';
import FindDoctorScreen from './FindDoctorScreen';
import FindHospitalScreen from './FindHospitalScreen';
import ServicePriceScreen from './ServicePriceScreen';
import ResultFindDoctorScreen from './ResultFindDoctorScreen';
import ResultFindHospitalScreen from './ResultFindHospitalScreen';
import AppointmentDetailScreen from './AppointmentDetailScreen';
import BookAppointmentScreen from './BookAppointmentScreen';
import NotificationScreen from './NotificationScreen';

import ListDoctorsScreen from './ListDoctorsScreen';
import DoctorDeatailsScreen from './DoctorDeatailsScreen';
import DoctorInformationScreen from './DoctorInformationScreen';
import DoctorWorkingAddressScreen from './DoctorWorkingAddressScreen';
import DoctorReviewScreen from './DoctorReviewScreen';
import DoctorFavoritesScreen from './DoctorFavoritesScreen';

import DrugScreen from './DrugScreen';
import ListDrugsScreen from './ListDrugsScreen';
import DrugsDetailsScreen from './DrugsDetailsScreen';
import AddDrugsScreen from './AddDrugsScreen';
import DrugsShopScreen from './DrugsShopScreen';
import DrugsShopDetailScreen from './DrugsShopDetailScreen';

import UserProfileScreen from './UserProfileScreen';
import GoalSettingsScreen from './GoalSettingsScreen';
import InsurranceScreen from './InsurranceScreen';

import DashboardTestIndicatorsScreen from './DashboardTestIndicatorsScreen';
import CallDoctorScreen from './CallDoctorScreen';
import SettingsScreen from './SettingsScreen';

import HealerBlogsScreen from './HealerBlogsScreen';
import NewsDetailsScreen from './NewsDetailsScreen';
import NewsCommentScreen from './NewsCommentScreen';
import BookmarkScreen from './BookmarkScreen';

export function registerScreens() {
  // Project
  Navigation.registerComponent('Healer.StartUpScreen', () => StartUpScreen);
  Navigation.registerComponent('Healer.IntroOneScreen', () => IntroOneScreen);
  Navigation.registerComponent('Healer.IntroTwoScreen', () => IntroTwoScreen);
  Navigation.registerComponent('Healer.IntroThreeScreen', () => IntroThreeScreen);
  Navigation.registerComponent('Healer.SignInScreen', () => SignInScreen);
  Navigation.registerComponent('Healer.SignUpScreen', () => SignUpScreen);
  Navigation.registerComponent('Healer.ForgotPasswordScreen', () => ForgotPasswordScreen);
  Navigation.registerComponent('Healer.StartNameScreen', () => StartNameScreen);
  Navigation.registerComponent('Healer.StartBirthdayScreen', () => StartBirthdayScreen);
  Navigation.registerComponent('Healer.StartGenderScreen', () => StartGenderScreen);
  Navigation.registerComponent('Healer.StartWeightScreen', () => StartWeightScreen);
  Navigation.registerComponent('Healer.StartHeightScreen', () => StartHeightScreen);

  Navigation.registerComponent('Healer.MainServiceScreen', () => MainServiceScreen);
  Navigation.registerComponent('Healer.AppointmentScreen', () => AppointmentScreen);
  Navigation.registerComponent('Healer.FindDoctorScreen', () => FindDoctorScreen);
  Navigation.registerComponent('Healer.FindHospitalScreen', () => FindHospitalScreen);
  Navigation.registerComponent('Healer.ServicePriceScreen', () => ServicePriceScreen);
  Navigation.registerComponent('Healer.ResultFindDoctorScreen', () => ResultFindDoctorScreen);
  Navigation.registerComponent('Healer.ResultFindHospitalScreen', () => ResultFindHospitalScreen);
  Navigation.registerComponent('Healer.AppointmentDetailScreen', () => AppointmentDetailScreen);
  Navigation.registerComponent('Healer.BookAppointmentScreen', () => BookAppointmentScreen);
  Navigation.registerComponent('Healer.NotificationScreen', () => NotificationScreen);

  Navigation.registerComponent('Healer.ListDoctorsScreen', () => ListDoctorsScreen);
  Navigation.registerComponent('Healer.DoctorDeatailsScreen', () => DoctorDeatailsScreen);
  Navigation.registerComponent('Healer.DoctorInformationScreen', () => DoctorInformationScreen);
  Navigation.registerComponent('Healer.DoctorWorkingAddressScreen', () => DoctorWorkingAddressScreen);
  Navigation.registerComponent('Healer.DoctorReviewScreen', () => DoctorReviewScreen);
  Navigation.registerComponent('Healer.DoctorFavoritesScreen', () => DoctorFavoritesScreen);

  Navigation.registerComponent('Healer.DrugScreen', () => DrugScreen);
  Navigation.registerComponent('Healer.ListDrugsScreen', () => ListDrugsScreen);
  Navigation.registerComponent('Healer.DrugsDetailsScreen', () => DrugsDetailsScreen);
  Navigation.registerComponent('Healer.AddDrugsScreen', () => AddDrugsScreen);
  Navigation.registerComponent('Healer.DrugsShopScreen', () => DrugsShopScreen);
  Navigation.registerComponent('Healer.DrugsShopDetailScreen', () => DrugsShopDetailScreen);

  Navigation.registerComponent('Healer.UserProfileScreen', () => UserProfileScreen);
  Navigation.registerComponent('Healer.GoalSettingsScreen', () => GoalSettingsScreen);
  Navigation.registerComponent('Healer.InsurranceScreen', () => InsurranceScreen);

  Navigation.registerComponent('Healer.DashboardTestIndicatorsScreen', () => DashboardTestIndicatorsScreen);
  Navigation.registerComponent('Healer.CallDoctorScreen', () => CallDoctorScreen);
  Navigation.registerComponent('Healer.SettingsScreen', () => SettingsScreen);

  Navigation.registerComponent('Healer.HealerBlogsScreen', () => HealerBlogsScreen);
  Navigation.registerComponent('Healer.NewsDetailsScreen', () => NewsDetailsScreen);
  Navigation.registerComponent('Healer.NewsCommentScreen', () => NewsCommentScreen);
  Navigation.registerComponent('Healer.BookmarkScreen', () => BookmarkScreen);

  // Sample
  Navigation.registerComponent('Healer.SideMenu', () => SideMenu);
}
