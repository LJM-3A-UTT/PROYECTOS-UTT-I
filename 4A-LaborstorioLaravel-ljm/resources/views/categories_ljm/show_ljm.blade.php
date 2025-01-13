@extends('app_ljm')

@section('content')
<div class="container w-25 border p-4 -my-4">
    <div class="row mx-auto">
    <form action="{{ route('categories_ljm.update', $category_ljm) }}" method="POST">



            @method('PATCH')
            @csrf
            @if(session('success'))

            <h6 class="alert alert-success">{{session('success')}}</h6>

            @endif

            @error('name')

            <h6 class="alert alert-danger">{{$message}}</h6>

            @enderror

            <div class="mb-3">

                <label for="name" class="form-label">Nombre d ela categoria</label>

                <input type="text" name="name" class="form-control" value="{{$category_ljm->name}}">

            </div>

            <div class="mb-3">

                <label for="color" class="form-label">Color de la categoria</label>

                <input type="color" name="color" class="form-control">

            </div>

            <button type="submit" class="btn btn-primary">Actualizar categoria</button>

        </form>
        <div>
            @if ($category_ljm->todos_ljm->count()>0)
            @foreach ($category_ljm->todos_ljm as $todos_ljm)
            <div class="row py-1">
                <div class="col-md-9 d-flex align-item-center">
                    <a href="{{route('todos_ljm-edit',['id' => $todo_ljm->id])}}">{{$todo_ljm->title}}</a>
                </div>
                <div class="col-md-3 d-flex justify-content-end">
                    <form action="{{route('todos_ljm-destroy',[$todo_ljm->id])}}" method="POST">
                        @method('DELETE')
                        @csrf
                        <button class="btn btn-danger bt-sm">Eliminar</button>
                    </form>
                </div>
            </div>
            @endforeach

            @else

            No hay tareas para esta categoria

            @endif
        </div>
        <div>
            @endsection
