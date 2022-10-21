export function Greeting({title,name="User"}){
   console.log(title,name)
   return <h1>{title}, dice {name}</h1>
}

export function UserCard({name,amount,married,addres,greet}){
    console.log(name,amount,married,addres,greet)
    return <div>
        <h1>{name}</h1>
        <h1>💲{amount}</h1>
        <p>{married? 'married':'single'}</p>
        <ul>
            <li>City: {addres.city}</li>
            <li>Street:{addres.street}</li>
        </ul>
    </div>
}
