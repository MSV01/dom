import { Button, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useNavigate } from "react-router-dom"
function Home() {
    const navigation = useNavigate();
    return (
        <>
        <Container>
            <Grid container>
                <Grid item sm={12} md={6} >
                    <Typography variant="h3">Home
                    </Typography>
                </Grid>
                <Grid item sm={12} md={6} className='logout'>
                    <Button variant="contained" className="jj" onClick={() => { navigation("/") }}>Logout</Button>
                </Grid>
                <Grid item sm={12} md={6} lg={12}>
                    <Typography variant="p">Lorem ipsum dolor sit amet consectetur, adipisicing elit. A minima reprehenderit autem asperiores fuga nemo mollitia. Aut ducimus doloribus blanditiis itaque voluptas, optio, consectetur, recusandae aspernatur illum quidem laboriosam quasi!</Typography>
                    <Typography variant="p">Lorem ipsum dolor sit amet consectetur, adipisicing elit. A minima reprehenderit autem asperiores fuga nemo mollitia. Aut ducimus doloribus blanditiis itaque voluptas, optio, consectetur, recusandae aspernatur illum quidem laboriosam quasi!</Typography>
                    <Typography variant="p">Lorem ipsum dolor sit amet consectetur, adipisicing elit. A minima reprehenderit autem asperiores fuga nemo mollitia. Aut ducimus doloribus blanditiis itaque voluptas, optio, consectetur, recusandae aspernatur illum quidem laboriosam quasi!</Typography>
                    <Typography variant="p">Lorem ipsum dolor sit amet consectetur, adipisicing elit. A minima reprehenderit autem asperiores fuga nemo mollitia. Aut ducimus doloribus blanditiis itaque voluptas, optio, consectetur, recusandae aspernatur illum quidem laboriosam quasi!</Typography>
                </Grid>
            </Grid>
            </Container>
        </>
    )
}
export default Home;