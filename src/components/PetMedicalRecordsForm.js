import React, { useState } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import PetForm from './PetForm';
import OwnerForm from './OwnerForm';
import Success from './Success';

export default function PetMedicalRecordsForm() {

    const styles = {
        buttonBack: {
            color: 'rgb(52, 58, 123)'
        },
        buttonNext: {
            backgroundColor: 'rgb(207, 172, 191)',
            border: '1px solid rgb(52, 58, 123)',
            color: 'white'
        },
        formTitle: {
            color: 'rgb(52, 58, 123)',
            fontWeight: 'bold'
        }
    }

    const theme = createTheme();

    var dateOfd = new Date();
    dateOfd.setDate(dateOfd.getDate());
    var dateOfDiag = dateOfd.toISOString().substring(0, 10);

    var dateOfa = new Date();
    dateOfa.setMonth(dateOfa.getMonth() - 3);
    var dateOfAdopt = dateOfa.toISOString().substring(0, 10);

    const [field, setField] = useState({
        petType: '',
        breed: '',
        dateOfAdoption: dateOfAdopt,
        age: '',
        certificateNumber: '',
        dateOfDiagnosis: '',
        diagnosis: '',
        medicalPrescriptions: '',
        petVaccines: '',
        name: '',
        email: '',
        phoneNumber: '',
        address: '',
        postalCode: '',
        city: '',
        province: '',
        country: ''
    });

    const [error, setError] = useState({
        petType: {
            requiredError: 'Required'
        },
        breed: {
            requiredError: 'Required'
        },
        certificateNumber: {
            requiredError: 'Required'
        },
        dateOfDiagnosis: {
            requiredError: 'Required'
        },
        diagnosis: {
            requiredError: 'Required'
        },
        name: {
            requiredError: 'Required'
        },
        email: {
            requiredError: 'Required'
        },
        phoneNumber: {
            requiredError: 'Required'
        },
        address: {
            requiredError: 'Required'
        },
        postalCode: {
            requiredError: 'Required'
        },
        city: {
            requiredError: 'Required'
        },
        province: {
            requiredError: 'Required'
        },
        country: {
            requiredError: 'Required'
        },
    })

    const handleChange = input => e => {
        setField({ ...field, [input]: e.target.value })
        if (input === "petType" && e.target.value.length === 0) {
            setError({ ...error, [input]: { 'requiredError': "Required" } })
        }
        if (input === "petType" && e.target.value.length !== 0) {
            setError({ ...error, [input]: { 'requiredError': '' } })
        }
        if (input === "breed" && e.target.value.length === 0) {
            setError({ ...error, [input]: { 'requiredError': "Required" } })
        }
        if (input === "breed" && e.target.value.length !== 0) {
            setError({ ...error, [input]: { 'requiredError': '' } })
        }
        if (input === "certificateNumber" && e.target.value.length === 0) {
            setError({ ...error, [input]: { 'requiredError': "Required" } })
        }
        if (input === "certificateNumber" && e.target.value.length !== 0 && e.target.value.length !== 10) {
            setError({ ...error, [input]: { 'tenDigit': "A 10-digit Certificate Number" } })
        }
        if (input === "certificateNumber" && e.target.value.length !== 0 && e.target.value.length === 10) {
            setError({ ...error, [input]: { 'requiredError': '' } })
        }
        if (input === "dateOfDiagnosis" && e.target.value.length === 0) {
            setError({ ...error, [input]: { 'requiredError': "Required" } })
        }
        if (input === "dateOfDiagnosis" && e.target.value.length !== 0) {
            setError({ ...error, [input]: { 'requiredError': '' } })
        }
        if (input === "diagnosis" && e.target.value.length === 0) {
            setError({ ...error, [input]: { 'requiredError': "Required" } })
        }
        if (input === "diagnosis" && e.target.value.length !== 0) {
            setError({ ...error, [input]: { 'requiredError': '' } })
        }
        if (input === "name" && e.target.value.length === 0) {
            setError({ ...error, [input]: { 'requiredError': "Required" } })
        }
        if (input === "name" && e.target.value.length !== 0) {
            setError({ ...error, [input]: { 'requiredError': '' } })
        }
        if (input === "email" && e.target.value.length === 0) {
            setError({ ...error, [input]: { 'requiredError': "Required" } })
        }
        if (input === "email" && e.target.value.length !== 0 && !e.target.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
            setError({ ...error, [input]: { 'vEmail': "Please Enter a Valid Email Address" } })
        }
        if (input === "email" && e.target.value.length !== 0 && e.target.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
            setError({ ...error, [input]: { 'requiredError': '' } })
        }
        if (input === "phoneNumber" && e.target.value.length === 0) {
            setError({ ...error, [input]: { 'requiredError': "Required" } })
        }
        if (input === "phoneNumber" && e.target.value.length !== 0 && e.target.value.length !== 10) {
            setError({ ...error, [input]: { 'tenDigit': "A 10-digit Phone Number" } })
        }
        if (input === "phoneNumber" && e.target.value.length !== 0 && e.target.value.length === 10) {
            setError({ ...error, [input]: { 'requiredError': '' } })
        }
        if (input === "address" && e.target.value.length === 0) {
            setError({ ...error, [input]: { 'requiredError': "Required" } })
        }
        if (input === "address" && e.target.value.length !== 0) {
            setError({ ...error, [input]: { 'requiredError': '' } })
        }
        if (input === "postalCode" && e.target.value.length === 0) {
            setError({ ...error, [input]: { 'requiredError': "Required" } })
        }
        if (input === "postalCode" && e.target.value.length !== 0) {
            setError({ ...error, [input]: { 'requiredError': '' } })
        }
        if (input === "city" && e.target.value.length === 0) {
            setError({ ...error, [input]: { 'requiredError': "Required" } })
        }
        if (input === "city" && e.target.value.length !== 0) {
            setError({ ...error, [input]: { 'requiredError': '' } })
        }
        if (input === "province" && e.target.value.length === 0) {
            setError({ ...error, [input]: { 'requiredError': "Required" } })
        }
        if (input === "province" && e.target.value.length !== 0) {
            setError({ ...error, [input]: { 'requiredError': '' } })
        }
        if (input === "country" && e.target.value.length === 0) {
            setError({ ...error, [input]: { 'requiredError': "Required" } })
        }
        if (input === "country" && e.target.value.length !== 0) {
            setError({ ...error, [input]: { 'requiredError': '' } })
        }
    }

    const [page, setPage] = useState(0);

    const steps = ['Pet details', 'Owner details'];

    const pageChanger = (page) => {
        switch (page) {
            case 0:
                return (
                    <>
                        <PetForm
                            field={field}
                            error={error}
                            handleChange={handleChange}
                        />
                        <Box
                            sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                            {page !== 0 && (
                                <Button
                                    type='submit'
                                    onClick={previousPage}
                                    xs={12}
                                    style={styles.buttonBack}
                                    sx={{ mt: 3, ml: 1 }}>
                                    Back
                                </Button>
                            )}
                            {(error.petType.requiredError === 'Required' || error.breed.requiredError === 'Required' || error.certificateNumber.requiredError === 'Required' || error.dateOfDiagnosis.requiredError === 'Required' || error.diagnosis.requiredError === 'Required') ?
                                (<Button
                                    disabled
                                    variant="contained"
                                    xs={12}
                                    onClick={nextPage}
                                    style={styles.buttonNext}
                                    sx={{ mt: 3, ml: 1 }}
                                >
                                    Next
                                </Button>) :
                                (<Button
                                    variant="contained"
                                    onClick={nextPage}
                                    style={styles.buttonNext}
                                    sx={{ mt: 3, ml: 1 }}
                                >
                                    Next
                                </Button>)
                            }
                        </Box>
                    </>
                );
            case 1:
                return (
                    <>
                        <OwnerForm
                            field={field}
                            error={error}
                            handleChange={handleChange}
                        />
                        <Box
                            sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                            {(error.name.requiredError === 'Required' || error.email.requiredError === 'Required' || error.phoneNumber.requiredError === 'Required' || error.address.requiredError === 'Required' || error.postalCode.requiredError === 'Required' || error.city.requiredError === 'Required' || error.province.requiredError === 'Required' || error.country.requiredError === 'Required') ?
                                (<Button
                                    disabled
                                    xs={12} sm={6}
                                    variant="contained"
                                    onClick={nextPage}
                                    style={styles.buttonNext}
                                    sx={{ mt: 3, ml: 1 }}
                                >
                                    Submit
                                </Button>
                                ) : (
                                    <Button
                                        variant="contained"
                                        xs={12} sm={6}
                                        onClick={nextPage}
                                        style={styles.buttonNext}
                                        sx={{ mt: 3, ml: 1 }}
                                    >
                                        Submit
                                    </Button>
                                )

                            }
                        </Box>
                    </>
                );
            default:
                throw new Error('Unknown step');
        }
    }

    const nextPage = () => {
        setPage(page + 1);
    };

    const previousPage = () => {
        setPage(page - 1);
    };

    return (
        <div>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <AppBar
                    position="absolute"
                    color="default"
                    elevation={0}
                    sx={{
                        position: 'relative',
                        borderBottom: (t) => `2px solid ${t.palette.divider}`,
                    }}
                >
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            aria-label="menu"
                            sx={{
                                mr: 2,
                                color: 'rgb(52, 58, 123)'
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            noWrap
                            sx={{
                                color: 'rgb(207, 172, 191)',
                                fontWeight: 'bold'
                            }}
                        >
                            pet
                        </Typography>
                        <Typography
                            variant="h6"
                            noWrap
                            sx={{
                                color: 'rgb(52, 58, 123)',
                                fontWeight: 'bold'
                            }}
                        >
                            Shield
                        </Typography>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="inherit"
                            sx={{
                                color: 'rgb(52, 58, 123)',
                                marginLeft: 'auto'
                            }}
                        >
                            <AccountCircle />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
                    <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                        {page === steps.length ? (
                            <React.Fragment>
                                <Success />
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                <Typography component="h1" variant="h4" align="center" style={styles.formTitle}>
                                    Add Medical Record
                                </Typography>
                                <br />
                                <hr />
                                <br />
                                {pageChanger(page)}
                            </React.Fragment>
                        )}
                    </Paper>
                </Container>
            </ThemeProvider>
        </div>
    )
}
