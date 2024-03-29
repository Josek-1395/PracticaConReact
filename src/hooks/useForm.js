import { useState } from "react"
export const useForm = (initialForm = {}) => {
    const [formState, setFormState] = useState(initialForm)
    

    const onInputChange = ({ target }) => {
        const { id, value } = target
        setFormState({
            ...formState,
            [id]: value
        })

    }


    return {
        formState,
        onInputChange
    }
}
