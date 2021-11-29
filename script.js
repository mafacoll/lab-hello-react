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

function Title(){
    return <h1>Say hello to ReactJS</h1>

}

function Introduction(){
    return <h2>You will learn how to use <br/>
        the most popular frontend library, <br/>
        and become a super Ninja developer. 
    </h2>
}


function DeclarativeImage(){
    return <img src="icon1.png" alt="Ironhack Logo"/>

}

function ComponentsImage(){
    return <img src="icon2.png" alt="Ironhack Logo"/>

}

function SingleImage(){
    return <img src="icon3.png" alt="Ironhack Logo"/>

}

function JsxImage(){
    return <img src="icon4.png" alt="Ironhack Logo"/>

}

function MyApp(){
    return(
        <div>
        <IronhackImage/>
        <MenuImage/>
        <Title/>
        <Introduction/>
        <DeclarativeImage/>
        <ComponentsImage/>
        <SingleImage/>
        <JsxImage/>
        </div>
    )
}

ReactDOM.render(<MyApp/>, document.querySelector('#lab'))

