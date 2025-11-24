<?php

namespace Database\Seeders;

use App\Models\Person;
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
        // -------------------------------------------------------
        // Create Admin User
        // -------------------------------------------------------
        $adminId = bin2hex(random_bytes(4));
        User::create([
            'user_id' => $adminId,
            'email' => 'admin@tardetect.edu.ph',
            'password' => 'pass@admin',
        ]);

        Person::create([
            'person_id' => $adminId,
            'profile_picture' => null,
            'first_name' => 'Admin',
            'last_name' => 'User',
            'birth_date' => '1990-01-01',
            'role_id' => 'SYSD',
        ]);

        // -------------------------------------------------------
        // Create Student User
        // -------------------------------------------------------
        $studentId = bin2hex(random_bytes(4));
        User::create( [
            'user_id' => $studentId,
            'email' => 'student@gbox.ncf.edu.ph',
            'password' => 'pass@student',
        ]);

        Person::create([
            'person_id' => $studentId,
            'profile_picture' => null,
            'first_name' => 'Student',
            'last_name' => 'User',
            'birth_date' => '2005-05-15',
            'role_id' => 'STUD',
        ]);
    }
}
