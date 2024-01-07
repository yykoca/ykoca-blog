import { Component } from '@angular/core';
import { Article } from '@app/modules/article/article.model';
import { ArticleService } from '@app/modules/article/article.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent {
  articles$: Observable<Article[]> = this.articleService.getArticles();

  constructor(private articleService: ArticleService) {}
}
