import React from 'react';
import { Page, Text, Document, StyleSheet } from '@react-pdf/renderer'
const styles = StyleSheet.create({
    header: {
        fontSize: 20,
        margin:5,
        display:'block',
        fontWeight:500
    },
    para:{
        fontSize:14,
    },
    page:{
        padding:10
        
    }
})
const PDF = () => {
    return (
        <Document>
            <Page size={'A4'} style={styles.page}>
                <Text style={styles.header}>
                    Differences between uncontrolled and controlled components ?
                </Text>
                <Text style={styles.para}>
                    In React, a controlled component is a component that is controlled by React state, while an uncontrolled component is a component that maintains its own internal state. A controlled component receives its current value and an update callback via props, and the parent component manages the state of the component. When the user interacts with the component, the parent component updates the state, which in turn updates the component's value. An uncontrolled component, maintains its own internal state, and when the user interacts with the component, it updates its own state, which in turn updates the component's value.
                </Text>
                <Text style={styles.header}>
                   How to validate React props using PropTypes?
                </Text>
                <Text style={styles.para}>
               
                        React provides a way to validate the props that are passed to a component using PropTypes. PropTypes is a validation library that allows you to specify the types of props that your component expects. By validating the props, you can ensure that your component receives the correct data types and structures, which can help to catch bugs and improve the overall reliability of your code. To use PropTypes, you need to import it from the 'prop-types' package and define the PropTypes for your component by adding a propTypes property to your component. You can then define the PropTypes for each prop by specifying the data type and any additional validation rules, such as whether the prop is required or optional. PropTypes supports a wide range of data types, including strings, numbers, arrays, objects, and even custom data types. By using PropTypes to validate your props, you can make your code more robust and easier to maintain, as it provides a clear definition of the expected props for your
                    
                </Text>
                <Text style={styles.header}>
                Difference between nodejs and express js
                </Text>
                <Text style={styles.para}>

                    
                        Node.js is a runtime environment for executing JavaScript code outside of a web browser. It allows developers to use JavaScript for building server-side applications, as well as command-line tools and scripts. Node.js provides an event-driven, non-blocking I/O model that enables fast, scalable, and efficient applications. It also comes with a built-in package manager called npm, which provides access to a vast ecosystem of open-source libraries and tools. On the other hand, Express.js is a web application framework built on top of Node.js. It provides a set of features for building web applications, such as routing, middleware, and templating. Express.js simplifies the process of building server-side applications by providing a well-structured and organized codebase, which helps developers to avoid common pitfalls and write clean, maintainable code. Express.js also integrates seamlessly with other Node.js modules and third-party libraries, which makes it easy to extend and customize
                    
                </Text>

                <Text style={styles.header}>
                    What is a custom hook, and why will you create a custom hook?
                </Text>

                <Text style={styles.para}>
                    
                        A custom hook in React is a JavaScript function that allows you to reuse stateful logic across multiple components in your application. It is a way to encapsulate reusable logic so that it can be shared between components and avoid code duplication. Custom hooks are created by composing built-in hooks or other custom hooks together. They use the same rules as React's built-in hooks, meaning that they can only be called from within functional components or other custom hooks.
                    
                </Text>
                
            </Page>
        </Document>
    )
};

export default PDF;