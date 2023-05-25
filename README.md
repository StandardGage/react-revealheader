# Basic Usage of React-RevealHeader
The **React-RevealHeader** package provides a simple and intuitive way to include a responsive header in your application that disappears when scrolling down and reappears when scrolling up. This basic usage example will guide you through creating a simple navigation header with this behavior.

The component is meant to prioritize customizability and versatility for your projects.

## Installation
Install the package with npm:
```bash
npm install react-reveal-header
```
or with yarn:
```bash
yarn add react-reveal-header
```

Next, import the component into your React app:
```jsx
import RevealHeader from 'react-reveal-header';
```

Now, you can use the **RevealHeader** component in your React app. For instance, here's how you might create a simple navigation bar:

```jsx
<RevealHeader>
<nav>
  <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>
</RevealHeader>
```

## Props
The **RevealHeader** component accepts the following props:
| Prop | Type | Default | Description |
| --- | --- | --- | --- |
|'neutralColor'|string|'white'|The color of the header when it sits at the top of the page.|
|'upColor'|string|'white'|The color of the header when it is scrolling up.|
|'throttleAmount'|number|25|The amount of time (in milliseconds) to wait before updating the header's visibility. Used to help with performance.|
|'parentRef'|React.RefObject|null|A reference to the parent element of the header. If not provided, the header will use the window as its parent. Used to make headers for elements other than the window.|
|'children'|any|<div>React Reveal-Header</div>|The content of the header.|

# Examples

## Example with dropdown
```jsx
<RevealHeader>
    <div className='group'>
        Hello There
        <div className='bg-white hidden group-hover:block'>General</div>
        <div className='bg-white hidden group-hover:block'>Kenobi</div>
    </div>
</RevealHeader>
```
### [Dropdown Example](https://codesandbox.io/s/dropdown-example-0vms1l?file=/src/App.js)

## Example with react-router
```jsx
<RevealHeader>
    <div>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
    </div>
</RevealHeader>
<Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
</Routes>
```
### [Router Example](https://codesandbox.io/s/router-example-ur7tvy?file=/src/App.js)


## Example with tailwindcss
```jsx
<RevealHeader neutralColor="bg-neutral-500" upColor="bg-neutral-500 hover:bg-slate-500">
</RevealHeader>
