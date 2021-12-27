import React from "react";

export interface ISidebarItem {
    id: string | number;
    name: string;
    link: string;
    icon: React.ReactElement<any, any>;
    borderIcon: React.ReactElement<any, any>;
}