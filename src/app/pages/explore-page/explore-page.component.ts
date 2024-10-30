import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Post } from '../../types/Post';
import { ActivatedRoute } from '@angular/router';
import { FeedComponent } from '../../components/feed/feed.component';

@Component({
  selector: 'app-explore-page',
  standalone: true,
  imports: [FeedComponent],
  templateUrl: './explore-page.component.html',
  styleUrl: './explore-page.component.scss'
})
export class ExplorePageComponent {
  posts: Post[] = [];
  country!: string;

  constructor(private httpClient: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.fetchData(params['country']);
    });

    this.route.params.subscribe(params => {
      this.country = params['get']('country') || '';
      if (this.country) {
        this.fetchData(this.country);
      }
    })
  }

  fetchData(countryId: string) {
    let countryIdFormatted = countryId.toLowerCase();
    return this.httpClient.get<{ posts: Post[] }>(`http://localhost:3000/explore_${countryIdFormatted}`)
      .subscribe((data: { posts: Post[] }) => {
        this.posts = data.posts
      })
  }
}
