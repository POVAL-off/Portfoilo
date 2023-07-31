import React, {
    useEffect, useState
} from 'react';
import {Box} from "@mui/material";
import {SkillItem} from "../components/molecules/skill/SkillItem";
import ContentTitle from "../components/templates/ContentTitle";
import {useQuery} from "@apollo/client";
import Loading from "./Loading";
import {GetSkillsDocument, ISkill} from "../generated/graphql";
import ContentStepper from "../components/templates/ContentStepper";
import SkillItemEditor from "../components/molecules/skill/SkillItemEditor";

const ITEMS_PER_PAGE = 5;

const showElementsPerPage = <T extends unknown>(items: T[], page: number): T[] => {
    return items.slice(page * ITEMS_PER_PAGE, ++page * ITEMS_PER_PAGE);
};

const Skills: React.FC = () => {
    const {loading, data, error} = useQuery(GetSkillsDocument);
    const [skills, setSkills] = useState<ISkill[] | null>(null);
    const [page, setPage] = useState(0);

    const handleChangePage = (page: number) => setPage(page);

    useEffect(() => {
        setSkills(data?.getSkills as ISkill[]);
    }, [data]);

    return (
        <Box className="skills" width="100%">
            <ContentTitle >
                {loading && <Loading />}
                <ContentStepper
                    page={page}
                    onChange={handleChangePage}
                    pageCount={Math.ceil((skills?.length || 0) / ITEMS_PER_PAGE)}
                >
                    {skills && showElementsPerPage(skills, page)?.map(item => (
                        <SkillItemEditor key={item._id} item={item}/>
                    ))}
                </ContentStepper>
            </ContentTitle>
        </Box>
    );
};

export default Skills;