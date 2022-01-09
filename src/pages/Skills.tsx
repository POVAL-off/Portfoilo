import React, {
    useEffect, useState
} from 'react';
import {Box} from "@mui/material";
import {SkillItem} from "../components/molecules/SkillItem";
import ContentTitle from "../components/templates/ContentTitle";
import {useQuery} from "@apollo/client";
import Loading from "./Loading";
import {GetSkillsDocument, ISkill} from "../generated/graphql";

const Skills: React.FC = () => {
    const {loading, data, error} = useQuery(GetSkillsDocument);
    const [skills, setSkills] = useState<ISkill[] | null>(null);

    useEffect(() => {
        setSkills(data?.getSkills as ISkill[]);
    }, [data]);

    return (
        <Box className="skills" width="100%">
            <ContentTitle >
                {loading && <Loading />}
                {skills?.map(item => (
                    <SkillItem key={item._id} item={item}/>
                ))}
            </ContentTitle>
        </Box>
    );
};

export default Skills;