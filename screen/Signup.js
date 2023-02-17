import { useNavigate } from "react-router-dom";
import { Button, TextField, Box } from "@mui/material";
import { useState } from "react";

function Signup() {
    const navigation = useNavigate();
    const [data,setData] = useState('');

    return (
        <>
            <Box className="text">
                <Box>
                    <span className="spn">Your Name :</span>
                    <TextField id="outlined-basic" value={data} label="Your name" variant="outlined" onChange={(e) => setData(console.log(e.target.value)) } />
                </Box>
                <Box>
                    <span className="spn">Your Email :</span>
                    <TextField id="outlined-basic" label="Email" variant="outlined" />
                </Box>
            </Box>
            <Box className="hnlo">
                <Button variant="contained" className="hnlo" onClick={() => { navigation("/home") }}>Sign up</Button>
            </Box>
        </>
    )
}
export default Signup;