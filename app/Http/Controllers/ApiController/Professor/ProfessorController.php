<?php

namespace App\Http\Controllers\ApiController\Professor;

use App\Http\Controllers\Controller;
use ProfessorService;

class ProfessorController extends Controller
{
    public function __construct(
        public ProfessorService $service
    )
    {}

    public function store(){
        
    }
}
