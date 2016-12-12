/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React from 'react';

import {
  ScrollView,
  NativeModules,
} from 'react-native';

import styles from './styles';

import Login from './login';
import Registration from './registration';
import AddToCart from './addToCart';
//
import AddToWishList from './addToWishList';
import AddedPaymentInfo from './addedPaymentInfo';
import CheckoutInitiated from './checkoutInitiated';
import Purchase from './purchase';
import Reservation from './reservation';
import Search from './search';
import ContentView from './contentView';
//
import AchievementUnlocked from './achievementUnlocked';
import LevelAchieved from './levelAchieved';
import SpentCredits from './spentCredits';
import TutorialComplete from './tutorialComplete';
import Invite from './invite';
//
import Rated from './rated';
import Share from './share';
import RegisterCustomProfileString from './registerCustomProfileString';
import RegisterCustomProfileDate from './registerCustomProfileDate';
import RegisterCustomProfileNumber from './registerCustomProfileNumber';
import RegisterCustomProfileGeolocation from './registerCustomProfileGeolocation';
//
import SetCustomProfileStringValue from './setCustomProfileStringValue';
import SetCustomProfileDate from './setCustomProfileDate';
import SetCustomProfileNumber from './setCustomProfileNumber';
import SetCustomProfileGeolocation from './setCustomProfileGeolocation';
import ClearCustomProfileVariable from './clearCustomProfileVariable';
import ClearAllCustomProfileVariables from './clearAllCustomProfileVariables';

const Events = () => (
  <ScrollView style={styles.container}>
    <Login />
    <Registration />
    <AddToCart />
    <AddToWishList />
    <AddedPaymentInfo />
    <CheckoutInitiated />
    <Purchase />
    <Reservation />
    <Search />
    <ContentView />
    <AchievementUnlocked />
    <LevelAchieved />
    <SpentCredits />
    <TutorialComplete />
    <Invite />
    <Rated />
    <Share />
    <RegisterCustomProfileString />
    <RegisterCustomProfileDate />
    <RegisterCustomProfileNumber />
    <RegisterCustomProfileGeolocation />
    <SetCustomProfileStringValue />
    <SetCustomProfileDate />
    <SetCustomProfileNumber />
    <SetCustomProfileGeolocation />
    <ClearCustomProfileVariable />
    <ClearAllCustomProfileVariables />
  </ScrollView>
);

export default Events;
