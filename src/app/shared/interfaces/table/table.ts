import { TableRowTypes } from "shared/enums";

export interface Table {
    title: string;
    rowPropertyName: string;
    type: TableRowTypes;
}