import React, {useEffect} from "react";
import {Box, Typography} from "@mui/material";
import ContentTitle from "../components/templates/ContentTitle";
import LoginForm from "../components/molecules/LoginForm";
import {ILoginMutationVariables, useLoginMutation, useLogoutMutation, useMeQuery} from "../generated/graphql";
import {redirect} from "react-router";

const Login: React.FC = () => {
    const [login, { error }] = useLoginMutation();
    const [logout] = useLogoutMutation();
    const { data, refetch } = useMeQuery();

    const handleLogin = async (data: ILoginMutationVariables) => {
        const { errors } = await login({
            variables: data
        })

        if (!errors?.length) {
            redirect('/');
        }
    }

    const handleLogout = async () => {
        const { data } = await logout();
        if (data?.logout) {
            redirect('/');
            await refetch();
        }
    }

    useEffect(() => {
        if (data?.me) {
            handleLogout();
        }
    }, [data?.me]);

    return (
        <Box width="100%" >
            <ContentTitle title="Вход" titleIcon={false}>
                <LoginForm onLogin={handleLogin} />
                <Typography color="error">
                    {error?.message}
                </Typography>
            </ContentTitle>
        </Box>
    );
};

export default Login;