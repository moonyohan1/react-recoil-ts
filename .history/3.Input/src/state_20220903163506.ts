import { atom, selector, atomFamily, selectorFamily } from "recoil";
import dataModel from './metadata/dataModel.json';

export const DataModel  = atom({
  key: "dataModel",
  default: dataModel[0]
});

export const controlState = selectorFamily<any, string>({
  key: "controlSelector",
  get:(pid)=>({get})=>{
    return get(DataModel)[pid]
  }
})