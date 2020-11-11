import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public listaUsuarios: any = [];
  public pagina = 1;
  public totalPaginas = 1;

  constructor(
    private userService: UserService,
    public alertController: AlertController
  ) { }

  ionViewWillEnter() {
    this.buscarUsuarios(1);
  }

  public buscarUsuarios(pagina: number) {
    if (pagina <= 0) {
      pagina = 1;
    }
    this.pagina = pagina;

    this.userService.buscarTodos(pagina).subscribe(dados => {
      this.listaUsuarios = dados['data'];
      this.totalPaginas = dados['total_pages'];
      console.log("Lista: ", this.listaUsuarios);
    });
  }

  public excluir(id: number, name: string) {
    this.presentAlertConfirm(id, name);
  }

  async presentAlertConfirm(id: number, name: string) {
    const alert = await this.alertController.create({
      header: 'EXCLUIR!',
      message: `Deseja realmente excluir o usuário:${name}?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
          }
        }, {
          text: 'Ok',
          handler: () => {
            this.userService.deletar(id);
          }
        }
      ]
    });

    await alert.present();
  }

}
