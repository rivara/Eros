<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RequirementsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
          DB::table('requirements')->insert([
            [
                'name' => "autonomous circulation",
             
            ],
            [
                'name' => "no driving license",
               
            ],
            [
                'name' => "motorcycle cargo trunk",
               
            ]
        ]);
    }
}
