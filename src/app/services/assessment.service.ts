import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AssessmentService {
  baseUrl="http://localhost:3000/";

  constructor(private http:HttpClient) { }

  
  getAssessments(){
    return this.http.get(this.baseUrl+"assessments");
  }
  saveAssessment(assessmentsData:any){
    return this.http.post(this.baseUrl+"assessments", assessmentsData);
  }
  updateAssessment(id, assessmentsData:any){
    return this.http.put(this.baseUrl+"assessments"+'/'+id, assessmentsData);
  }
  deleteAssessment(id:number){
    return this.http.delete(this.baseUrl+"assessments"+"/"+id);
  }
}