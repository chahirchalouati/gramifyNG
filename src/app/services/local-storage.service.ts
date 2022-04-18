import {Injectable} from '@angular/core';
import {StorageService} from "./storage-service";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService implements StorageService {
  accessToken: string = "access_token";

  getToken(): string {
    return localStorage.getItem(this.accessToken) as string;
  }

  storeToken(token: string): void {
    localStorage.setItem(this.accessToken, JSON.stringify(token));
  }
}
