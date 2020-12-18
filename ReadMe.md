# How to run
- npm install
- pod install
- react-native start
- react-native run-android

# Setup your own project
### Install native base
npm install native-base --save

### Install react-native-vector-icons
- npm install --save react-native-vector-icons
- open pod file, copy this
  ````
  pod 'RNVectorIcons', :path => '../node_modules/react-native-vector-icons'
  ````
- open build.gradle inside android/app, copy this 
  ````
  apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
  ````
- pod install

### Setup custom font
- create folder assets/fonts inside your src folder
- copy your font assets into that folder
- create file react-native.config.js outside your src folder
- copy this into react-native.config.js
  ````
  module.exports = {
    project: {
        ios: {},
        android: {},
    },
    assets: ['./src/assets/fonts'],
  }
  ````
- check your info plist, inside font provided by application, it will show all of your fonts
- run react-native link

### Running the app
#### Android
- react-native start
- react-native run-android

#### iOS
- react-native start
- cd ios
- open rn_template.xcworkspace
- cmd + b
- I assume you will get an error
  ````
  Multiple commands produce '/Users/mac/Library/Developer/Xcode/DerivedData/rn_template-bjhjafszvrwanlarcuuagrhucsli/Build/Products/Debug-iphonesimulator/rn_template.app/Zocial.ttf':
  1) Target 'rn_template' (project 'rn_template') has copy command from '/Users/mac/Documents/Learn/react_native/rn_template/node_modules/native-base/Fonts/Zocial.ttf' to '/Users/mac/Library/Developer/Xcode/DerivedData/rn_template-bjhjafszvrwanlarcuuagrhucsli/Build/Products/Debug-iphonesimulator/rn_template.app/Zocial.ttf'
  2) That command depends on command in Target 'rn_template' (project 'rn_template'): script phase “[CP] Copy Pods Resources”
  ````
- open build phases
- delete all icons except your custom fonts
- try build and run again

# Source
- https://github.com/oblador/react-native-vector-icons
- https://docs.nativebase.io/docs/GetStarted.html
- https://dev.to/kennymark/using-custom-fonts-in-react-native-21j7