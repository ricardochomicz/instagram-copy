import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../../types/Post';
import { FeedComponent } from '../../components/feed/feed.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [FeedComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {

  posts: Post[] = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    return this.httpClient.get<{ posts: Post[] }>('http://localhost:3000/friends')
      .subscribe((data: { posts: Post[] }) => {
        this.posts = data.posts
      })
  }

}
