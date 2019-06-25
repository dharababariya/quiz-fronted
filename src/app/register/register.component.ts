import {Component, OnInit} from '@angular/core';
import {QuizService} from '../shared/quiz.service';
import {Router} from '@angular/router';

@Component({selector: 'app-register', templateUrl: './register.component.html', styleUrls: ['./register.component.css']})
export class RegisterComponent implements OnInit {

    emailPattern = "^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$";

    constructor(private quizService : QuizService, private route : Router) {}

    ngOnInit() {}

    OnSubmit(name : string, email : string) {
        this
            .quizService
            .insertParticipant(name, email)
            .subscribe((data : any) => {

                localStorage.clear();
                localStorage.setItem('participent', JSON.stringify(data));
                this
                    .route
                    .navigate(['/quiz'])
            });
    }

}
