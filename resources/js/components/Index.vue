<template>
  <div class="card">
    <div class="card-header">
        <router-link to="/create" class="btn btn-info float-right">Create new post</router-link>
    </div>
    <div class="card-body">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Title di sini</td>
            <td>Description di sini</td>
            <td>
                <button class="btn btn-success btn-sm"><i class="fa fa-eye"></i> View</button>
                <button class="btn btn-success btn-sm">Edit</button>
                <button class="btn btn-success btn-sm">Delete</button>
            </td>
          </tr>
          
        </tbody>
      </table>
    </div>
  </div>
</template>