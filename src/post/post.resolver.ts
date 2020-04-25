import { Resolver, Query, Mutation, Args, Subscription } from '@nestjs/graphql';
import { PostType } from './post.type';
import { PostService } from './post.service';
import { PostInput } from './post.input';
import { PubSub } from 'graphql-subscriptions';

const pubSub = new PubSub();

@Resolver(of => PostType)
export class PostResolver {
  constructor(private postService: PostService) {}

  @Query(returns => PostType)
  getPost(@Args('id') id: number) {
    return this.postService.getPost(id);
  }

  @Query(returns => [PostType])
  getPosts() {
    return this.postService.getPosts();
  }

  @Mutation(returns => PostType)
  async createPost(@Args('postInput') postInput: PostInput) {
    const post = await this.postService.createPost(postInput);
    pubSub.publish('postCreated', { postCreated: post });
    return post;
  }

  @Subscription(returns => PostType)
  postCreated() {
    return pubSub.asyncIterator('postCreated');
  }
}
