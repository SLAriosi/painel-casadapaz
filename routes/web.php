<?php

use Illuminate\Support\Facades\Artisan;

Route::get('/run-migrations', function () {
    Artisan::call('migrate');
    return 'Migrations executadas com sucesso!';
});
