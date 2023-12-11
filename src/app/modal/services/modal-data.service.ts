import { HttpClient } from '@angular/common/http';
import {
  Injectable
} from '@angular/core';

export interface ModalContent {
    title: string;
    userId: string;
  }

@Injectable()
export class ModalDataService {   

    constructor(private httpClient: HttpClient){}

    getData(){
        return this.httpClient.get<ModalContent>('https://jsonplaceholder.typicode.com/todos/1');
    }
}