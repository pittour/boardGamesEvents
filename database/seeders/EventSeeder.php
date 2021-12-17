<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EventSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        
        DB::table('events')->insert([
            [
                'name' => 'Event de test',
                'address' => 'chez moi',
                'duration' => '1h',
                'day' => 'dimanche 1 avril 1985',
                'user_id'=>1,
                'content'=> 'partie de test',
                'created_at'=>now(),
                'category_id'=>1,
            ],
            
            [
                'name' => 'Event de test2',
                'address' => 'chez moi2',
                'duration' => '1h02',
                'day' => 'dimanche 2 avril 1985',
                'user_id'=>1,
                'content'=> 'partie de test2',
                'created_at'=>now(),
                'category_id'=>1, 
            ]
        ]);
    }
}
