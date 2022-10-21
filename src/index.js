import React from 'react'
import ReactDom from 'react-dom'
import {Greeting,UserCard} from './Greeting'
import Product,{Navbar} from './Product'
import {Button} from './Button'

const root=ReactDom.createRoot(document.getElementById('root'))
root.render(<h1>Hello world</h1>)


function Greeting1(){
    const user={
        name:'ryan',

        lastname:'Ray'
    }
    return <div>
        <h1>{user.name}</h1>
        <h3>{user.lastname}</h3>
    </div>
}

root.render(<div>
    <Button text='click me'/>
    <Button text='Pay'/>
    <Button text='Go to'/>

   {
   /*  <UserCard name="Ryan Ray" 
    amount={3000} 
    married={true} 
    points={[99,33.3,22.2]}
    addres={{street:"123 Main Street",city:"New York"}}
    greet={function(){alert('Hello')}}
    />
    <UserCard name="Joe Mcmillan" 
    amount={1000} 
    married={false} 
    points={[100,20]}
    addres={{street:"av some 123",city:"New York"}}
    /> */
    }



</div>)