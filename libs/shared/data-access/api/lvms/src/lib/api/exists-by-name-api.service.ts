import { Observable } from 'rxjs';

export interface ExistsByNameApi {
  existsByName(name: string): Observable<boolean>;
}
