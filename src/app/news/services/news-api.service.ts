import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  apiKey = 'de576a64a3fa43dc86b24901ad1d36c2';
  baseUrl = 'https://newsapi.org/v2';
  constructor(private http: HttpClient) { }

  getSources() {
    return this.http.get(`${this.baseUrl}/sources?apiKey=${this.apiKey}`);
  }

  getArticlesBySourceId(sourceId: string) {
    return this.http.get(`${this.baseUrl}/top-headlines?sources=${sourceId}&apiKey=${this.apiKey}`);
  }

  initArticles() {
    return this.getArticlesBySourceId('abc-news-au');
  }
}
