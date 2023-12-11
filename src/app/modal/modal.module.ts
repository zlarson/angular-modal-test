import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ModalComponent } from './components/modal/modal.component';
import { ModalService } from './services/modal.service';
import {ModalDataService } from './services/modal-data.service';

@NgModule({
  imports: [CommonModule],
  declarations: [ModalComponent],
  providers: [ModalService, ModalDataService],
})
export class ModalModule {}
