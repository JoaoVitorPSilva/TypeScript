import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
 taskList : string [] = [];
  taskName: any;
  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {}
  addTask() {
    if (this.taskName.length > 0) {
      let task = this.taskName;
      this.taskList.push(task);
      this.taskName = "";
    }
  }

  async deleteTask(index: number){
    let alert = this.alertCtrl.create({
      header: 'Delete Task',
      message : 'Tem certeza que quer deletar?',
      buttons: [{ text: 'Cancel', role: 'cancel' },
                { text: 'Delete', handler: () => {  
                  this.taskList.splice(index, 1);
                }}
      ]
    });
    (await alert).present();
  }



  
  async updateTask(index : any) {
    let alert = this.alertCtrl.create({
      header: 'Update Task?',
      message: 'Type in your new task to update.',
      inputs: [{ name: 'editTask', placeholder: 'Task' }],
      buttons: [{ text: 'Cancel', role: 'cancel' },
                { text: 'Update', handler: data => {  
                  this.taskList[index] = data.editTask; }}]
    });
    (await alert).present();
  }
  
}