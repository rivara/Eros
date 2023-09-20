<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('vehiclerequeriment', function (Blueprint $table) {
       
            $table->unsignedBigInteger('vehicle_id')->nullable();
            $table->foreign('vehicle_id','vehicle_id_fk20232808')->references('id')->on('vehicles');
            $table->unsignedBigInteger('requierement_id')->nullable();
            $table->foreign('requierement_id','requierement_id_fk20232808')->references('id')->on('requirements');
        });
        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('vehiclerequeriment');
    }
};
