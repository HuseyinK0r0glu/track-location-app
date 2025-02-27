# Track Location App

## 📌 Overview
The **Track Location App** is a React Native application that allows users to track their location in real-time and store recorded tracks. The app utilizes **Expo Location API** to access GPS data and manages state using **React Context**. It is built with **React Navigation** for screen management.

## 🚀 Features
- Real-time location tracking using `watchPositionAsync`
- Start/stop recording location
- Save recorded tracks
- Map integration to visualize tracked locations
- Permission handling for location access

## 🛠️ Technologies Used
- **React Native** (with Expo)
- **Expo Location API**
- **React Context API**
- **React Navigation**
- **React Native Maps**

## 📂 Project Structure
```
track-location-app/
│── assets/               # Images and assets
│── components/           # Reusable components (Map, TrackForm, etc.)
│── context/              # Context API state management
│── hooks/                # Custom hooks (useLocation)
│── screens/              # Screens for navigation (TrackListScreen, TrackDetailScreen, etc.)
│── navigation/           # Navigation setup
│── App.js                # Main application entry point
│── package.json          # Dependencies and scripts
│── README.md             # Project documentation (this file)
```

## 🔧 Installation & Setup
1. **Clone the repository**
   ```sh
   git clone https://github.com/HuseyinK0r0glu/track-location-app.git
   cd track-location-app
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```
   or
   ```sh
   yarn install
   ```

3. **Start the development server**
   ```sh
   npx expo start
   ```
   or
   ```sh
   yarn expo start
   ```

4. **Run on device**
   - Scan the QR code from Expo Go (Android/iOS) or use an emulator.

## 📌 Usage
- Open the app and allow location permissions.
- Click "Start Recording" to begin tracking your location.
- Move around to record location updates.
- Click "Stop Recording" to save the track.
- View saved tracks in the track list.

### ✨ Happy Coding! 🚀
