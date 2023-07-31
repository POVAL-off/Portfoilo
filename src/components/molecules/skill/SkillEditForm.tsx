// @ts-ignore
import React from "react";
import {useFormik} from "formik";
import {Box, Button, Grid, MenuItem, Slider, StandardTextFieldProps, Typography} from "@mui/material";
import * as yup from "yup";
import TextField from "../../atoms/TextField";

const validationSchema = yup.object({
    name: yup
        .string()
        .required('Name is required'),
    shortName: yup
        .string()
        .required('Short name is required')
        .max(5)
});

const initialValues = {
    name : '',
    shortName : '',
    description : '',
    progress : 0,
    status : '',
    image : '',
}

type ISkillValues = typeof initialValues;

interface ISkillEditFormProps {
    initValues?: ISkillValues;
    onChange?: (value: ISkillValues) => void;
}

const SkillEditForm: React.FC<ISkillEditFormProps> = ({ initValues, onChange }) => {
    const formik = useFormik({
        initialValues: initialValues || initValues,
        validationSchema,
        onSubmit: (values) => console.log(values)
    })

    return (
        <Box className="skill-edit-form">
            <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField name="name" formik={formik}/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField name="shortName" formik={formik}/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField name="description" formik={formik}/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField name="status" formik={formik} select>
                            <MenuItem value="">None</MenuItem>
                        </TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item xs>
                                <Slider
                                    getAriaLabel={() => 'Minimum distance shift'}
                                    id="progress"
                                    name="progress"
                                    value={formik.values.progress}
                                    onChange={formik.handleChange}
                                    valueLabelDisplay="auto"
                                    disableSwap
                                />
                            </Grid>
                            <Grid item>
                                <TextField name="progress" formik={formik} fullWidth={false}/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                            <Button
                            variant="contained"
                            component="label"
                        >
                            Upload File
                            <input
                                type="file"
                                hidden
                            />
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    );
};
export default SkillEditForm;