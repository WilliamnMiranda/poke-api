import React, { SetStateAction } from 'react'

interface IContextError {
    error: string,
    setError: React.Dispatch<SetStateAction<string>>
}
interface IChildren {
    children: React.ReactNode
}
const initialValue = {
    error: '',
    setError: () => { }
}
export const ErrorContext = React.createContext<IContextError>(initialValue);

export const ErrorProvider = ({ children }: IChildren) => {
    const [error, setError] = React.useState<string>('')
    return (
        <ErrorContext.Provider value={{ error, setError }}>
            {children}
        </ErrorContext.Provider>
    )
}