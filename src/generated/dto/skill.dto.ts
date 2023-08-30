import {IAddSkill, ISkill} from "../graphql";

export const skillInputDTO = (skill: ISkill): IAddSkill => {
    const { _id, image, __typename, ...rest } = skill;
    return rest;
}