<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            VehiclesSeeder::class,
            ClientsTypesSeeder::class,
            RequirementsSeeder::class,
            UsesSeeder::class,
            VehiclesRequirementsSeeder::class,
        ]);
    }
}
