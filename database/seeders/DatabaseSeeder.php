<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;

class UsersTableSeeder extends Seeder
{
    public function run()
    {
        User::create([
            'name' => 'Usuário Fictício',
            'email' => 'ficticio@exemplo.com',
            'password' => bcrypt('senha123'),
        ]);
    }
}
