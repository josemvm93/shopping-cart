import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SpinnerService } from '../../../core/services/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent implements OnInit {
  constructor(private spinnerService: SpinnerService) {}

  ngOnInit(): void {}

  get loading$(): Observable<boolean> {
    return this.spinnerService.loading$;
  }

  get message$(): Observable<string> {
    return this.spinnerService.message$;
  }
}
