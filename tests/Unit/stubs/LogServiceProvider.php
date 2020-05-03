<?php

namespace REBELinBLUE\Deployer\Tests\Unit\stubs;

use Psr\Log\LoggerInterface;
use REBELinBLUE\Deployer\Providers\LogServiceProvider as ServiceProvider;

/**
 * A stub class to make the protected methods public for testing.
 *
 * Could instead call the createLogger() method but that means we'd end up
 * having to mock a lot more of the \Illuminate\Log\LogServiceProvider
 * internals structure/calls.
 */
class LogServiceProvider extends ServiceProvider
{
    public function configureSingleHandler(LoggerInterface $log)
    {
        parent::configureSingleHandler($log);
    }

    public function configureDailyHandler(LoggerInterface $log)
    {
        parent::configureDailyHandler($log);
    }
}
