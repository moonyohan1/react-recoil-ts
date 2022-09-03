import { atom, selector, atomFamily } from "recoil";
import * as dataModel from './metadata/dataModel.json';

export const DataModel  = atom({
  key: "dataModel",
  default: dataModel
})