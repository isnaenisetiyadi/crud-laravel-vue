@extends('layouts.app')

@section('content')
<div class="container">
  <div class="jumbotron" id="jumbotron_index">

    <div class="text-center">
      <h1>Teluk Coding Isnaeni</h1>
      <p>Crud Application Laravel and Vue.js</p>
    </div>
    <router-view></router-view>
  </div>
</div>
@endsection