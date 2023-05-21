import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';


const example1 = `
<RevealHeader>
    <div className='group'>
        Hello There
        <div className='bg-white hidden group-hover:block'>General</div>
        <div className='bg-white hidden group-hover:block'>Kenobi</div>
    </div>
</RevealHeader>
`;

const example2 = `
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
`;

export default function Advanced() {
    return (
        <div id='advanced' className="p-5 w-screen bg-slate-500">
            <h1>Advanced Usage of React-RevealHeader</h1>
            <p> The <b>React-RevealHeader</b> component works with whatever children you put within it. Whether it be dropdowns, react-router, etc... it'll work.
                Plus, the <b>React-RevealHeader</b> will update its height to match the children within. (You may need to reload your page when changing the height of children)</p>
            <h2>Example with dropdown</h2>
            <SyntaxHighlighter language="tsx" style={oneDark}>
                {example1}
            </SyntaxHighlighter>
            <h2>Example with react-router</h2>
            <SyntaxHighlighter language="tsx" style={oneDark}>
                {example2}
            </SyntaxHighlighter>
        </div>
    )
}