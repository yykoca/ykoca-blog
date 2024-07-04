import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedArticleComponent } from './featured-article.component';

describe('FeaturedComponent', () => {
  let component: FeaturedArticleComponent;
  let fixture: ComponentFixture<FeaturedArticleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeaturedArticleComponent],
    });
    fixture = TestBed.createComponent(FeaturedArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
