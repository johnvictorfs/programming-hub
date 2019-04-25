import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import PostDetail from './PostDetail'

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
})

export class PostDetailComponent implements OnInit {
  post: PostDetail = {
    title: 'Programando em C',
    category: 'C',
    description: 'Como Programar em C',
    content: 'bla bla bla',
    author: 'João Victor'
  }

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // Get Post details from API with:
    console.log(this.route.snapshot.params.id);
  }

}
