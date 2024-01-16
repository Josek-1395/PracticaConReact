
import { useState } from "react"
export const FormularioComponent = () => {

    const [formState, setFormState] = useState({
        userName: '',
        email: '',
        password: ''
    })
    const {userName, email, password} = formState

    const onInputChange = ({target}) => {
        const {id, value} = target
        setFormState({
            ...formState,
            [id] : value
        })

    }
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
                    value= {userName}
                    onChange={onInputChange}  />

            </div>
            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                    
                    className="form-control"
                    id="email"
                    placeholder="Enter email"
                    value= {email}
                    onChange={onInputChange}  />

            </div>

            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                    
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    value= {password}
                    onChange={onInputChange}  />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}
