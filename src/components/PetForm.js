import React from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

export default function PetForm({ error, field, handleChange }) {

    const style = {
        textField: {
            '& label.Mui-focused': {
                color: "rgb(52, 58, 123)"
            },
            '& .MuiOutlinedInput-root': {
                '&.Mui-focused fieldset': {
                    borderColor: "rgb(207, 172, 191)"
                }
            },
            '& .MuiOutlinedInput-root': {
                '& fieldset': {
                    borderColor: 'rgb(52, 58, 123)',
                }
            }
        },
        errorM: {
            textAlign: 'left',
            color: 'red',
            margin: 1,
            fontSize: 12
        },
        pageTitle: {
            color: 'rgb(207, 172, 191)',
            fontWeight: 'bold'
        }
    }

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom style={style.pageTitle}>
                Pet Details
            </Typography>
            <br />
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        fullWidth
                        label="Pet Type"
                        sx={style.textField}
                        defaultValue={field.petType}
                        onChange={handleChange('petType')}
                    />
                    {field.petType.length === 0 &&
                        <p style={style.errorM}>{error.petType.requiredError}</p>
                    }
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        fullWidth
                        label="Breed"
                        sx={style.textField}
                        defaultValue={field.breed}
                        onChange={handleChange('breed')}
                    />
                    {field.breed.length === 0 &&
                        <p style={style.errorM}>{error.breed.requiredError}</p>
                    }
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        fullWidth
                        focused
                        label="Date of Adoption"
                        type='date'
                        sx={style.textField}
                        defaultValue={field.dateOfAdoption}
                        onChange={handleChange('dateOfAdoption')}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        fullWidth
                        label="Age"
                        type='number'
                        sx={style.textField}
                        defaultValue={field.age}
                        onChange={handleChange('age')}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        fullWidth
                        label="Certificate Number"
                        type='number'
                        sx={style.textField}
                        defaultValue={field.certificateNumber}
                        onChange={handleChange('certificateNumber')}
                    />
                    {field.certificateNumber.length !== 10 &&
                        <p style={style.errorM}>{error.certificateNumber.tenDigit}</p>
                    }
                    {field.certificateNumber.length === 0 &&
                        <p style={style.errorM}>{error.certificateNumber.requiredError}</p>
                    }
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        fullWidth
                        focused
                        label="Date of Diagnosis"
                        type='date'
                        sx={style.textField}
                        defaultValue={field.dateOfDiagnosis}
                        onChange={handleChange('dateOfDiagnosis')}
                    />
                    {field.dateOfDiagnosis.length === 0 &&
                        <p style={style.errorM}>{error.dateOfDiagnosis.requiredError}</p>
                    }
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        label="Diagnosis"
                        sx={style.textField}
                        inputProps={{
                            style: {
                                height: "50px",
                            },
                        }}
                        defaultValue={field.diagnosis}
                        onChange={handleChange('diagnosis')}
                    />
                    {field.diagnosis.length === 0 &&
                        <p style={style.errorM}>{error.diagnosis.requiredError}</p>
                    }
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        label="Medical Prescriptions"
                        sx={style.textField}
                        inputProps={{
                            style: {
                                height: "50px",
                            },
                        }}
                        defaultValue={field.medicalPrescriptions}
                        onChange={handleChange('medicalPrescriptions')}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        label="Pet Vaccines"
                        sx={style.textField}
                        inputProps={{
                            style: {
                                height: "50px",
                            },
                        }}
                        defaultValue={field.petVaccines}
                        onChange={handleChange('petVaccines')}
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    )
}
