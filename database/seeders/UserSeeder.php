<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name' => 'Admin User',
            'email' => 'admin@tardetect.edu.ph',
            'password' => 'pass@admin',
        ]);

        User::create([
            'name' => 'Student User',
            'email' => 'student@ncf.gbox.edu.ph',
            'password' => 'pass@student',
        ]);
    }
}
