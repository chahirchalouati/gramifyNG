export interface StorageService {
  getToken(): string;
  storeToken(token:string): void;

}
