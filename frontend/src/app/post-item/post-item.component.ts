import {Component, Input} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

import {PostDetail} from '../post_detail.model';
import api from '../../api';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html'
})

export class PostItemComponent {
  @Input() public post: PostDetail;
  @Input() public onChange: Function;

  edit = false;
  delete = false;

  constructor(private toastr: ToastrService) {
  }

  toggleEdit() {
    this.edit = !this.edit;
    this.delete = false;
  }

  toggleDelete() {
    this.delete = !this.delete;
    this.edit = false;
  }

  async updatePost() {
    try {
      await api.put(`/posts/${this.post.id}`, this.post);
      this.toastr.success('Post atualizado com sucesso.');
      await this.onChange();
      this.toggleEdit();
    } catch (error) {
      this.toastr.error('Erro ao tentar atualizar post.');
    }
  }

  async deletePost() {
    try {
      await api.delete(`/posts/${this.post.id}`);
      await this.toastr.success('Post excluído com sucesso.');
      await this.onChange();
      window.location.reload();
      this.toggleDelete();
    } catch (error) {
      this.toastr.error('Erro ao tentar excluir post.');
    }
  }
}
