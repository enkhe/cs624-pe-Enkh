# cs624-pe-Enkh - Full Stack Web Development

## 2. PE02-Core Components

### Input
The app allows users to input their favorite course using a `TextInput` field. It also uses static assets, such as an image of the React logo, and displays predefined course information for MSCS programs.

### Process
The app processes the input by updating the state (`favoriteCourse`) using React's `useState` hook. It logs the input to the console using the `useEffect` hook whenever the input changes. The app uses core React Native components like `View`, `Text`, `ScrollView`, `Image`, `TextInput`, and `StyleSheet` to render a scrollable and styled user interface.

### Output
The app outputs a scrollable screen displaying MSCS course categories (Core Requirements, Depth of Study, and Capstone) with styled section titles. It also displays the user’s favorite course in the console log whenever the input changes.

---

## Analysis Report

The program follows the input-process-output model effectively. Users provide input through a `TextInput` field, which updates the state dynamically. The app processes this input using React Native's state management (`useState`) and side effects (`useEffect`) to log the input to the console. The app uses React Native's core components to render a visually appealing and scrollable interface, ensuring compatibility across platforms (iOS, Android). The output is a responsive UI that displays MSCS course details and logs user input in real time. The use of `StyleSheet` ensures consistent styling, while `ScrollView` makes the interface user-friendly for long content. This design demonstrates a clear separation of concerns, with input handling, processing, and output rendering working seamlessly together.




## Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
