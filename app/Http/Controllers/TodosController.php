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
        return Todo::create([
            'description' => $request->input('description'),
            'completed' => $request->input('completed')
        ]);
    }

    public function update(Request $request, $id) {
        $todo = Todo::find($id);

        if ($request->input('description')) {
            $todo->description = $request->input('description');
        }

        if ($request->input('completed')) {
            $todo->completed = $request->input('completed');
        }

        $todo->save();

        return $todo;
    }
}
