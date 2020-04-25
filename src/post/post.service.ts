import { Injectable } from '@nestjs/common';
import { Post } from './post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostInput } from './post.input';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post) private postRepository: Repository<Post>,
  ) {}

  async createPost(postInput: PostInput): Promise<Post> {
    const { title, description } = postInput;

    const post = new Post();
    post.description = description;
    post.title = title;

    return this.postRepository.save(post);
  }

  async getPost(id: number): Promise<Post> {
    const post = await this.postRepository.findOne(id);

    return post;
  }

  async getPosts(): Promise<Post[]> {
    const posts = await this.postRepository.find();

    return posts;
  }
}
