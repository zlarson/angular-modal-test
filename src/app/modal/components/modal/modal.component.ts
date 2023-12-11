import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { ModalDataService } from '../../services/modal-data.service';
import { map, takeWhile, timer } from 'rxjs';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() size? = 'md';
  title : string | undefined;
  message : string | undefined;

  @Input() seconds = 10;

  timeRemaining$ = timer(0, 1000)
    .pipe(map(n => {
      this.changeDetector.detectChanges();
      if(n > this.seconds){
        this.close();
      }
      return (this.seconds - n) * 1000;
    }),
    takeWhile(n => n >= 0),
  );

  @Output() closeEvent = new EventEmitter();
  @Output() submitEvent = new EventEmitter();

  constructor(private elementRef: ElementRef, private dataProviderService: ModalDataService, private changeDetector: ChangeDetectorRef) {
    
  }
  ngOnInit(): void {
    this.dataProviderService
      .getData()
      .subscribe(data => {
        this.title = data.title;
        this.message = data.userId;
        this.changeDetector.detectChanges();
      });
  }

  close(): void {
    this.elementRef.nativeElement.remove();
    this.closeEvent.emit();
  }

  submit(): void {
    this.elementRef.nativeElement.remove();
    this.submitEvent.emit();
  }
}
