import {Role, useMeQuery} from "../generated/graphql";

const useRole = () => {
    const { data } = useMeQuery();

    return {
        isAdmin: data?.me.role === Role.Admin,
        isModerator: data?.me.role === Role.Moderator,
        isBetatester: data?.me.role === Role.Betatester,
        isUser: data?.me.role === Role.User,
        role: data?.me.role,
        isEditor: data?.me.role === Role.Admin || data?.me.role === Role.Moderator
    }
}

export default useRole;