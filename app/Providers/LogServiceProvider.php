<?php

namespace REBELinBLUE\Deployer\Providers;

use Illuminate\Log\LogServiceProvider as ServiceProvider;
use Psr\Log\LoggerInterface;

/**
 * Custom log service provider. Override the built in one to allow custom log file names.
 *
 * This works as the register method registers a singleton, so when this
 * service provider is registered it replaced the default one.
 */
class LogServiceProvider extends ServiceProvider
{
    // FIMXE: Does this need changing for laravel 5.6

    /**
     * Configure the Monolog handlers for the application.
     *
     * @param LoggerInterface $log
     */
    protected function configureSingleHandler(LoggerInterface $log)
    {
        //$log->useFiles($this->getFileName(), $this->logLevel());
    }

    /**
     * Configure the Monolog handlers for the application.
     *
     * @param LoggerInterface $log
     */
    protected function configureDailyHandler(LoggerInterface $log)
    {
        //$log->useDailyFiles($this->getFileName(), $this->maxFiles(), $this->logLevel());
    }

    /**
     * Determines the filename for the log.
     *
     * @return string
     */
    private function getFileName()
    {
        return $this->app->storagePath() . '/logs/' . php_sapi_name() . '.log';
    }
}
