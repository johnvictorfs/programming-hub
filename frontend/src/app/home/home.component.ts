import { Component, OnInit } from "@angular/core";

import { Category } from "./model/category.model";
import { PostList } from "./model/post_list.model";
import { ActivePost } from "./model/active_post.model";
import api from "../../api";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  filterSelection: string;
  noPosts: boolean;

  categories: Array<Category> = [
    { name: "C", id: "category_c", value: "c" },
    { name: "C++", id: "category_cpp", value: "cpp" },
    { name: "Python", id: "category_python", value: "python" },
    { name: "Node.js", id: "category_nodejs", value: "nodejs" }
  ];

  posts: Array<PostList> = [];

  activePost: ActivePost;

  filtrarPosts(): void {
    // Filtrar Posts aqui
  }

  async ngOnInit() {
    try {
      const { data } = await api.get("/posts");
      console.log(data);
      if (!data.length) {
        this.noPosts = true;
        return;
      }
      this.activePost = data[0];
      // Pegar os primeiros 5 posts (ou todos se tiver menos de 5)
      // e armazenar em 'posts' para visualizar na aba de "Posts"
      for (let i = 0; i < Math.min(data.length, 5); ++i) {
        if (data[i]) {
          this.posts.push({ name: data[i].title, active: false, id: data[i].id });
        }
      }
      this.posts[0].active = true;
    } catch (error) {
      this.noPosts = true;
      console.error(error);
    }
  }

  async handleClick(item) {
    try {
      const { data } = await api.get(`/posts/${item.id}`);
      for (let i = 0; i < 5; ++i) {
        this.posts[i].active = false;
      }
      item.active = true;
      this.activePost = data;
    } catch (error) {
      console.error(error);
    }
  }
}
