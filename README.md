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

## Analysis Report

The program follows the input-process-output model effectively. Users provide input through a `TextInput` field, which updates the state dynamically. The app processes this input using React Native's state management (`useState`) and side effects (`useEffect`) to log the input to the console. The app uses React Native's core components to render a visually appealing and scrollable interface, ensuring compatibility across platforms (iOS, Android). The output is a responsive UI that displays MSCS course details and logs user input in real time. The use of `StyleSheet` ensures consistent styling, while `ScrollView` makes the interface user-friendly for long content. This design demonstrates a clear separation of concerns, with input handling, processing, and output rendering working seamlessly together.

