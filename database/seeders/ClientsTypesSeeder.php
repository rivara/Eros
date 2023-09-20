<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ClientsTypesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('clients_types')->insert([
            [
                'name' => "premium"
               
            ],
            [
                'name' => "special"
            
            ],
            [
                'name' => "basic"
            
            ]
        ]);
    }
}
