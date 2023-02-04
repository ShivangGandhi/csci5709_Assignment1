import React from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

export default function OwnerForm({ error, field, handleChange }) {

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
                Owner Details
            </Typography>
            <br />
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        label="Name"
                        sx={style.textField}
                        defaultValue={field.name}
                        onChange={handleChange('name')}
                    />
                    {field.name.length === 0 &&
                        <p style={style.errorM}>{error.name.requiredError}</p>
                    }
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        type='email'
                        label="Email"
                        sx={style.textField}
                        defaultValue={field.email}
                        onChange={handleChange('email')}
                    />
                    {field.email.length !== 0 &&
                        <p style={style.errorM}>{error.email.vEmail}</p>
                    }
                    {field.email.length === 0 &&
                        <p style={style.errorM}>{error.email.requiredError}</p>
                    }
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        type='number'
                        label="Phone Number"
                        sx={style.textField}
                        defaultValue={field.phoneNumber}
                        onChange={handleChange('phoneNumber')}
                    />
                    {field.phoneNumber.length !== 10 &&
                        <p style={style.errorM}>{error.phoneNumber.tenDigit}</p>
                    }
                    {field.phoneNumber.length === 0 &&
                        <p style={style.errorM}>{error.phoneNumber.requiredError}</p>
                    }
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        label="Address"
                        sx={style.textField}
                        inputProps={{
                            style: {
                                height: "50px",
                            },
                        }}
                        defaultValue={field.address}
                        onChange={handleChange('address')}
                    />
                    {field.address.length === 0 &&
                        <p style={style.errorM}>{error.address.requiredError}</p>
                    }
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        fullWidth
                        label="Postal Code"
                        sx={style.textField}
                        defaultValue={field.postalCode}
                        onChange={handleChange('postalCode')}
                    />
                    {field.postalCode.length === 0 &&
                        <p style={style.errorM}>{error.postalCode.requiredError}</p>
                    }
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        fullWidth
                        label="City"
                        sx={style.textField}
                        defaultValue={field.city}
                        onChange={handleChange('city')}
                    />
                    {field.city.length === 0 &&
                        <p style={style.errorM}>{error.city.requiredError}</p>
                    }
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        fullWidth
                        label="Province"
                        sx={style.textField}
                        defaultValue={field.province}
                        onChange={handleChange('province')}
                    />
                    {field.province.length === 0 &&
                        <p style={style.errorM}>{error.province.requiredError}</p>
                    }
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        fullWidth
                        label="Country"
                        sx={style.textField}
                        defaultValue={field.country}
                        onChange={handleChange('country')}
                    />
                    {field.country.length === 0 &&
                        <p style={style.errorM}>{error.country.requiredError}</p>
                    }
                </Grid>
            </Grid>
        </React.Fragment>
    )
}
