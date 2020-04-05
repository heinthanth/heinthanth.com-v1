<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'PagesController@home')->name('home');
Route::get('/about', 'PagesController@about')->name('about');
Route::get('/skills', 'PagesController@skills')->name('skills');
Route::get('/april-fool', 'PoppinController@april')->name('april-fool');
// Route::post('/april-fool/send-message', 'PoppinController@april_save_message');
