Counter App
A simple yet interactive Counter App built with React.js and following the MVI/MVVM architecture. The app allows users to increment, decrement, and reset a counter, with an additional feature to enable/disable auto-increment functionality.

Features
Increment Counter: Press the + button to increase the count by 1.

Decrement Counter: Press the - button to decrease the count by 1.

Reset Counter: Press the Reset button to set the count back to 0.

Auto-Increment: Toggle the switch to enable/disable automatic incrementing of the counter every 1.1 seconds.

Counter Limits: The counter value is constrained between 0 and 98.


src/
├── components/
│   ├── Counter/
│   │   ├── Counter.jsx        # Main Counter component
│   │   ├── Counter.css        # Styles for the Counter component
│   │   └── useCounter.js      # Custom hook for counter logic
├── App.js                     # Main application component
├── App.css                    # Global styles
└── index.js                   # Entry point of the application





npm start
Open in Browser:
The app will open automatically in your default browser at http://localhost:3000.

Usage
Increment Counter:

Click the + button to increase the counter by 1.

Decrement Counter:

Click the - button to decrease the counter by 1.

Reset Counter:

Click the Reset button to set the counter back to 0.

Auto-Increment:

Toggle the switch to enable/disable auto-increment. When enabled, the counter will automatically increase by 1 every 1.1 seconds.

Code Architecture
MVI/MVVM Pattern
The app follows the MVI (Model-View-Intent) or MVVM (Model-View-ViewModel) architecture:

Model: The state and logic are managed in the useCounter custom hook.

View: The Counter.jsx component represents the UI.

Intent/ViewModel: User interactions (like button clicks and switch toggles) are handled by the useCounter hook, which updates the state and reflects changes in the UI.

Custom Hook: useCounter
The useCounter hook encapsulates all the logic for the counter, including:

Incrementing and decrementing the counter.

Resetting the counter.

Managing the auto-increment functionality.

This makes the code modular, reusable, and easy to test.
