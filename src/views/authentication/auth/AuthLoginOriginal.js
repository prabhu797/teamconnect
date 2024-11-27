import React, { useState } from 'react';
import {
    Box,
    Typography,
    FormGroup,
    FormControlLabel,
    Button,
    Stack,
    Checkbox,
    IconButton,
    Alert
} from '@mui/material';
import Snackbar from '@mui/material/Snackbar';

import { useNavigate } from 'react-router-dom';

import { useFrappeAuth } from 'frappe-react-sdk';

import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';

const AuthPage = ({ title, subtitle, subtext }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [open, setOpen] = React.useState(false);
    const [toastMessage, setToastMessage] = useState("")
    const [severity, setSeverity] = useState("info")

    const navigate = useNavigate();

    const {
        currentUser,
        login,
    } = useFrappeAuth();

    const handleSignIn = () => {
        console.log(username);
        console.log(password);
        login({ username: username, password: password })
            .then((res) => {
                setOpen(true);
                setToastMessage("Logged in successfully..!");
                setSeverity("success");
                setTimeout(() => {
                    // navigate("/");
                }, 2000);
            })
            .catch((err) => {
                console.log(err);
                setOpen(true);
                setToastMessage(err.message);
                setSeverity("error");
            });
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <>
            {title ? (
                <Typography fontWeight="700" variant="h2" mb={1}>
                    {title}
                </Typography>
            ) : null}

            {subtext}

            <Stack my={4}>
                <Box>
                    <Typography variant="subtitle1"
                        fontWeight={600} component="label" htmlFor='username' mb="5px">Username</Typography>
                    <CustomTextField id="username" variant="outlined" fullWidth value={username}
                        onChange={(e) => setUsername(e.target.value)} />
                </Box>
                <Box mt="25px">
                    <Typography variant="subtitle1"
                        fontWeight={600} component="label" htmlFor='password' mb="5px" >Password</Typography>
                    <CustomTextField id="password" type="password" variant="outlined" fullWidth value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </Box>
                {/* <Stack justifyContent="space-between" direction="row" alignItems="center" my={2}>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox defaultChecked />}
                            label="Remeber this Device"
                        />
                    </FormGroup>
                    <Typography
                        component={Link}
                        to="/"
                        fontWeight="500"
                        sx={{
                            textDecoration: 'none',
                            color: 'primary.main',
                        }}
                    >
                        Forgot Password ?
                    </Typography>
                </Stack> */}
            </Stack>
            <Box>
                <Button
                    color="primary"
                    variant="contained"
                    size="large"
                    fullWidth
                    type="submit"
                    onClick={handleSignIn}
                >
                    Sign In
                </Button>
            </Box>
            {subtitle}
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                key={"topright"}
                open={open}
                autoHideDuration={4000}
                onClose={handleClose}
            >
                <Alert
                    onClose={handleClose}
                    severity={severity}
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    {toastMessage}
                </Alert>
            </Snackbar>
        </>
    )

};

export default AuthPage;