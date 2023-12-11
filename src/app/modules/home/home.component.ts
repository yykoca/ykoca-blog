import { Component } from '@angular/core';
import {
  Article,
  ArticleService,
} from '@app/modules/article/article-detail/article.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  articles$: Observable<{ articles: Article[] }> =
    this.articleService.getArticles();

  constructor(private articleService: ArticleService) {}
}