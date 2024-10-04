# Project Overview
## Project Introduction 💰
The purpose of this project is to develop a simple yet functional currency converter application, which can be integrated into the workflow at my workplace. The tool will allow users to convert a specified amount of money between two selected currencies, using exchange rates fetched from an external API. The project aims to provide an intuitive user interface and fast, accurate conversions.

This github repository will utilise publically available APIs, however a real implementation of this tool would utilise internal APIs to utilise my workplaces existing source of exchange rate data. Currently there is not a tool for converting exchange rates using internally sourced data without calculating the exchange manually, hence the proposal of this project.

## Project Requirements 🎯
#### 1. User Interface (UI) 🖥️
- **Input Field for Amount**: Users should be able to input the amount they want to convert.
- **Selection method for Currencies**: A method is required for selecting the source currency and another for the target currency.
- **Convert Button**: A button to trigger the conversion process.
- **Result Display**: A field or label to show the converted amount.
- **Swap Currencies**: As requested by stakeholders as part of feedback on existing requirements, a "swap currencies" functionality was requested, to swap To/From currency selection for conversion. 
  
#### 2. Currency Data 💵
- **Currency List**: At a minimum, include major currencies such as USD, EUR, GBP, JPY, etc.
- **Live Exchange Rates**: Fetch live exchange rates from an API

#### 3. Backend Logic ⚙️
- **Conversion Formula**: Implement a basic conversion formula:  
  `Converted Amount = Amount * Exchange Rate`
- **Fetch Exchange Rates**: Integrate API calls to retrieve current exchange rates.

#### 4. Validation ✅
- **Input Validation**: Ensure the user enters valid numbers in the amount field.
- **Currency Selection Validation**: Ensure different source and target currencies are selected.

#### 5. Error Handling ⛔
- **Network Errors**: Display appropriate error messages if there's an issue fetching exchange rates.
- **Input Errors**: Display user-friendly error messages for invalid inputs or selections.

#### 6. Non-functional Requirements ⏩
- **Responsive Design**: The application should be usable on both desktop and mobile devices.
- **Performance**: The conversion process should be quick, ideally under 1 second.
- **Accessibility**: Ensure keyboard navigation and screen reader support.

### MoSCoW Prioritisation 🔝
Once all requirements were identified and confirmed with stakeholders, as listed above, each was split into one of four categories. **Must Have, Should Have, Could Have, Won't Have**. This method of prioritisation is called MoSCoW, this method has been selected as it is a simple and efficient way to make it clear which features should be prioritised during the development of the currency converter application.

To correctly define each requirement, the following criteria were used for each MoSCoW catergorisation:
- **Must Have**: Essential requirements which are non-negotiable, critical for the success of the project.
- **Should Have**: Important requirements but not critical to the applications functionality, it could work without this feature.
- **Could Have**: Desireable but non-essential features, these requirements would be considered "nice to haves" or "quality of life" features.
- **Won't Have**: These are features which will not be included in this phase of the project, features included in this category may be revisited in future phases of the project but are explicity ruled out at this stage.

![MoSCoW Requirements](https://github.com/user-attachments/assets/12b7bcbe-ae10-48f0-b08d-c8a7ad6bc5ae)

## User Stories 👤
To ensure a comprehensive understanding of the listed project requirements, I have drawn up a list of user stories which cover the planned functionality. The aim of this is to clarify requirements and ensure there is no accidental scope creep later in the project. Defining user stories at the planning stage helps to make sure that I can write tickets to strict requirements with clearly defined objectives.

### User Story 1: Basic Currency Conversion
**As a** user  
**I want** to convert a specific amount of money from one currency to another and have the result displayed on screen  
**So that** I can quickly see how much the amount is worth in a different currency.  

### User Story 2: Currency Pair Switching
**As a** user  
**I want** to quickly switch the selected currencies  
**So that** I can reverse the conversion without manually reselecting currencies.  

### User Story 3: Input Validation
**As a** user  
**I want** the application to notify me if I enter invalid input (e.g., non-numeric values)  
**So that** I can correct my mistakes and complete the conversion successfully.  

### User Story 4: Currency Selection
**As a** user  
**I want** to select a currency from a predetermined list  
**So that** I do not need to memorise every single currency code available.  

### User Story 5: Responsive Design
**As a** mobile phone user  
**I want** the webapp to be easy to use and navigate on my smartphone  
**So that** I can perform currency conversions whilst away from my computer.  


## Project Stakeholders 👩‍💼
| Role    | Responsibility | Notes |
| -------- | ------- | ------- |
| Project Manager  | Overall project oversight    | Since this is a solo development project, I will take on the role of project manager   |
| Developer | Application development     | Since this is a solo development project, I will take on the role of developer   |
| Analyst    | Client representative and sign-off    | Feedback will be sought from workplace analysts where possible    |

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
