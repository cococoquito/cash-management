/**
 * Modelo para los datos de las ventanas modal del sistema
 */
export class DialogModel {

  /** permite visualizar el modal */
  public isShowDialog: boolean;

  /** son los datos a visualizar en el modal */
  public data: any;

  /** son los datos a visualizar en el modal clonado */
  public dataClone: any;

  /**
   * Es invocado cuando se cierra el modal
   */
  public closeDialog(): void {
    this.isShowDialog = false;
    this.data = null;
    this.dataClone = null;
  }

  /**
   * Es invocado para abrir el modal
   */
  public showDialog(datos: any): void {
    this.isShowDialog = true;
    this.data = datos;
  }

  /**
   * Es invocado para abrir el modal
   * haciendo un clone de la data
   */
  public showDialogWithClone(datos: any): void {
    this.isShowDialog = true;
    this.data = datos;
    this.dataClone = JSON.parse(JSON.stringify(this.data));
  }
}
