import React from "react";
import {Box, Button, Grid} from "@mui/material";
import TextField from "../atoms/TextField";
import {useFormik} from "formik";
import * as yup from "yup";
import {ILoginMutationVariables} from "../../generated/graphql";

const validationSchema = yup.object({
    nickName: yup
        .string()
        .required('Email is required'),
    password: yup
        .string()
        .required('Password is required')
});

const initialValues = {
    nickName: '',
    password: ''
}

interface ILoginFormProps {
    onLogin: (data: ILoginMutationVariables) => void;
}

const LoginForm: React.FC<ILoginFormProps> = ({ onLogin }) => {
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: onLogin
    })

    return (
        <Box>
            <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField name="nickName" formik={formik}/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField name="password" formik={formik}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" type="submit">Ввойти</Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    );
};

export default LoginForm;