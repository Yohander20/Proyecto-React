import React from 'react'
import ReactDom from 'react-dom'
import {Posts} from './Post'

const root=ReactDom.createRoot(document.getElementById('root'))

const handleChange = (e) =>{
console.log(e.target.value)
}

root.render(<div>
   <>
  <Posts/>
   </>
</div>)