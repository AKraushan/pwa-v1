
export interface Assessment {
    assessmentData:AssessmentData;
    questionMasterList:QuestionMasterList;
}

export interface AssessmentData{
    id: string;
    name: string;
    starDate: string;
    endDate: string;
    assignedClassId: number;
    description: string;
    scored:number

    
}

export interface QuestionMasterList{
    id:number;
    assessmentId:number;
    question:string;
    description:string;
    correctAnswer:string;
    studentAnswer:string;
    point:number;
    scoredPoint:number;
}
