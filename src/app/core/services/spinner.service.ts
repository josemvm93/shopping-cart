import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  private _loading$ = new BehaviorSubject<boolean>(false);
  private _message$ = new BehaviorSubject<string>('Loading...');

  constructor() {}

  get loading$(): Observable<boolean> {
    return this._loading$.asObservable();
  }

  setLoading(value: boolean): void {
    this._loading$.next(value);
  }

  get message$(): Observable<string> {
    return this._message$.asObservable();
  }

  setMessage(value: string): void {
    this._message$.next(value);
  }
}
