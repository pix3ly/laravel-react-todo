<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Todo;

class TodosController extends Controller {
    public function index() {
        return Todo::all();
    }

    public function show($id) {
        return Todo::find($id);
    }

    public function store(Request $request) {
        $todo = new Todo;

        $todo->fill($request->all());

        $todo->save();

        return $todo;
    }

    public function update(Request $request, $id) {
        $todo = Todo::find($id);

        $todo->fill($request->all());

        $todo->save();

        return $todo;
    }

    public function destroy($id) {
        $todo = Todo::find($id);

        if ($todo) {
            $todo->delete();

            return response()->json(null, 200);
        }

        return response()->json(null, 404);
    }
}
