# BMI Calculator

A simple and elegant BMI (Body Mass Index) Calculator built with React and Tailwind CSS.

## Features

- 📊 Calculate BMI based on weight (lbs) and height (inches)
- 🎨 Clean and modern UI with Tailwind CSS
- ♻️ Reset functionality to clear all inputs
- 📱 Responsive design
- ⚡ Built with Vite for fast development

## Demo

Enter your weight in pounds and height in inches, then click "Submit" to calculate your BMI. The result is displayed with 2 decimal precision.

## Technologies Used

- **React** - UI library
- **Vite** - Build tool
- **Tailwind CSS v4** - Styling (with Vite plugin)
- **JavaScript** - Programming language

## Installation

1. Clone the repository or download the project

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

1. Enter your weight in pounds (lbs)
2. Enter your height in inches (in)
3. Click the **Submit** button to calculate your BMI
4. Click the **Reload** button to clear all fields and start over

## BMI Formula

The calculator uses the standard BMI formula for imperial units:

```
BMI = (weight / (height × height)) × 703
```

## Project Structure

```
bmi_calculator/
├── src/
│   ├── components/
│   │   ├── MainContainer.jsx    # Main container with state management
│   │   ├── InputField.jsx       # Reusable input component
│   │   ├── Buttons.jsx          # Reusable button component
│   │   └── BmiResult.jsx        # BMI result display component
│   ├── App.jsx                  # Root component
│   └── index.css                # Tailwind CSS imports
├── package.json
└── vite.config.js
```

## Component Architecture

- **MainContainer**: Manages state for weight, height, and BMI calculation
- **InputField**: Controlled input component that accepts value and onChange props
- **Buttons**: Reusable button with customizable colors and click handlers
- **BmiResult**: Displays the calculated BMI value

## License

This project is open source and available for personal and educational use.

## Author

Built as a learning project to practice React state management and component composition.
