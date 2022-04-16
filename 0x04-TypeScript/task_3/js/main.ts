/// <reference path = "crud.d.ts" />

import type { RowID } from "./interface";
import { RowElement } from "./interface";

import * as CRUD from "./crud";

const row: RowElement = {
    firstName: 'Guillame',
    lastName: 'Salva'
};

const newRowID: RowID = CRUD.insertRow(row);

const updateRow: RowElement = {
    firstName: 'Guillame',
    lastName: 'Salva',
    age: 23
}

const rowID: RowID = CRUD.updateRow(newRowID, updateRow);

CRUD.deleteRow(rowID);
