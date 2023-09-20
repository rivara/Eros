<?php

namespace Tests\Unit;

use Tests\TestCase;

class VehicleTest extends TestCase
{
    /**
     * A basic unit test example.
     */
    public function test_example(): void
    {
        $this->assertTrue(true);
    }

     /** @test */
     public function test_examtest_route_returns_ok()
     {
         $response = $this->get('http://127.0.0.1:8000');
         $response->assertStatus(200);
         $response->assertSee('cliente');
         $response->assertDontSee('anual');
   
     }
}
