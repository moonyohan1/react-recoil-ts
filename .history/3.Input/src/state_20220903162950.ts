import { atom, selector, atomFamily, selectorFamily } from "recoil";
import * as dataModel from './metadata/dataModel.json';

export const DataModel  = atom({
  key: "dataModel",
  default: dataModel[0]
});

export const controlState = selectorFamily({
  key: "controlSelector",
  get:(pid)=>({get})=>{
    get(DataModel)
  }
})