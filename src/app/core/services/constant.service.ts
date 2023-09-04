import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantService {
  readonly App: string = 'TaskManager';
  readonly Ver: string = '1.0';
  readonly API_URL: string = 'http://example.com/api';
}
