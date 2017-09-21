<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTodosTable extends Migration {
    public function up() {
        Schema::create('todos', function (Blueprint $table) {
            $table->increments('id');
            $table->string('description');
            $table->boolean('completed')->default(0);
        });
    }

    public function down() {
        Schema::dropIfExists('todos');
    }
}
