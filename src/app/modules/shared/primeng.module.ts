import { NgModule } from '@angular/core';
import { TreeTableModule } from 'primeng/treetable';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { PanelModule } from 'primeng/panel';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { KeyFilterModule } from 'primeng/keyfilter';
import { InputSwitchModule } from 'primeng/inputswitch';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { MultiSelectModule } from 'primeng/multiselect';
import { TabViewModule } from 'primeng/tabview';
import { ListboxModule } from 'primeng/listbox';
import { FileUploadModule } from 'primeng/fileupload';
import {AutoCompleteModule} from 'primeng/autocomplete';

/**
 * Modulo que contiene los modulos especificos
 * para trabajar con los componentes de primeng
 */
@NgModule({
  imports: [
    TreeTableModule,
    TableModule,
    CalendarModule,
    DialogModule,
    DropdownModule,
    PanelModule,
    CheckboxModule,
    RadioButtonModule,
    KeyFilterModule,
    InputSwitchModule,
    TriStateCheckboxModule,
    OverlayPanelModule,
    MultiSelectModule,
    TabViewModule,
    ListboxModule,
    FileUploadModule,
    AutoCompleteModule
  ],
  exports: [
    TreeTableModule,
    TableModule,
    CalendarModule,
    DialogModule,
    DropdownModule,
    PanelModule,
    CheckboxModule,
    RadioButtonModule,
    KeyFilterModule,
    InputSwitchModule,
    TriStateCheckboxModule,
    OverlayPanelModule,
    MultiSelectModule,
    TabViewModule,
    ListboxModule,
    FileUploadModule,
    AutoCompleteModule
  ]
})
export class PrimengModule { }
