<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class VehiclesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('vehicles')->insert([
            [
                'name' => "Vehicle1",
                'description' => "Lorem ipsum dolor sit amet, consectetur.",                
                'price' => 100,
                'autonomy' => 70,
                'duration' => 12,
                'use' => 1,
                'type' => 3,
                'url' => 'http://127.0.0.1:8000/storage/pics/moto1.jpg'
            ],
            [
                'name' => "Vehicle2",
                'description' => "Lorem ipsum dolor sit amet, consectetur.",
                'price' => 155,
                'autonomy' => 80,
                'duration' => 24,
                'use' =>2,
                'type' => 2,
                'url' => 'http://127.0.0.1:8000/storage/pics/moto2.jpg'
            ],
            [
                'name' => "Vehicle3",
                'description' => "Lorem ipsum dolor sit amet, consectetur.",
                'price' => 300,
                'autonomy' => 240,
                'duration' => 38,
                'use' =>2,
                'type' => 2,
                'url' => 'http://127.0.0.1:8000/storage/pics/moto3.jpg'
            ],
            [
                'name' => "Vehicle4",
                'description' => "Lorem ipsum dolor sit amet, consectetur.",
                'price' => 100,
                'autonomy' => 120,
                'duration' => 24,
                'use' => 1,
                'type' => 3,
                'url' => 'http://127.0.0.1:8000/storage/pics/moto4.jpg'
            ],
            [
                'name' => "Vehicle5",
                'description' => "Lorem ipsum dolor sit amet, consectetur.",                
                'price' => 800,
                'autonomy' => 70,
                'duration' => 12,
                'use' => 1,
                'type' => 3,
                'url' => 'http://127.0.0.1:8000/storage/pics/moto5.jpg'
            ],
            [
                'name' => "Vehicle6",
                'description' => "Lorem ipsum dolor sit amet, consectetur.",
                'price' => 100,
                'autonomy' => 80,
                'duration' => 24,
                'use' =>2,
                'type' => 2,
                'url' => 'http://127.0.0.1:8000/storage/pics/moto6.jpg'
            ],
            [
                'name' => "Vehicle7",
                'description' => "Lorem ipsum dolor sit amet, consectetur.",
                'price' => 175,
                'autonomy' => 240,
                'duration' => 24,
                'use' =>2,
                'type' => 2,
                'url' => 'http://127.0.0.1:8000/storage/pics/moto7.jpg'
            ],
            [
                'name' => "Vehicle8",
                'description' => "Lorem ipsum dolor sit amet, consectetur.",
                'price' => 100,
                'autonomy' => 50,
                'duration' => 36,
                'use' => 1,
                'type' => 3,
                'url' => 'http://127.0.0.1:8000/storage/pics/moto8.jpg'
            ],
        ]);
    }
}
