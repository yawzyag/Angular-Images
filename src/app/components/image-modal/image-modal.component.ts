import {
  Component,
  OnInit,
  Input,
  ViewChild,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { Image } from 'src/app/models/Image';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.css'],
})
export class ImageModalComponent {
  @ViewChild('modal_1') modal_1: TemplateRef<any> | undefined;
  @ViewChild('vc', { read: ViewContainerRef }) vc: ViewContainerRef | undefined;
  backdrop: any;
  showDialog() {
    if (this.modal_1 && this.vc) {
      let view = this.modal_1.createEmbeddedView(null);
      this.vc.insert(view);
      this.modal_1.elementRef.nativeElement.previousElementSibling.classList.remove(
        'fade'
      );
      this.modal_1.elementRef.nativeElement.previousElementSibling.classList.add(
        'modal-open'
      );
      this.modal_1.elementRef.nativeElement.previousElementSibling.style.display =
        'block';
      this.backdrop = document.createElement('DIV');
      this.backdrop.className = 'modal-backdrop';
      document.body.appendChild(this.backdrop);
    }
  }

  closeDialog() {
    if (this.vc) this.vc.clear();
    document.body.removeChild(this.backdrop);
  }
}
