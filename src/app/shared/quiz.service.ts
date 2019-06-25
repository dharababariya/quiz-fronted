import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  
    //---------------- Properties---------------

    readonly rootUrl = 'https://paytm-quiz-app.herokuapp.com';

    qns: [];
    seconds : number;
    timer;
    qnProgress:number;

 
  constructor( private http : HttpClient ) { }

     //---------------- Helper Methods---------------

     displayTimeElapsed() {
      return Math.floor(this.seconds / 3600) + ':' + Math.floor(this.seconds / 60) + ':' + Math.floor(this.seconds % 60);
    }

    //----------http method ----------
     insertParticipant(name: string, email: string) {
      var body = {
        name: name,
        email: email
      }
      return this.http.post(this.rootUrl + '/v1/api/add_participent', body);
    }

    getQuestions() {

       return this.http.get(this.rootUrl + '/v1/api/get_question')
    }
  
}
