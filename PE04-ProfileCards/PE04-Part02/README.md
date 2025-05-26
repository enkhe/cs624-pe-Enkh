# PE04-ProfileCards - Part 02

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
The app displays a gallery of profile cards, each showing a user's name, profile picture, occupation, and a short description. The profile data is predefined and stored in the app. Users can interact with each card: tapping a card toggles it between a full-size view and a thumbnail view.

### Process
The app maps over the predefined profile data array and renders a styled card for each profile using React Native components such as `View`, `Text`, `Image`, and `StyleSheet`. Flexbox is used to create a responsive, wrapping grid layout so that cards flow into new rows as the screen size changes. Each card can be toggled between full and thumbnail size by tapping, demonstrating dynamic state updates and interactivity.

### Output
The app outputs a responsive, scrollable gallery of profile cards. Each card displays the user's profile picture, name, occupation, and description in a visually appealing format. The layout adapts to different screen sizes and platforms (iOS, Android, and web), ensuring that cards wrap into new rows as needed. Tapping a card animates it between full and thumbnail sizes, providing interactive feedback.

---

## Features
- Displays a list of profile cards with user information.
- Uses React Native components for layout and styling.
- Responsive design for compatibility across platforms.

---

## Analysis Report

The app demonstrates the use of React Native's core components and styling capabilities to create a visually appealing and functional user interface. By leveraging Flexbox and `StyleSheet`, the app ensures consistent layout and design. The use of predefined data simplifies the input process, while the mapping function dynamically renders the output, showcasing React's declarative UI approach.

