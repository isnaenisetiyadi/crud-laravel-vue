<template>
  <div class="container">
    <!-- <div class="row justify-content-center"> -->
    <!-- <div class="col-md-8"> -->
    <div class="card card-default">
      <div class="card-header" style="text-align:center">Create New Post</div>
      <div class="card-body">
        <form v-on:submit="submitPost()">
          <div class="form-group">
            <input type="text" v-model="posts.title" placeholder="Title..." class="form-control" />
          </div>
          <div class="form-group">
            <textarea name id rows="5" v-model="posts.description" placeholder="Description..." class="form-control"></textarea>
          </div>
          <div class="form-group">
            <router-link to="/" class="btn btn-warning">Cancel</router-link>
            <!-- <button class="btn btn-success">Create</button> -->
            <input type="submit" value="Create" class="btn btn-success">
          </div>
        </form>
      </div>
    </div>
    <!-- </div> -->
    <!-- </div> -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      posts: {
        title: "",
        description: "",
      },
      errors: []
    };
  },
  methods: {
    // Fetches posts when the component is created.
    submitPost() {
      axios
        .post("/posts", this.posts)
        .then(response => {
          console.log(response);
          this.posts = response.data;
        })
        .catch(e => {
          this.errors.push(e);
        });
    }
  }
}
</script>