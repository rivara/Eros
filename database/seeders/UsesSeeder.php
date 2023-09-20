<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UsesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('uses')->insert([
            [
                'name' => "transport"
               
            ],
            [
                'name' => "urban"
            
            ],
            [
                'name' => "highway"
            
            ]
            ]);
    }
}
