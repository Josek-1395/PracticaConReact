
import { useState } from "react"
import { useForm } from "../hooks/useForm"
export const FormularioComponent = () => {
    const initialForm = {
        userName: '',
        email: '',
        password: ''
    }
    const { formState, onInputChange } = useForm(initialForm)
    const { userName, email, password } = formState
    const onSubmit = (evento) => {
        evento.preventDefault()
        console.log(formState);
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="userName">User Name</label>
                <input
                    className="form-control"
                    id="userName"
                    placeholder="Enter User Name"
                    value={userName}
                    onChange={onInputChange} />

            </div>
            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input

                    className="form-control"
                    id="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={onInputChange} />

            </div>

            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input

                    className="form-control"
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={onInputChange} />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}
