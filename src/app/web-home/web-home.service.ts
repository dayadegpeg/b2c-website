import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WebHomeService {
  api_url = environment.api_url;

  constructor(private http: HttpClient) {}

  getSessionCategoriesApi() {
    return this.http.get(this.api_url + `/live-session-categories`);
  }

  getFilteredSessionApi(
    session_category_id: string,
    session_type: string,
    pagination: any
  ) {
    return this.http.get(
      this.api_url +
        `/live-sessions?filter={"include": [{"relation": "liveSessionCategory"},{"relation": "contentProvider"},{"relation":"sessionData"}],"where":{"status":"${session_type}","liveSessionCategoryId":"${session_category_id}"},"limit":${pagination.pg_size}, "offset":${pagination.pg_offset}}`
    );
  }

  getSessionsApi(session_type: string, pagination: any) {
    return this.http.get(
      this.api_url +
        `/live-sessions?filter={"include": [{"relation": "liveSessionCategory"},{"relation": "contentProvider"},{"relation":"sessionData"}],"where":{"status":"${session_type}"},"limit":${pagination.pg_size}, "offset":${pagination.pg_offset}}`
    );
  }
  getPromotionsApi() {
    return this.http.get(this.api_url + `/promotions`);
  }
}
