import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  categories: Array<object> = [
    { name: 'C', id: 'category_c', value: 'c' },
    { name: 'C++', id: 'category_cpp', value: 'cpp' },
    { name: 'Python', id: 'category_python', value: 'python' },
    { name: 'Node.js', id: 'category_nodejs', value: 'nodejs' }
  ];

  posts: Array<object> = [
    { name: 'To-Do App em React', active: false, path: ['/post-detail', 1] },
    { name: 'Programação em C', active: true, path: ['/post-detail', 2] },
    { name: 'Web Development com Python', active: false, path: ['/post-detail', 3] },
    { name: 'Web Sockets com Node.JS', active: false, path: ['/post-detail', 4] }
  ];

  activePost: object = {
    img_src: 'https://bendaghir.com/public/img/coding/c.png',
    title: 'Programação em C',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis perspiciatis nulla quam amet. ' +
      'Esse ipsum, natus ducimus, iusto distinctio ullam odio dignissimos rerum nam totam necessitatibus! ' +
      'Nesciunt aperiam recusandae mollitia!',
    author: 'João Victor',
    path: ['/post-detail', 2]
  };
}
