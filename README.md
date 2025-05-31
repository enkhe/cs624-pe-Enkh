# cs624-pe-Enkh - Full Stack Web Development

## 1. PE01-HelloWorld

### Input
The app takes user interactions as input, such as navigation between tabs or interacting with collapsible sections. Additionally, it uses static assets like images and text defined in the codebase.

### Process
The app processes the input using React Native components and Expo's framework. It renders UI elements dynamically based on the input and applies styles using `StyleSheet`. The app also supports features like light/dark mode, animations, and platform-specific behavior (e.g., iOS vs. Android).

### Output
The output is a responsive and interactive user interface displayed on Android, iOS, or the web. The app shows a yellow background with centered text ("Enkh Baterdene,\nMSCS\nSTC") on the home page and provides additional functionality on other tabs, such as collapsible sections and external links.

---

## 2. PE02-Core Components

### Input
The app allows users to input their favorite course using a `TextInput` field. It also uses static assets, such as an image of the React logo, and displays predefined course information for MSCS programs.

### Process
The app processes the input by updating the state (`favoriteCourse`) using React's `useState` hook. It logs the input to the console using the `useEffect` hook whenever the input changes. The app uses core React Native components like `View`, `Text`, `ScrollView`, `Image`, `TextInput`, and `StyleSheet` to render a scrollable and styled user interface.

### Output
The app outputs a scrollable screen displaying MSCS course categories (Core Requirements, Depth of Study, and Capstone) with styled section titles. It also displays the user’s favorite course in the console log whenever the input changes.

---

## 3. PE03-Todos App

### Input
The app allows users to input tasks using a `TextInput` field. Users can type their tasks into the input field, which updates the app's state dynamically. The app also supports filtering tasks by type (e.g., "All", "Completed", "Pending").

### Process
The app processes the input by updating the `todos` state array whenever a new task is added. It uses React Native's `setState` method to manage the state of the app. The app dynamically renders the list of tasks based on the current state and applies filters to display tasks based on their completion status. The app uses components like `Input`, `Heading`, and `ScrollView` to create a structured and interactive user interface.

### Output
The app outputs a scrollable list of tasks entered by the user. Each task is displayed in a styled format, and users can view all tasks or filter them by their completion status. The app also logs user input to the console for debugging purposes. The interface is responsive and user-friendly, ensuring compatibility across platforms (iOS, Android).

---


## PE04-ProfileCards - Part 01

### Input
The app allows users to view a list of profile cards. Each card contains information such as the user's name, profile picture, and a short description. The data for the profiles is predefined and stored in the app.

### Process
The app processes the predefined profile data by mapping over the data array and rendering a styled card for each profile. It uses React Native components like `View`, `Text`, `Image`, and `StyleSheet` to create visually appealing and responsive profile cards. The app also ensures proper layout and spacing using Flexbox.

### Output
The app outputs a scrollable list of profile cards. Each card displays the user's profile picture, name, and description in a clean and organized format. The interface is styled to be visually appealing and responsive across different screen sizes and platforms (iOS, Android, and web).

---


## PE04-ProfileCards - Part 02

### Input
The app displays a gallery of profile cards, each showing a user's name, profile picture, occupation, and a short description. The profile data is predefined and stored in the app. Users can interact with each card: tapping a card toggles it between a full-size view and a thumbnail view.

### Process
The app maps over the predefined profile data array and renders a styled card for each profile using React Native components such as `View`, `Text`, `Image`, and `StyleSheet`. Flexbox is used to create a responsive, wrapping grid layout so that cards flow into new rows as the screen size changes. Each card can be toggled between full and thumbnail size by tapping, demonstrating dynamic state updates and interactivity.

### Output
The app outputs a responsive, scrollable gallery of profile cards. Each card displays the user's profile picture, name, occupation, and description in a visually appealing format. The layout adapts to different screen sizes and platforms (iOS, Android, and web), ensuring that cards wrap into new rows as needed. Tapping a card animates it between full and thumbnail sizes, providing interactive feedback.


---

---

## PE05-Cities

## Input
- **Add City:** Enter a city name and its country in the Add City tab.
- **Add Country:** Enter a country name and its currency in the Add Country tab.
- **Edit/Delete:** Use the edit and delete buttons on each city or country card to update or remove entries.

## Process
- The app stores lists of cities and countries in memory (state).
- Adding, editing, or deleting a city/country updates the list instantly.
- All changes are reflected in the UI with a modern, professional design.

## Output
- **Cities Tab:** Displays a list of all added cities and their countries, with options to edit or delete.
- **Countries Tab:** Displays a list of all added countries and their currencies, with options to edit or delete.
- **Screenshots:**

<p align="center">
  <img src="PE05-Cities/Screenshots/Screenshot%202025-05-31%20CS624%20PE05%20City%20-%20Add.png" width="20%" />
  <img src="PE05-Cities/Screenshots/Screenshot%202025-05-31%20CS624%20PE05%20City%20-%20List.png" width="20%" />
  <img src="PE05-Cities/Screenshots/Screenshot%202025-05-31%20CS624%20PE05%20Country%20-%20Add.png" width="20%" />
  <img src="PE05-Cities/Screenshots/Screenshot%202025-05-31%20CS624%20PE05%20Country%20-%20List.png" width="20%" />
</p>

---


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

## Analysis Report

The program follows the input-process-output model effectively. Users provide input through a `TextInput` field, which updates the state dynamically. The app processes this input using React Native's state management (`useState`) and side effects (`useEffect`) to log the input to the console. The app uses React Native's core components to render a visually appealing and scrollable interface, ensuring compatibility across platforms (iOS, Android). The output is a responsive UI that displays MSCS course details and logs user input in real time. The use of `StyleSheet` ensures consistent styling, while `ScrollView` makes the interface user-friendly for long content. This design demonstrates a clear separation of concerns, with input handling, processing, and output rendering working seamlessly together.

