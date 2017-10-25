import { Subject } from "../../model/subject";
import {GenereteReducer} from "./GenerateReducer";

export interface ISubjectListViewState {
    SearchedText : string;
    Subjects : Subject[];
    IsShowingSelectedSubjectOnly : boolean;
}

export class SubjectListViewState implements ISubjectListViewState {
   public SearchedText: string;
   public Subjects: Subject[];
   public IsShowingSelectedSubjectOnly: boolean;
   public constructor() {
       this.SearchedText = "";
       this.Subjects = [];
       this.IsShowingSelectedSubjectOnly = false;
   }
}

export const SubjectListViewReducer = GenereteReducer(new SubjectListViewState());
