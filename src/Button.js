import x from 'prop-types'

export function Button({text}){
    console.log(text)
    return <button>
        {text}
    </button>
}