import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private readonly accessTokenKey = 'accessToken';
  private readonly refreshTokenKey = 'refreshToken';
  private readonly apiUrl =`${environment.apiUrl}/`

  constructor() { }
}
