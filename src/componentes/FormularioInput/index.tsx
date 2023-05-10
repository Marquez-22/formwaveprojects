import { Button } from "../Button"
import { Input } from "../Input"

type FormularioInputType = "FormularioInput"

interface FormularioInputProps {
    type?: FormularioInputType



}

export const FormularioInput = ({ type = "FormularioInput" }: FormularioInputProps) => {
    return (<>
        <div className={`FormularioInput ${type}`}>
            <form className="formulario">
                <h1 className="titulo"> Please Login</h1>
                <Input 
                    name="Email"
                    placeholder="Email"
                    typeinput="text"
                />
                <Input
                    name="Contraseña"
                    placeholder="Contraseña"
                    typeinput="password"
                />

                <Button> Login</Button>

                <p className="registrar">Don't have an account? </p>
              
                


            </form>

        </div>



    </>)
}