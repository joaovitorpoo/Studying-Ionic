import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

export interface amigo {
  nome: String;
  idade: number;
  nivelAmizade: number;
}

@Component({
  selector: 'app-amigos',
  templateUrl: './amigos.page.html',
  styleUrls: ['./amigos.page.scss'],
})

export class AmigosPage implements OnInit {
  amigos: amigo[] = [
  {nome: "Joao Vitor", idade: 18, nivelAmizade: 5},
  {nome: "Joao Pedro", idade: 20, nivelAmizade: 3},
  {nome: "Vitor Lima", idade: 28, nivelAmizade: 3},
  {nome: "Algusto Flyntom", idade: 17, nivelAmizade: 2},
  {nome: "Vitor Batista", idade: 19, nivelAmizade: 1}
  ];

  constructor(public actionSheetController: ActionSheetController) { }

  ngOnInit() {
  }

  deletar(user: amigo) {
   let index = this.amigos.indexOf(user);
   this.amigos.splice(index, 1);
  }

  async presentActionSheet(usuario: amigo) {
    const actionSheet = await this.actionSheetController.create({
      buttons: [{
        text: 'Deletar',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.deletar(usuario);
        }
      }, {
        text: 'Editar',
        icon: 'share',
        handler: () => {
        }
      }, {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
        }
      }]
    });
    await actionSheet.present();
  }

}
