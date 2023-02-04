import React from 'react'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function Success() {

    const style = {
        text: {
            color: 'green'
        },
        container: {
            border: '2px solid green',
            borderRadius: `10px`
        }
    }

    return (
        <React.Fragment>
            <br />
            <Typography component="h1" variant="h4" align="center">
                Confirmation
            </Typography>
            <br />
            <hr />
            <br />
            <Container sx={style.container}>
                <br />
                <Typography variant="h4" gutterBottom sx={style.text}>
                    SUCCESS!!
                </Typography>
                <Typography variant="h6" gutterBottom sx={style.text}>
                    Medical Record have been added...
                </Typography>
                <br />
            </Container>
        </React.Fragment>
    )
}
