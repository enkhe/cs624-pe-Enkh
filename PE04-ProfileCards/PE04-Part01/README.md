# PE04-ProfileCards - Part 01

## Project Setup

To set up and run the project, follow these steps:

1. Create a new Expo app:
   ```bash
   npx create-expo-app Styling
   ```

2. Navigate to the project directory:
   ```bash
   cd Styling
   ```

3. Log in to Expo (if not already logged in):
   ```bash
   npx expo login
   ```

4. Start the development server:
   ```bash
   npx expo start --tunnel
   ```

---

## Input, Process, and Output

### Input
The app allows users to view a list of profile cards. Each card contains information such as the user's name, profile picture, and a short description. The data for the profiles is predefined and stored in the app.

### Process
The app processes the predefined profile data by mapping over the data array and rendering a styled card for each profile. It uses React Native components like `View`, `Text`, `Image`, and `StyleSheet` to create visually appealing and responsive profile cards. The app also ensures proper layout and spacing using Flexbox.

### Output
The app outputs a scrollable list of profile cards. Each card displays the user's profile picture, name, and description in a clean and organized format. The interface is styled to be visually appealing and responsive across different screen sizes and platforms (iOS, Android, and web).

---

## Features
- Displays a list of profile cards with user information.
- Uses React Native components for layout and styling.
- Responsive design for compatibility across platforms.

---

## Analysis Report

The app demonstrates the use of React Native's core components and styling capabilities to create a visually appealing and functional user interface. By leveraging Flexbox and `StyleSheet`, the app ensures consistent layout and design. The use of predefined data simplifies the input process, while the mapping function dynamically renders the output, showcasing React's declarative UI approach.

