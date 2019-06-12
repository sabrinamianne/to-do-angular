import { Component } from '@angular/core';
import { Task} from './models/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Epicodus Angular Homework ';
  currentFocus: string = 'To Do List';
  currentTime = new Date();
  month: number = this.currentTime.getMonth()+1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  tasks: Task[] = [
  new Task('Finish weekend Angular homework for Epicodus course',1),
  new Task('Begin brainstorming possible JavaScript group projects',2),
  new Task('Add README file to last few Angular repos on GitHub',3)
  ];
  priorityColor(currentTask) {
    if (currentTask.priority ===3) {
      return "bg-danger";
    } else if (currentTask.priority === 2) {
      return "bg-warning";
    } else {
      return "bg-info";
    }
  }
   selectedTask: Task = null;

   editTask(clickedTask) {
     this.selectedTask= clickedTask;
   }
   finishedEditing() {
    this.selectedTask = null;
  }
}
