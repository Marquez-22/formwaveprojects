type InputType ="Input1"

interface InputProps {
    type?:InputType
    typeinput?: "text" | "email" | "password"
    name: string;
    value?: string;
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;



}

export const Input =({type="Input1", typeinput="text", name,placeholder="",required=false, disabled=false }:InputProps)=>{
    return(<>
    <label className={`label ${type}`}>
       <input className="Input"
            type={typeinput}
            name={name}
            placeholder={placeholder}
            required={required}
            disabled={disabled}
        />
      
    </label>
    
    
    </>)
}