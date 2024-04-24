import toast from "react-hot-toast";
import RegisterFormField from "../RegisterFormFields/RegisterFormField"
import './RegisterForm.css'
import React, {useState} from "react";


const RegisterForm = (props) => {
    
    const [values,setValues] = useState({
        username:"",
        age:"",
        cpf:"",
        email:"",
        password:"",
        confirmPassword:""
    });

    const inputs = [
        {
            id:1,
            name: "username",
            placeholder: "Insira seu nome",
            errorMessage: "O nome deve ter 3-16 caracteres e não deve conter caracteres especiais",
            type: "text",
            pattern:"[a-zA-ZÀ-ú]{3,16}$",
            required: true
        },
        {
            id:2,
            name: "age",
            placeholder: "Insira sua idade",
            errorMessage: "",
            type: "date",
            pattern:"",
            required: true
        },
        {
            id:3,
            name: "cpf",
            placeholder: "Insira seu cpf",
            errorMessage: "cpf deve ser no padrão 123.456.789-11",
            type: "text",
            pattern:"^[0-9]{11}",
            required: true
        },
        {
            id:4,
            name: "email",
            placeholder: "Insira o email",
            errorMessage: "Insira um e-mail valido",
            type: "text",
            pattern: "^[a-z0-9.]{1,64}@[a-z0-9.]{1,255}",
            required: true
        },
        {
            id:5,
            name: "password",
            placeholder: "Insira a senha desejada",
            errorMessage: "A senha deve conter ao menos 8 caracteres, 1 letra maiúscula, 1 letra minúscula e 1 caractere especial",
            type: "password",
            pattern:"^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
            required: true
        },
        {
            id:6,
            name: "confirmPassword",
            placeholder: "Confirme a senha",
            errorMessage: "As senhas precisam ser iguais",
            type: "password",
            pattern: values.password,
            required: true
        },
    ]


    const submitForm = (e) =>{
        e.preventDefault()
        const formData = new FormData(e.target);
        const payload = Object.fromEntries(formData);
        payload.age = getAge(payload.age)
        fetch('http://localhost:8080/usuarios',{
            method: 'POST',
            headers: {"Content-Type":  "application/json"},
            body: JSON.stringify(payload)
        }).then((response) =>{
            if(!response.ok){toast.error("Usuario não foi registrado")}
            if(response.ok){toast.success("Usario registrado")}
            console.log("new User added")
        })
        console.log(payload);
    }
    const onChange = (e) =>{
        setValues({...values, [e.target.name]: e.target.value});
    }

    function getAge(dob){
        var today = new Date();
        var birthDate = new Date(dob);  
        var age_now = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
        {
            age_now--;
        }
        console.log(age_now);
        return age_now;
    }

    return(
        <div className="container-form">
            <h2>Cadastro Usuario</h2>
            <form onSubmit={submitForm} className="form">
                {inputs.map((input) =>(
                    <RegisterFormField key={input.id} {...input} value = {values[input.name]} onChange={onChange} />
                ))}
                <button type="submit">Registrar</button>
            </form>
        </div>
    )
}

export default RegisterForm