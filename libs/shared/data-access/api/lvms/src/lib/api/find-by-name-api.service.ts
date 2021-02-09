import { Observable } from 'rxjs';

export interface FindByNameApi {
  findByName(name: string): Observable<any[]>;
}
