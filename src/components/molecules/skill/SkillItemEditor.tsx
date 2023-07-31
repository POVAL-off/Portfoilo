import React, {useState} from "react";
import EditPanel from "../EditPanel";
import {ISkillItemProps, SkillItem} from "./SkillItem";
import SkillEditModal from "./SkillEditModal";

const SkillItemEditor: React.FC<ISkillItemProps> = ({ item }) => {
    const [isOpenModal, setIsOpenModal] = useState(false);

    const handleClickEditMode = () => {
        setIsOpenModal(true);
    }

    const handleCloseModal = () => {
        setIsOpenModal(false);
    }

    return (
        <>
            <EditPanel
                handleEdit={handleClickEditMode}
            >
                <SkillItem item={item} />
            </EditPanel>
            <SkillEditModal open={isOpenModal} onClose={handleCloseModal} />
        </>
    );
};

export default SkillItemEditor;