<?php

    namespace App\Http\Controllers;

    use App\Models\Category_ljm;
    use App\Models\Todo_ljm;
    use Illuminate\Http\Request;

    class TodosController_ljm extends Controller
    {
        public function store_ljm(Request $request){
            $request->validate([
                'title' => 'required|min:3'
            ]);
            $todo_ljm=new Todo_ljm;
            $todo_ljm->title=$request->title;
            $todo_ljm->category_id = $request->category_id;
            $todo_ljm->save();

            return redirect()->route('todos_ljm')->with('success_ljm', 'Tarea creada correctamente');


        }

        public function index_ljm() {
            $todos_ljm=Todo_ljm::all();
            $categories_ljm = Category_ljm::all();
            return view('todos_ljm.index_ljm',['todos_ljm'=>$todos_ljm, 'categories_ljm'=>$categories_ljm]);
        }

        public function show_ljm($id) {
            $todo_ljm=Todo_ljm::find($id);
            return view('todos_ljm.show_ljm',['todo_ljm'=>$todo_ljm]);
        }

        public function update_ljm(Request $request, $id) {
            $todo_ljm = Todo_ljm::find($id);
            $todo_ljm->title = $request->title;
            $todo_ljm->save();
            return redirect()->route('todos_ljm')->with('success', 'Tarea actualizada!');
        }


        public function destroy_ljm($id) {
            $todo_ljm=Todo_ljm::find($id);
            $todo_ljm->delete();
            return redirect()->route('todos_ljm')->with('success','Tarea ha sido eliminada!');

            //return view('todos_ljm.index_ljm',['todos_ljm'=>$todos_ljm]);
        }

    }
