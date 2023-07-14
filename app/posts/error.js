'use client' // error components must be client components

import { useEffect } from "react"

const Error = ({ error, reset }) => {

    useEffect(() => {
        console.log('error', error)
    }, [error])

    return (
        <div>
            <h2>Something went wrontg!</h2>
            <button onClick={reset}>Try again</button>
        </div>
    )
}

export default Error;

