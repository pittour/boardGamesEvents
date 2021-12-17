<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            [
                'username' => 'admin',
                'email' => 'admin@laravel.dev',
                'password' => bcrypt('admin'),
                'created_at' => now()
            ],
            [
                'username' => 'test',
                'email' => 'test@laravel.dev',
                'password' => bcrypt('test'),
                'created_at' => now()   
            ]
        ]);
    }
}
