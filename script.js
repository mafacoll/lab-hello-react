console.log(React)
console.log(ReactDOM)

function IronhackImage(){
    return (
        <div><img src=".ironhack-logo-xs.png" alt="Ironhack Logo"/>
        </div> 
        )
    
}

function MenuImage(){
    return (
    <div><img src="ironhack-logo-xs.png" alt="Ironhack Logo"/>
    </div> 
    )

}


function Introduction(){
    return <div>
    <h1>Say hello to ReactJS</h1>
    <h2>You will learn how to use <br/>
        the most popular frontend library, <br/>
        and become a super Ninja developer. 
    </h2>
    </div> 
}

   


function DeclarativeImage(){
    return <div>
    <img src="icon1.png" alt="Declarative Image"/>
    <h1> Declarative </h1>
    <h2> React makes it <br/>
    painless to create<br/>
    interactive UIs. 
    </h2>
    </div>

}

function ComponentsImage(){
    return<div> 
    <img src="icon2.png" alt="Components Image"/>
    <h1> Components </h1>
    <h2> Build encapsulated <br/>
    components that<br/>
    manage their state. 
    </h2>
    </div>
}

function SingleImage(){
    return <div>
    <img src="icon3.png" alt="SingleImage"/>
    <h1> Single-Way </h1>
    <h2> A set of immutable <br/>
    values are passed<br/>
    to the compnent's.
    </h2>
    </div>
}


function JsxImage(){
    return <div>
    <img src="icon4.png" alt="JSX Logo"/>
    <h1> JSX </h1>
    <h2> Statically-typed <br/>
    designed to run on<br/>
    modern browsers.
    </h2>
    </div>

}

function MyApp(){
    return(
        <div>
        <IronhackImage/>
        <MenuImage/>
        <Introduction/>
        <DeclarativeImage/>
        <ComponentsImage/>
        <SingleImage/>
        <JsxImage/>
        </div>
    )
}

ReactDOM.render(<MyApp/>, document.querySelector('#lab'))

