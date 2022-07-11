import { useRef, useState } from "react";
import { FaEye, FaLock, FaUnlock } from 'react-icons/fa';

const App = props => {
    const [email, setEmail] = useState("lrodriguez@4geeks.co");
    const [password, setPassword] = useState('12345678');

    const inputRefPasswd = useRef(null);

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <form onSubmit={(e) => {e.preventDefault()}}>

                            <div className="card my-5">
                                <div className="card-header">
                                    Login Form
                                </div>
                                <div className="card-body">
                                    <div className="form-group mb-3">
                                        <label htmlFor="" className="form-label">Username:</label>
                                        <input type="email" className="form-control" placeholder="john.doe@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="" className="form-label">Password:</label>
                                        <div className="input-group">
                                        <span className="input-group-text"><FaLock /></span>
                                            <input ref={inputRefPasswd} type="password" className="form-control" placeholder="********" value={password} onChange={(e) => setPassword(e.target.value)} />
                                            <span className="input-group-text" onClick={() => {
                                                if(inputRefPasswd.current.type === 'password'){
                                                    inputRefPasswd.current.type = "text";
                                                }else{
                                                    inputRefPasswd.current.type = "password";
                                                }
                                            }}><FaEye /></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer d-grid">
                                    <button className="btn btn-primary btn-sm gap-2">
                                        Enviar
                                    </button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App;