---
title: Configuring StackState
kind: Documentation
---

## Registering your license key

The first time you start StackState, you have to register your license key. The command to do this is:

`sudo -u stackstate /opt/stackstate/bin/sts.sh register --key <license-key>`

**NOTE:** this command must be executed as the user that will be running StackState, typically user `stackstate`

### Configuration files

The main configuration file for StackState server is `application_stackstate.conf` located in the `STACKSTATE_HOME/etc` directory. This file can be manipulated directly to alter the StackState
configuration.
Secondly, to manipulate the running of StackState processes, a `STACKSTATE_HOME/etc/processmanager/processmanager-properties-overrides.conf` file can be created, to override the properties exposed by `STACKSTATE_HOME/etc/processmanager/processmanager-properties.conf`.

## Configuring the receiver base URL

Before starting StackState, it must be configured with its base URL for the receiver service. This setting is located in `application_stackstate.conf` inside the 'receiver' section. For example:

```
baseUrl = "http://stackstate.acme.com:7077"
```
This baseUrl is used to setup the 'one line install command' for agents which will send metrics/events to this endpoint.

**NOTE:** StackState port 7077 must be reachable from any system that is pushing data to StackState

It is also possible to change the port where the server (API and GUI) is listening on.

## Configuring the server API key

StackState server must be configured to accept information from a StackState agent by specifying the agent's API key. This is done in the `APIKEY` configuration file located in `STACKSTATE_HOME/etc` directory. For example:

```
AAAAA-AAAAA-AAAAA
```
