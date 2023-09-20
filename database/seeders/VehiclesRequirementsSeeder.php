<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class VehiclesRequirementsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('vehiclerequeriment')->insert([
            [
                'vehicle_id' => 1,
                'requierement_id' => 2
               
            ],
            [
                'vehicle_id' => 2,
                'requierement_id' => 1
            
            ],
            [
                'vehicle_id' => 3,
                'requierement_id' => 3
               
            ],
            [
                'vehicle_id' => 3,
                'requierement_id' => 2
               
            ]
        ]);
    }
}
