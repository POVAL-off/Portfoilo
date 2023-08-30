import {StandardTextFieldProps, TextField as MuiTextField} from "@mui/material";
import React from "react";
import {useFormik} from "formik"

type FormikValues = Record<string, unknown>

type ReturnUseFormik<T extends FormikValues> = ReturnType<typeof useFormik<T>>;

interface ITextField<T extends FormikValues> extends Omit<StandardTextFieldProps, 'name'> {
    name: string; // keyof T
    formik: ReturnUseFormik<T>;
}

const TextField = <T extends FormikValues>({name, formik, children, ...props}: ITextField<T>) => {
    return (
        <MuiTextField
            fullWidth
            size="small"
            id={name}
            name={name}
            label={name.charAt(0).toUpperCase() + name.slice(1)}
            value={formik.values[name]}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched[name] && Boolean(formik.errors[name])}
            helperText={formik.touched[name] && formik.errors[name]}
            {...props}
        >{children}</MuiTextField>
    );
};

export default TextField;