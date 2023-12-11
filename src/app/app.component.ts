import { Component, OnInit, TemplateRef } from '@angular/core';
import { ModalService } from './modal/services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private modalService: ModalService) {}
  ngOnInit(): void {
    this.openModal();
  }

  openModal() {
    this.modalService
      .open({ size: 'lg', title: 'Foo' })
      .subscribe((action) => {
        console.log('modalAction', action);
      });
  }
}
