# **Milhas**

## **Introduction**

Milhas is a router specifically designed for developing Single-Page Applications (SPAs) with React. It provides an easy and efficient way to manage navigation within a React application, allowing developers to create dynamic and responsive user experiences.

## **Components**

### **Router**

The router acts as a container for all the navigation-related components and manages the navigation within the application.

### **Path**

The `Path` component is used to define a specific path within the application. It can be used with the `as` prop to specify the path that should match. Additionally, it supports an optional `absolute` prop.

- The `as` prop is used to define the path pattern that should match. It can include static segments and placeholders for dynamic values. Placeholders are denoted by a `:` symbol followed by a variable name, such as `:id`. These placeholders can capture dynamic values from the URL.

- The `absolute` prop, when set to `true`, requires an exact match of the path. If the `absolute` prop is not used or set to `false`, the path will match partially. This means that a path with placeholders can match a URL with additional segments before or after the placeholder value.

### **Anchor**

The `Anchor` component represents a hyperlink within the application. It can be used to navigate to different paths or perform other actions when clicked.

### **Redirect**

The `Redirect` component automatically redirects the user to another path when rendered.

### **E404**

The `E404` component is rendered when none of the defined paths match the current URL. It serves as an error page or a fallback component. Inside this component, you can define the content to be displayed when a route is not found.

## **Example**

```tsx
<Router>
  <Path as="/home">
    <p>Hello from Kruceo</p>
  </Path>

  <Path as="/about" absolute>
    <p>This will only match the exact "/about" path!</p>
  </Path>

  <Path as="/product/:id" absolute>
   
    <p>This will match any "pruduct" path with another path to follow. Like "/products/123"</p>
  </Path>

  <E404>
    <p>Oops... This page doesn't seem to exist!</p>
  </E404>
</Router>
```