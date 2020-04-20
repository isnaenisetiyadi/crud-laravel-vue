@extends('layouts.app')

@section('content')
<div class="container">
<div class="jumbotron" id="jumbotron_index">
  <h1 class="display-4">Hello, world!</h1>
  <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <router-link to="/foo">Go to Foo</router-link>
    <router-link to="/bar">Go to Bar</router-link>

    <router-view></router-view>
</div>
</div>
@endsection
