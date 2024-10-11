# Project Overview
[![codecov](https://codecov.io/github/rmdtech/ASE-Summ2/branch/master/graph/badge.svg?token=GMW03SI6SS)](https://codecov.io/github/rmdtech/ASE-Summ2)
![WorkflowStatus](https://github.com/rmdtech/ASE-Summ2/workflows/Node.js%20CI/badge.svg)

Production Environment: https://rmdtech.github.io/ASE-Summ2/


## Project Introduction 💰
The purpose of this project is to develop a simple yet functional currency converter application, which can be integrated into the workflow at my workplace. The tool will allow users to convert a specified amount of money between two selected currencies, using exchange rates fetched from an external API. The project aims to provide an intuitive user interface and fast, accurate conversions.

This github repository will utilise publicly available APIs, however a real implementation of this tool would utilise internal APIs to utilise my workplaces existing source of exchange rate data. Currently there is not a tool for converting exchange rates using internally sourced data without calculating the exchange manually, hence the proposal of this project.

### Project Roadmap
![timeline drawio](https://github.com/user-attachments/assets/3a9a846f-7735-45ae-99cd-0b4d6030d0bd)


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

#### 5. Error Handling ⛔
- **Network Errors**: Display appropriate error messages if there's an issue fetching exchange rates.
- **Input Errors**: Display user-friendly error messages for invalid inputs or selections.

#### 6. Non-functional Requirements ⏩
- **Responsive Design**: The application should be usable on both desktop and mobile devices.
- **Performance**: The conversion process should be quick, ideally under 1 second.
- **Accessibility**: Ensure keyboard navigation and screen reader support.

### MoSCoW Prioritisation 🔝
Once all requirements were identified and confirmed with stakeholders, as listed above, each was split into one of four categories. **Must Have, Should Have, Could Have, Won't Have**. This method of prioritisation is called MoSCoW, this method has been selected as it is a simple and efficient way to make it clear which features should be prioritised during the development of the currency converter application.

To correctly define each requirement, the following criteria were used for each MoSCoW categorisation:
- **Must Have**: Essential requirements which are non-negotiable, critical for the success of the project.
- **Should Have**: Important requirements but not critical to the applications functionality, it could work without this feature.
- **Could Have**: Desirable but non-essential features, these requirements would be considered "nice to haves" or "quality of life" features.
- **Won't Have**: These are features which will not be included in this phase of the project, features included in this category may be revisited in future phases of the project but are explicitly ruled out at this stage.

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

## Project Risks 🚨
To ensure project risks are factored into the development process, I created a risk matrix which covers potential risks, their likelihoods, impacts, and mitigation strategies. This enabled me to be more proactive in tackling risks and avoiding serious issues within the development process.

| **Risk**                                      | **Likelihood** | **Impact** | **Risk Level** (Priority) | **Mitigation Strategy**                                                |
|-----------------------------------------------|----------------|------------|--------------------------|------------------------------------------------------------------------|
| **API for Exchange Rates Unavailable**        | Medium         | High       | Critical                  | - Implement a fallback mechanism using a secondary API.          |
| **Short Project Timeline causing errors/bugs**| High           | Medium     | Medium                    | - Ensure regular updates to project, seek feedback where required|
|                                               |                |            |                          | - Use test driven development and comprehensive testing to mitigate risk of bugs                   |
| **Project Delays Due to Feature Creep**       | Medium         | Medium     | Medium                    | - Define clear project scope and stick to the core functionality.      |
|                                               |                |            |                          | - Use MoSCoW prioritisation for additional features.                   |

# Project Management 👩‍💼
## Project Management Tool 🔧
To organise tasks, I utilised GitHub Projects to create a KanBan board with five important sections.
- Backlog (Tasks which have been written but may need additional refinement, or blockers cleared, before they are ready to be started)
- Ready (Tasks which are refined, unblocked and ready to begin development)
- In-Progress (Tasks which have been started but not yet finished)
- Review (Tasks which have been finished but need to be checked over before merging into master)
- Done (Tasks which are complete and merged into master branch)

![kanban](https://github.com/user-attachments/assets/595855b3-8947-4bc7-8726-7b0808fd360f)  


Due to this projects fast pace and short duration, it was critical to be capable of quickly identifying tasks and their statuses; utilising a kanban board has helped me to better track which tickets were at different stages of delivery and also ensured I never took on too many tickets at once by capping in-progress tickets at a maximum of three. In addition to this, the very tight timeline of this project meant that making the most efficient use of my time was critical. By utilising GitHub projects (specifically the sizing feature of tickets) has helped to show at a glance where I need to focus my energy and roughly how much effort each remaining ticket will take.


## Project Organisation 📁
### Labels 🏷️
To help organise and manage this project, I utilised github labels which can be applied to any issue/ticket. I had not previously used this system, but decided to make use of custom labels for the purpose of prioritisation, sizing and organising by type. Whilst there were benefits to this approach, there were also some challenges which emerged.  
One of the key advantages to utilising labels was the inherent flexibility, allowing me to create custom labels to fit the project's needs. These custom labels were used to quickly categorise and filter issues based on specific criteria, and therefore made it easier to organise the backlog and decide which tickets were best suited to be picked up next. The screenshot below shows the full list of labels I created with the aim of being able to gather key information on any particular issue at a glance.  

![labels](https://github.com/user-attachments/assets/8ee9c021-1828-45e6-8c45-c0dc61b2dc71)  

Whilst this project has been a single developer operation, should a second developer join the project, the labelling system would make it quick and easy for them to understand ticket priority, effort as well as type, without having to open each ticket individually and read through all the details. However, whilst GitHub labels are useful for this purpose, GitHub Projects utilise a different system for tagging and labelling tickets, this therefore means that the same work tagging each ticket with a label needs to be completed twice, once in the project and once on the issue directly. As a result, the secondary step of retagging issues within the project was often forgotten about, missed or disregarded altogether.  

Upon reflection, the use of GitHub labels in this project has brought significant benefits for efficiency and organisation. Simplifying ticket selection and management through the ability to create custom labels for the project's unique needs. However, the requirement to double tag on both the issue directly and within GitHub Projects limited the efficiency and usability of the system, in future projects it would be beneficial to explore an alternative method that perhaps utilises labels differently to avoid the issue of double tagging.

### Sizing 👕
Using custom created labels within GitHub, I gave each ticket/issue its own size based on an estimate of the effort required to complete the work, quantity of unknowns involved, as well as the estimated length of time involved to complete the ticket. I decided to utilise fibonacci sequence sizes for my tickets, as this is a simple and repeatable way of assigning effort to tickets which focusses on effort/complexity rather than time. In addition to this, I believe that the increasing gaps between sizes reflects the growing complexities and unknowns as you move up the scale better than that provided by t-shirt sizes which simply utilise XS, S, M, L etc.

To ensure sizing was as effective as possible, it was important to make sure tasks were sized consistently, to do this, I used the below guide to accurately size each ticket based on the existing system as well as my current knowledge, skills and understanding.
- 0 - Very simple tasks which are very well understood, and require little to no effort.
- 1 - Small tasks which are simple, have no unknowns, but will take a short while to implement.
- 3 - Moderate complexity. May involve some uncertainties but are generally straightforward.
- 5 - Larger or more complex tasks, these will involve multiple steps or uncertainties.
- 8 - High complexity with significant uncertainty, this may involve architectural changes. Consider breaking this down into smaller tickets.
- 13 - This ticket is too large and should be broken  down into smaller tasks. 

### Ticket Templates 🎟️
One of the first stages of the project was setting up ticket templates, these templates ensured tickets were created with consistent format and information by prefilling specific questions/headings each time a new ticket was created. To make sure these templates were as relevant as possible, I create three separate templates for each type of issue, "feature", "bug" and "admin":  
![templates](https://github.com/user-attachments/assets/31f2bdad-79fc-46d9-9de3-30e6dc5c77b3)  

The below screenshot shows an example of the blank "feature" template, prior to filling in the details. The template includes four primary sections, Description, Objectives, Dependencies, and Notes; these predefined fields reduce the time needed to create detailed tickets, streamlining the process and minimising missed information by prompting the author to think about each heading and what information would be most suitable.

![feature template](https://github.com/user-attachments/assets/12df1b52-3e3e-40c0-b783-1c9d1f6921d3)


# Project Planning 🗺️

## Wireframing Potential Designs ✍
The first stage to planning the applications front end design was to utilise FIGMA to wireframe some potential designs which could later be narrowed down and further refined.  
The first step of this process was to identify the key user actions which would be involved in the process. This process had already begun through the previous work defining and agreeing upon a set of requirements for the project. To further build upon this work, I created an activity diagram which breaks down the process of creating a currency into individual steps that would be taken by the user.

### Activity Diagram
![Activity Diagram drawio](https://github.com/user-attachments/assets/083addca-8b1e-4566-943e-538f1b8893bb)

### Wireframing
From the above activity diagram, I was able to build three functionally identical, but visually different wireframe mockups. The purpose of this exercise is to experiment with very high level design concepts to determine which UI design is best suited, without having to complete a full design of each potential solution. Since a key requirement of this project is a responsive design which scales to support both desktop and mobile devices, each wireframe has been built to include a desktop as well as mobile equivalent. In addition to this, each wireframe is separated into two parts, the input phase, and the result phase. This helps to make it clear how the result of the calculation will be displayed to the user for each different design. For the purposes of wireframing, only a happy path user flow has been designed, any validation messages or error notifications will be included at the full design stage.

#### Wireframe 1
![wireframe 1](https://github.com/user-attachments/assets/fa81de2f-b6ba-4b63-9490-edb9c9eade34)

#### Wireframe 2
![wireframe 2](https://github.com/user-attachments/assets/c3367fd9-5651-4707-a2ba-8cfa999707a9)

#### Wireframe 3
![wireframe 3](https://github.com/user-attachments/assets/011b57fb-024a-49ce-a141-f5e643d74bef)

## Application Design ✍
### Colour Scheme 🎨
One of the key requirements of this project is to ensure accessibility is incorporated throughout the design. The World Wide Web Consortium (https://www.w3.org/), publishes Web Content Accessibility Guidelines which provide guidance on using colour and contrast to make webpages more accessible.
My workplace already utilises a colour scheme which complies with the World Wide Web Consortiums guidelines on colour and contrast and so this project will reutilise the colour codes referenced in the below image to ensure suitable contrast between elements on the web page.  
![image](https://github.com/user-attachments/assets/8e48cfb6-1636-4118-a48c-89e0400beabf)
Source: https://www.bankofengland.co.uk/news/2022/march/new-visual-identity

### Product Design ✍
Before building the application, it was important to design how it would look. To do this, I utilised the wireframe designs from earlier in the project and selected Wireframe 2 as the candidate design for further development. Wireframe 2 was chosen for it's effective use of space, clear flow and inclusion of accessible labelling of input forms.
![Comparison](https://github.com/user-attachments/assets/11fe1f16-841e-4cb7-b220-3d755d179d3b)  

The full design of the Currency Converter replaces generic icons and elements with colour correct designs as well as utilising the icons from Google Fonts, a free and open source repository of accessible icons.

### Error Handling ⚠️
The first iteration of the full design utilised "Toast" messages to convey information about validation of network errors, however, upon further research it became clear that toast messages were not considered an accessible method of adding additional information. This is because toast messages can often cause issues for people with attention or focus disabilities, can obstruct important elements on the screen for those using zoomed-in browsers, as well as often not working well with screen readers.  
In response to this, I have updated the design to include error messages within the content, this improves accessibility as important error messages no longer automatically expire after a set period, and should also appear in a more relevant location within the DOM.  
![Toast Comparison](https://github.com/user-attachments/assets/78fa520e-f17a-42a5-aba3-d1229d308953)

### Final Design ✍
Once the design elements were confirmed, I built a set of designs in Figma representing each major stage of the activity diagram previously created. This helps to give a sense of how the application will look and interact before building it. One advantage to doing this is the ability to seek feedback on designs prior to building them, this way stakeholders can comment on potential issues or concerns before too much time is spent developing a certain design.

#### Desktop Design 🖥️
![Final Design Desktop Comparison](https://github.com/user-attachments/assets/9dfebab1-b814-43ab-9abd-6cbd8c27d3b4)

#### Mobile Design 📱
![Final Design Mobile Comparison](https://github.com/user-attachments/assets/0fb80cd9-f859-4522-8428-aa179c353452)

# Project Development 🧑‍💻
## Development Overview 🔎
Once the project planning and design stage was completed, I begun work on developing the currency converter application. The project was first initialised by utilising the "Create React App" maintained by Meta, this provided a foundation application setup with JS, HTML, CSS and Jest for unit testing. With the application initialised, I broke the application into three major subsections, API handling, Business Logic, and User Interface. These subsections were developed independently for a variety of reasons, namely, superior reusability, readability, simplified testing, and better maintainability.

### Project Timeline ⏱️
The below diagram is a high-level representation of the project development timeline, from the initialisation of the project, through to delivery of the final product.
![coding timeline drawio](https://github.com/user-attachments/assets/f88bdf3f-3bbd-4ef9-b5b7-f84e07cb1573)

1. **Project Initialisation -** During Project Initialisation I used the tool 'Create React App' (CRA) to initialise a barebones application.
2. **Testing Setup -** At this stage, Jest was installed, configured and tested to ensure the application was capable of running unit tests which will be written at later stages in the product development timeline.
3. **UI Testing -** For UI testing, I first identified each of the essential UI components which would be required to meet the requirements confirmed during the project planning phase, as well as the UI design confirmed earlier in the project.
4. **Adding UI Elements -** Each of the previously identified essential UI components were then added to the project, however these had no styling or functionality applied to them at this stage. This addition enabled the previous tests to begin successfully validating.
5. **API Testing -** Based on the previously defined project requirements, unit tests were written to cover the expected functionality of the API, including error handling.
6. **API Functionality -** At this stage, API functionality was added to the project, this enabled the requesting of data from the API, as well as the handling of API responses, however it does not include the application of this data within business logic.
7. **Business Logic Testing -** Fully covering business logic was an important stage of the development process as this is the core of the application, therefore it was important to correctly identify all test cases. At this stage, I worked through the expected flow of data through the currency conversion process, and ensured tests were written for each stage, this ensures that the test suite will detect any subtle issues with the conversion process potentially introduced in future updates.
8. **Business Logic Implementation -** This stage involved implementing business logic, most notably, the ability to convert currencies, whilst this was not yet integrated with the user interface, I was able to utilise the previously written tests to confirm functionality.
9. **UI Integration -** Existing UI elements could now be connected to the business logic and API to enable functionality of the application.
10. **End-To-End Integration -** Once all stages of the application were connected, I could now test and confirm unit tests were working as expected and that the application was sending API requests, as well as calculating conversions correctly based on UI inputs.
11. **UI Styling -** With the application fully functional, I could now style the application to match the design previously confirmed earlier in the project. This involved styling CSS and modifying the existing UI elements to reproduce the existing design.

## CI/CD Pipeline ⚙️     
To improve the efficiency of development, I set up a continuous integration and deployment pipeline utilising GitHub actions, not only did this automate the process of deploying my code to the live environment (Hosted on GitHub pages), but it also allowed for the automation of additional code quality and functionality testing. When configuring my CI/CD pipeline, I integrated the previously set up Jest testing framework, this automated the process of running Jest unit tests on each pull request and merge into master. By doing so, I was able to better evaluate whether pull requests were suitable for merging into the main branch without having to run test suites manually. In addition to utilising Jest, I set up and enabled the use of CodeCov, using GitHub Secrets to communicate with the CodeCov platform, this automated code quality assurance checks to measure the percentage of code covered by Jest unit tests. A low score would be a strong indication that a pull request was not yet ready to be merged and should instead be rewritten to better cover functionality with unit tests. The below screenshot provides an example of a PR which failed CodeCov assurance tests which resulted in additional changes being made to ensure full code coverage before the PR was allowed to be merged.  
![codecov failure](https://github.com/user-attachments/assets/1df7b128-256b-469d-a9b5-fde4269f9a02)

The below screenshot shows the CI/CD pipeline running unit tests and confirming a fully passing set of test suites. There are a total of four suites of tests:
1. UI Tests
2. API Handling
3. API Request Building/Response Parsing
4. Business Logic (Currency Converting)
   
![successful tests](https://github.com/user-attachments/assets/5d895b03-3a53-4e07-8168-f4ef89ea8492)


## Test Driven Development 🧪
I utilised Test Driven Development for the development of this project. To this end, I wrote unit tests prior to developing functionality, this helped to clarify requirements but also provide immediate feedback on code functionality by highlighting any code which is not working as unexpected.  
A significant volume of the created unit tests covered the core business functionality of currency conversion, a basic example of this is a happy path currency conversion as shown below:  
![test example](https://github.com/user-attachments/assets/5e618455-bc51-47e9-b76c-78356cb38e5c)  

In this test, a mock of the exchange rate fetching mechanism is run, the reason for this is that we do not want to actually test the exchange rate fetching mechanism in this specific unit test. The rest of the values are given as basic, expected values, this test confirms that the primary use case is functional, whilst other more specific tests are used for testing edge cases and errors.



# Usability & Accessibility ✅
In addition to the functional requirements tackled by this project, there were non-functional requirements which needed to be met. These included:
- **Responsive Design**: The application should be usable on both desktop and mobile devices.
- **Performance**: The conversion process should be quick, ideally under 1 second.
- **Accessibility**: Ensure keyboard navigation and screen reader support.

To help determine the performance and accessibility of my project, I utilised Google Lighthouse, an open-source tool for webpage auditing. Lighthouse provides a score in four areas, **Performance, Accessibility, Best Practices, & SEO**, since this prototype would be utilised as an internal tool, we will disregard SEO (Search Engine Optimisation).  
![perfect score](https://github.com/user-attachments/assets/03d28d8a-c015-4c52-8278-8d9365313779)


## Performance 🏎️
A key requirement for the application was good performance, measured by a response time under 1 second. Google Lighthouse provides a perfect 100/100 score for performance of this application. In addition to this, I measured the API response time to ensure that messages were of sufficient speed.  
![image](https://github.com/user-attachments/assets/7c96fe80-fb99-4271-8c3e-afc969994552)  
The above screenshot shows timings of a standard API call initiated by the user via the user interface. The measured response time is 1.36ms, and the perceived response time was consistently measured at under 1 second response time.

## Accessibility 🔎
Accessibility was a key requirement mentioned within the requirements document, this included supporting the use of screen-readers and other accessibility tools. The original MVP of this project had a lower accessibility score than the score of **94** shown above. Originally the project scored just **83**, Lighthouse listed a lack of labelled inputs as the primary cause for this lower score.
![low score](https://github.com/user-attachments/assets/3c5745e6-9d80-468c-bcd1-c057b1337b6c)  
To resolve this issue I researched webpage labelling and discovered you have to specifically map labels to the relevant input fields. I added IDs to the labels using `id='lbl-currencyFrom'` and then provided similar mappings in the definition of each select element `aria-labelledby="lbl-currencyFrom"`. This change increased the accessibility score by 11, bringing the new total to 94%.  
 ![lighthouse final score](https://github.com/user-attachments/assets/4a72a5c4-a7bd-49f5-8359-ceaef6561a7d)  



In addition to this, the application passed 15 other Lighthouse accessibility audits, including accessible naming, scaling, touch screen support, and correctly ordered elements for screen readers.  

Finally, as shown below Lighthouse failed the application on contrast ratio in relation to action buttons.
![contrast](https://github.com/user-attachments/assets/f9b29086-3872-4d04-8fa9-da386db41d39)  

Upon further research, it is clear that the wrong colour was utilised in the original designs and the organisation's colour scheme intends for a dark blue colour to be used as text on light blue buttons, rather than white as the text colour. This was soon rectified and the accessibility score further improved to be 100/100 in all categories.  
![perfect score](https://github.com/user-attachments/assets/4ae19641-f671-428f-9445-7b4bd6a63521)


# Project Analysis & Reflection 🔬
The initial project proposal laid out several key functional and non-functional requirements, measured against these requirements, I consider this project to be a success.

## Final Product
Screenshots of the final product are available below, as well as a link to the hosted application which can be found at: https://rmdtech.github.io/ASE-Summ2/  
### Desktop View 🖥️
![desktop view](https://github.com/user-attachments/assets/e982c4f2-6441-46a9-ac88-6a9fafba0118)

### Mobile View 📱
![Mobile View](https://github.com/user-attachments/assets/c1d25119-8456-4ca7-bb63-826060996015)

## Requirements Reflection

#### 1. User Interface (UI) 🖥️
- [x] **Input Field for Amount**: Users should be able to input the amount they want to convert.
  - Implemented using an input field with validation for numerical values.
- [x]  **Selection method for Currencies**: A method is required for selecting the source currency and another for the target currency.
  - Implemented two dropdowns for source and target currency selection.
  - API data-driven options for supported currencies.
- [x]  **Convert Button**: A button to trigger the conversion process.
  - Added a button with the label "Convert" and an onclick handler for the conversion logic.
- [x]  **Result Display**: A field or label to show the converted amount.
  - Added two tier result field which displays the original query in small text and the resulting value in larger text.
- [x]  **Swap Currencies**: As requested by stakeholders as part of feedback on existing requirements, a "swap currencies" functionality was requested, to swap To/From currency selection for conversion.
  - Added a swap button and an onclick handler for the swapping logic.
  
#### 2. Currency Data 💵
- [x]  **Currency List**: At a minimum, include major currencies such as USD, EUR, GBP, JPY, etc.
  - This requirement was met and exceeded, with every major currency included via API requests
- [x]  **Live Exchange Rates**: Fetch live exchange rates from an API
  - API requests were implemented to retrieve a list of the currencies available via the API

#### 3. Backend Logic ⚙️
- [x]  **Conversion Formula**: Implement a basic conversion formula:  
  `Converted Amount = Amount * Exchange Rate`
  - Formula applied in the backend, and calculations validated with test cases.
- [x]  **Fetch Exchange Rates**: Integrate API calls to retrieve current exchange rates.
  - API requests were implemented to ensure up to date rates were available for the application

#### 4. Validation ✅
- [x]  **Input Validation**: Ensure the user enters valid numbers in the amount field.
  - Added validation to restrict input to numerical values and prevent empty submissions.
  - Error message displayed for invalid inputs.

#### 5. Error Handling ⛔
- [x]  **Network Errors**: Display appropriate error messages if there's an issue fetching exchange rates.
  - API successfully returns error messages in the event of a network issue.
- [x]  **Input Errors**: Display user-friendly error messages for invalid inputs or selections.
  - User prompted with "Amount must be a valid number" if input is incorrect.

#### 6. Non-functional Requirements ⏩
- [x]  **Responsive Design**: The application should be usable on both desktop and mobile devices.
  - Implemented using CSS media queries. Tested on various screen sizes.
- [x]  **Performance**: The conversion process should be quick, ideally under 1 second.
  - Conversion and API response times have been consistently measured at an under one second response time.
- [x]  **Accessibility**: Ensure keyboard navigation and screen reader support.
  - Included use of ARIA labels for screen readers.
  - Utilised award winning design language utilised by my workplace
  - Implemented a font utilised by my employer for it's professional design and ease of readability for those with impairments.

## Future Scope
With additional time and resources on this project there are some additional features I would like to implement based on feedback from colleagues, notably the inclusion of a conversion history so that I can see a list of all the conversions completed within my session. In addition to this, if the project were scaled up, I would like to include additional test environments so that a tester could validate changes without having to merge changes into the live environment or download changes locally.
