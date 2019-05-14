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
      this.activePost = data[0];
      for (let i = 0; i < 5; ++i) {
        this.posts.push({ name: data[i].title, active: false, id: data[i].id });
      }
      this.posts[0].active = true;
    } catch (error) {
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
