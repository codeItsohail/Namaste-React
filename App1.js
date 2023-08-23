const heading = React.createElement(
    'h1',
    {class:"header xyz" , xyz:"dk"},
    "hello world in React");

const root1 = ReactDOM.createRoot(document.getElementById('root1'));
root1.render(heading);   

/* 
<div id="parent">
<div id="child">
    <h1>I am in h1 tag</h1>
    <h2>I am in h2 tag</h2>
</div>
</div>
 */

//we will now create this type of structure using core basic react

const parent = React.createElement(
    "div",
    {id:'parent'},
    React.createElement(
        'div',
        {id:'child'},
        [ React.createElement('h1',{},'I am in h1 tag'), React.createElement('h2',{},'I am in h2 tag') ]
    )
)

const root2 = ReactDOM.createRoot(document.getElementById('root2'));

root2.render(parent);

