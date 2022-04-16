import type { RowID } from "./interface";
import { RowElement } from "./interface";

declare function insertRow (row: RowElement): RowID;
declare function deleteRow(rowId: RowID): void;
declare function updateRow(rowId: RowID, row: RowElement): RowID;
