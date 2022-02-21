import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{

  status = true;
  posts: any = [];
  post: any = {
    id: 0,
    title: ''
  };

  constructor(private postService: PostService) {
    
   }

   ngOnInit(): void {
    this.getPosts();
   }
 
   getPosts() {
    this.postService.getAll()
      .subscribe(response => {
        this.posts = response
      }, error => {
        alert('erreur inattendue')
        console.log(error)
      })
   }

  createPost() {
    this.postService.create(this.post)
      .subscribe(response => {
        this.post = response;
        this.posts.unshift(this.post);
        this.post = {
            id: 0,
            title: ''
          };
      }, error => {
        if(error.status === 400){
          alert('merci de vérifier vos informations')
        }else{
          alert('erreur inattendue')
        console.log(error)
        }
        
      })
  }

  editPost(post: any) {
    this.status = false;
    this.post = post;
  }

  updatePost() {
    this.postService.update(this.post)
      .subscribe(() => {
        this.post = {
          id: 0,
          title: ''
        }
        this.status = true;
      }, error => {
        alert('erreur inattendue')
        console.log(error)
      })
  }


  deletePost(post: any){
    this.postService.delete(post)
      .subscribe(() => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      }, error => {
        if(error.status === 404){
          alert('Ce poste est déjà supprimé')
        }else{
          alert('erreur inattendue')
          console.log(error)
        }

      })
  }

}
