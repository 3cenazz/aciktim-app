# Creating the Draft for Website

https://www.figma.com/file/UJ8l9wJ22S5zYZv945tsd5/App-Project-Draft?type=design&node-id=121-2&mode=design&t=W6dAoZImEF5MeOXN-0

# The Project

The project for a user-friendly food ordering application that streamlines the process for customers. The purpose is providing an easy-to-use interface for customers to browse a menu, select items, and complete their orders with a few simple steps.
The "Customer Web App."  will be a crucial component of the food ordering system, allowing customers to access the restaurant's menu, add items to their basket, and confirm their purchases. I will be responsible for designing the user interface (UI) for the web app, ensuring a visually appealing and intuitive experience for users. The project is one where customers can easily navigate the web app, add items to their basket, complete orders, and receive confirmation of their purchases.

# Tools and Techniques Used

## Programming languages: 

For our project, we chose a combination of programming languages, including HTML, CSS, and JavaScript. These choices were driven by the nature of our web-based application. JavaScript, being a fundamental language for web development, was a logical choice due to its ability to create interactive and dynamic experiences, allowing user interactions on web pages. Moreover, key web development libraries and frameworks like React and Redux are JavaScript-based, which streamlined our development process. However, JavaScript's lack of type safety and potential compatibility issues across different browsers are some of its drawbacks. Alternatives like TypeScript, which offer stricter type checking, could have been considered. Nevertheless, we opted for JavaScript because it aligned better with our fast-paced development needs. To provide the structure for our web content, we employed HTML (Hyper Text Markup Language). HTML played a pivotal role in defining the content and structure of our web pages. Simultaneously, CSS (Cascading Style Sheets) was instrumental in enhancing the visual appeal of our web pages by adding styles and presentation to HTML elements. By leveraging these three technologies, we were able to create a robust and visually appealing web-based application.

## Software: 

We used React, JavaScript library, since it is a powerful tool that employs a virtual DOM, ensuring that redundant rendering is avoided when the real DOM remains unchanged. In contrast, tools like jQuery tend to trigger rendering unnecessarily while simplifying DOM manipulation, event handling, AJAX requests, and basic animations. In React, components have a one-way relationship with their child components. While this can make data transfer between components challenging (a problem Redux solves), it also prevents unnecessary rendering of the entire page when changes occur in a single component, thus improving performance. To be able to navigate between pages we used React Router, JavaScript framework. Additionally, Memoization with React memo prevents unnecessary renders for primitive types, helping optimize performance.
In React transferring data by component drilling is inefficient and requires writing a lot of code. To avoid component drilling, state management is necessity. For state management there are plenty of options like MobX (easier to learn and implement than Redux), Recoil (recently quite popular), Context provided by React (very easy to learn and to use, but it is insufficient and not efficient), Akita (known for its simplicity and performance focus, provides an alternative approach worth considering), and Apollo (good option with GraphQL which we did not use because we used MySQL for database) each with its own merits and ease of learning. However, we used Redux as a state management library because it is a well-known and common choice in the industry because it effectively manages the application's state. It provides a clear and structured way to handle state and actions, making it a reliable choice for maintaining a predictable state in complex applications. Redux Toolkit is a toolset to be able to utilize Redux for easier and more efficient way.
We used Bootstrap, CSS framework, due to it simplifies the process of styling and layout in web development. It provides pre-designed CSS styles and JavaScript components, making it easier to create responsive and visually appealing web pages. For form management, simplifying the creation of complex forms with minimal effort, Formik is a valuable tool. It is particularly useful for handling form operations efficiently. In forms such as in the login page, validations are required to control the values entered by the user and guide the user. For validation, the Yup library is a versatile choice suitable for JavaScript projects of all kinds. To ensure certain processes are not reset but continue from their last state, localStorage is a JavaScript API which allows data to persist even when the page is refreshed. 
For databases, from options MongoDB (provides flexible data models), Redis (serves as a versatile data store, commonly used for storing messages in chat applications while has various other use cases), we chose MySQL. Because MySQL provides a reliable and scalable relational database solution with strong data integrity, making it well-suited for our project's requirements and industry standards.	
These tools streamlined collaboration within our team and allowed us to track project progress and version history. While alternative software with additional features may exist, the ones we selected best catered to our project's needs and enhanced our development process. 

## Hardware: 

As our project is web-based, it does not require specific hardware. A standard computer or mobile device capable of running a modern web browser is sufficient to access and use our project.

## Techniques: 

Component-Based Development: Our project was structured around a component-based architecture. This approach involved breaking down the application into modular, reusable components. Each component encapsulated specific functionality, promoting code reusability, and maintainability.
Single-Page Application (SPA): We implemented the SPA concept to enhance the user experience. SPAs load a single HTML page and dynamically update content as users interact with the application, reducing the need for full-page refreshes. This approach resulted in faster navigation and improved responsiveness.
State Management: We adopted Redux, a predictable state container, to manage the application's global state. Redux facilitated the management of complex data flows, ensuring consistency and simplifying debugging and testing.
These techniques collectively contributed to the efficiency, scalability, and user-friendliness of our project.

# Structure

The format is classifying code, for instance, the “pages” folder includes completed version of the pages used on the website. The “components” folder created to keep common web page elements and joint coded. Almost every page had a header and footer, so to prevent rewriting same code in every page, we wrote them in a “components” folder once and used the file in the pages by importing. In the “styles” folder there were CSS format of pages and components. With the “redux” folder, we saved redux operations which are slicers for pages and store. The “images” folder kept pictures for using in pages and components. Lastly, the “services” folder was for the api file, and the “validation” folder was for checking inputs. 

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
