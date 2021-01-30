import {
  HttpEvent,
  HttpHeaders,
  HttpParams,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

export function methodBuilder(method: string) {
  return function(url: string) {
    return function(target: HttpService, propertyKey: string, descriptor: any) {

      const pPath = target[`${propertyKey}_Path_parameters`],
        pQuery = target[`${propertyKey}_Query_parameters`],
        pBody = target[`${propertyKey}_Body_parameters`],
        pHeader = target[`${propertyKey}_Header_parameters`];

      descriptor.value = function(...args: any[]) {
        const body: string = createBody(pBody, descriptor, args);
        const resUrl: string = createPath(url, pPath, args);
        const search: HttpParams = createQuery(pQuery, args);
        const headers: HttpHeaders = createHeaders(pHeader, descriptor, this.getDefaultHeaders(), args);

        // Request options
        const options = {
          headers,
          body,
          search
        };

        return this.http.request(method, this.getBaseUrl() + resUrl, options)
          .pipe(
            catchError((err, source) => {
              return this.responseHandler.onCatch(err, source);
            })
          );
      };

      return descriptor;
    };
  };
}

export function paramBuilder(paramName: string) {
  return function(key: string) {
    return function(target: HttpService, propertyKey: string, parameterIndex: number) {
      const metadataKey = `${propertyKey}_${paramName}_parameters`;
      const paramObj: any = {
        key: key,
        parameterIndex: parameterIndex
      };

      if (Array.isArray(target[metadataKey])) target[metadataKey].push(paramObj);
      else target[metadataKey] = [paramObj];
    };
  };
}

function createBody(pBody: Array<any>, descriptor: any, args: Array<any>): string {
  if (descriptor.isFormData) return args[0];
  return pBody ? JSON.stringify(args[pBody[0].parameterIndex]) : null;
}

function createPath(url: string, pPath: Array<any>, args: Array<any>): string {
  let resUrl: string = url;

  if (pPath) {
    for (const k in pPath) {
      if (pPath.hasOwnProperty(k)) {
        resUrl = resUrl.replace('{' + pPath[k].key + '}', args[pPath[k].parameterIndex]);
      }
    }
  }

  return resUrl;
}

function createQuery(pQuery: any, args: Array<any>): HttpParams {
  const search = new HttpParams();

  if (pQuery) {
    pQuery
      .filter(p => args[p.parameterIndex]) // filter out optional parameters
      .forEach(p => {
        const key = p.key;
        let value = args[p.parameterIndex];
        // if the value is a instance of Object, we stringify it
        if (value instanceof Object) {
          value = JSON.stringify(value);
        }
        search.set(encodeURIComponent(key), encodeURIComponent(value));
      });
  }

  return search;
}

function createHeaders(pHeader: any, descriptor: any, defaultHeaders: any, args: Array<any>): HttpHeaders {
  const headers = new HttpHeaders(defaultHeaders);

  // set method specific headers
  for (const k in descriptor.headers) {
    if (descriptor.headers.hasOwnProperty(k)) {
      if (headers.has(k)) headers.delete(k);
      headers.append(k, descriptor.headers[k]);
    }
  }

  // set parameter specific headers
  if (pHeader) {
    for (const k in pHeader) {
      if (pHeader.hasOwnProperty(k)) {
        if (headers.has(k)) headers.delete(k);
        headers.append(pHeader[k].key, args[pHeader[k].parameterIndex]);
      }
    }
  }

  return headers;
}
