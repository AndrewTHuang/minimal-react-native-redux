# minimal-react-native-redux

This is a simple counter app for playing around with React Native.

*Note: This project is tailored for iOS development on a Mac*

## Tools
* React Native
  * to enable hot reloading, press `Command-D` to bring up the dev menu and select.. you guessed it: `Enable Hot Reloading`
* Redux
  * with react-redux bindings
* [Remote Redux DevTools](https://github.com/zalmoxisus/remote-redux-devtools)
  * launch DevTools with this handy [Chrome app](https://chrome.google.com/webstore/detail/remotedev/faicmgpfiaijcedapokpbdejaodbelph)

## Initial (One Time Only) Setup
#### Clone the repo and install dependencies
```
> git clone https://github.com/AndrewTHuang/minimal-react-native-redux.git
> cd minimal-react-native-redux
> npm install
> npm start (this will run React packager on port 8081)
```

#### Run the build process in Xcode
Open the project in Xcode (v7.0 or higher)
```
> open ios/MinimalReactNativeRedux.xcodeproj

Press `Command-R` to build the app
```

Upon successful build, Simulator automatically launch and open the app!

## Subsequent Usage
After the initial build, there is no need for Xcode if you're just playing around with the app in Simulator. To do so, follow these steps:

```
> npm start (this will run React packager on port 8081)

Open Simulator (Command-Space bar + 'simulator')
Swipe to the second screen
Tap on the `MinimalReactNativeRedux` icon
```
