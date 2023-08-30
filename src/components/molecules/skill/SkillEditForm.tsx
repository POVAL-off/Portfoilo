import React, {useRef} from "react";
import {useFormik} from "formik";
import {Box, Button, Grid, IconButton, MenuItem, Slider, StandardTextFieldProps, Typography} from "@mui/material";
import * as yup from "yup";
import TextField from "../../atoms/TextField";
import {IAddSkill, ISkill, Status} from "../../../generated/graphql";
import {skillInputDTO} from "../../../generated/dto/skill.dto";
import FileUploadIcon from '@mui/icons-material/FileUpload';
import ForwardIcon from '@mui/icons-material/Forward';
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

const validationSchema = yup.object({
    name: yup
        .string()
        .required('Name is required'),
});

const initialValues: IAddSkill = {
    name : '',
    shortName : '',
    description : '',
    progress : 0,
    status : Status.Hidden,
    image : null,
}

type ISkillValues = IAddSkill;

interface ISkillEditFormProps {
    skill: ISkill;
    onChange?: (value: ISkillValues) => void;
    onCancel?: () => void;
    onSave: (value: ISkillValues) => void;
}

const SkillEditForm: React.FC<ISkillEditFormProps> = ({ skill, onSave, onCancel }) => {
    const formik = useFormik({
        initialValues: skillInputDTO(skill) || initialValues,
        validationSchema,
        onSubmit: (values) => onSave(values)
    })

    const editorRef = useRef(null);

    const handleInputImage = (event: React.ChangeEvent<HTMLInputElement>) => {
        formik.setFieldValue("image", (event.currentTarget?.files?.length && event.currentTarget.files[0]) || null);
    }

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
                        <ReactQuill
                            value={formik.values.description || ''}
                            onChange={(data) => formik.setFieldValue("description", data)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField name="status" formik={formik} select>
                            {Object.values(Status).map((value) => (
                                <MenuItem key={value} value={value}>{value}</MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item xs>
                                <Slider
                                    getAriaLabel={() => 'Minimum distance shift'}
                                    id="progress"
                                    name="progress"
                                    value={formik.values.progress || 0}
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
                    <Grid item xs={12} alignItems="center">
                        {skill.image && (
                            <>
                                <img src={`http://localhost:5000/${skill.image}`} alt={skill.name}/>
                                {formik.values.image && <ForwardIcon />}
                            </>
                        )}
                        {formik.values.image && <img src={URL.createObjectURL(formik.values.image)} />}

                        <IconButton
                            component="label"
                            color="primary"
                        >
                            <FileUploadIcon />
                            <input
                                type="file"
                                hidden
                                onChange={handleInputImage}
                            />
                        </IconButton>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" type="submit">Сохранить</Button>
                        <Button variant="contained" onClick={onCancel}>Отменить</Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    );
};
export default SkillEditForm;