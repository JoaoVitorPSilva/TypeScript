import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  taskList: { name: string; taskDate: string; numVideos: number; }[] = [];
  taskName: string = '';
  taskDate: string = '';
  numVideos: number = 0;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {}

  addTask() {
    if (this.taskName && this.taskDate && this.numVideos) {
      let task = {
        name: this.taskName,
        taskDate: this.taskDate,
        numVideos: parseInt(this.numVideos.toString(), 10)
      };
      this.taskList.push(task);
      this.taskName = '';
      this.taskDate = '';
      this.numVideos = 0;
    }
  }
  
  async deleteTask(index: number) {
    let alert = this.alertCtrl.create({
      header: 'Delete Task',
      message: 'Are you sure you want to delete this task?',
      buttons: [
        { text: 'Cancel', role: 'cancel' },
        {
          text: 'Delete',
          handler: () => {
            this.taskList.splice(index, 1);
          }
        }
      ]
    });
    (await alert).present();
  }

  async updateTask(index: number) {
    let alert = this.alertCtrl.create({
      header: 'Update Task?',
      message: 'Type in your new task to update.',
      inputs: [{ name: 'editTask', placeholder: 'Task' }],
      buttons: [
        { text: 'Cancel', role: 'cancel' },
        {
          text: 'Update',
          handler: data => {
            this.taskList[index].name = data.editTask;
          }
        }
      ]
    });
    (await alert).present();
  }
}