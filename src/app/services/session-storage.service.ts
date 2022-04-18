import {Injectable} from '@angular/core';
import {StorageService} from "./storage-service";

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService implements StorageService {
  accessToken: string = "access_token";

  getToken(): string {
    return sessionStorage.getItem(this.accessToken) as string;
  }

  storeToken(token: string): void {
    sessionStorage.setItem(this.accessToken, token);
  }

}
