import React from "react";
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AppHeader from "../components/AppHeader";
import SettingComponent from "../components/SettingComponent";
import { Linking } from "react-native";

const UserAccountScreen = ({ navigation }) => {
  return (
    <LinearGradient
      colors={["#4c669f", "#3b5998", "#192f6a"]}
      style={styles.container}
    >
      <StatusBar hidden />
      <View style={styles.appHeaderContainer}>
        <AppHeader
          name="close"
          header="My Profile"
          action={() => navigation.goBack()}
        />
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.profileContainer}>
          <Image
            source={require("../assets/image/avatar.png")}
            style={styles.avatarImage}
          />
          <Text style={styles.avatarText}>Thanh Phat</Text>
        </View>

        <View style={styles.settingsContainer}>
          <SettingComponent
            icon="person"
            heading="Account"
            subheading="Edit Profile"
            subtitle="Change Password"
          />
          <SettingComponent
            icon="settings"
            heading="Settings"
            subheading="Theme"
            subtitle="Permissions"
          />
          <SettingComponent
            icon="attach-money"
            heading="Offers & Referrals"
            subheading="Offer"
            subtitle="Referrals"
          />
          <TouchableOpacity onPress={() => Linking.openURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')}>
            <SettingComponent
              icon="info"
              heading="About"
              subheading="About Movies"
              subtitle="More"
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  appHeaderContainer: {
    marginHorizontal: 15,
    marginTop: 15,
  },
  scrollViewContent: {
    paddingVertical: 30,
  },
  profileContainer: {
    alignItems: "center",
    paddingVertical: 30,
  },
  avatarImage: {
    height: 120,
    width: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: "white",
    marginBottom: 20,
  },
  avatarText: {
    fontFamily: "sans-serif-medium",
    fontSize: 24,
    marginTop: 16,
    color: "white",
    fontWeight: "bold",
  },
  settingsContainer: {
    padding: 15,
    marginTop: 20,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 20,
  },
});

export default UserAccountScreen;
