import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';


const example1 = `
<RevealHeader>
<nav>
  <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>
</RevealHeader>
`;

export default function Basic() {
    return (
        <div id='basics' className="p-10 w-screen bg-slate-500">
            <h1>Basic Usage of React-RevealHeader</h1>
            <p> The <b>React-RevealHeader</b> component provides a simple and intuitive way to include a responsive header
                in your application that disappears when scrolling down and reappears when scrolling up.
                This basic usage example will guide you through creating a simple navigation header with this behavior.</p>
            <h2>Installation</h2>
            <p>Install the package from npm:</p>
            <SyntaxHighlighter language='shell' style={oneDark}>npm install react-revealheader</SyntaxHighlighter>
            <p>Next, import the <b>RevealHeader</b> component into your React file:</p>
            <SyntaxHighlighter  language='tsx' style={oneDark}>import RevealHeader from 'react-revealheader'</SyntaxHighlighter>
            <p>Now, you can use the <b>RevealHeader</b> component in your React app. 
                For instance, here's how you might create a simple navigation bar:</p>
            <SyntaxHighlighter language="tsx" style={oneDark}>
                {example1}
            </SyntaxHighlighter>
        </div>
    )
}