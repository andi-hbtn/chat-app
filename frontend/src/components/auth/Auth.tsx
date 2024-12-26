import { Button, Stack, TextField } from "@mui/material"
import { useState } from "react";


interface AuthProps{
    submitLabel:string,
    onSubmit:(credentials:{email:string;password:string})=>Promise<void>,
    children:React.ReactNode
}

const Auth = ({submitLabel,onSubmit,children}:AuthProps) =>{
    const [value,setValue] = useState({email:"",password:""});

    const handleChange =(event: React.ChangeEvent<HTMLInputElement>):void=>{
       const {name,value} = event.target;
       setValue((prevState)=>{
        return{...prevState,[name]:value}
       })
    }

    const handleClick = ()=>{

    }

    return(
        <Stack spacing={3} sx={
            {
                height:"100vh", 
                width:"40%",
                justifyContent:"center",
                maxWidth:{xs:"70%",md:"40%"},
                margin:"0 auto"
            }
                }>
                    <TextField type="email" label="Email" variant="outlined" name="email" value={value.email} onChange={handleChange}/>
                    <TextField type="password" label="Paassword" variant="outlined" name="password" value={value.password} onChange={handleChange}/>
                    <Button variant="contained" onClick={handleClick}>{submitLabel}</Button>
                    {children}
        </Stack>
    )
}

export default Auth;