---
title: Getting started with StackState CLI
kind: Documentation
---

The StackState CLI can be used to configure StackState, work with data, and help with debugging problems. The CLI provides easy access to the functionality provided by the StackState API. The URLs and authentication credentials are configurable. Multiple configurations can be stored for access to different instances.

## Installation

### Prerequisites

* Docker

### Getting the CLI

The CLI can be downloaded from https://download.stackstate.com using your license key.

The downloaded zip contains the following:

``` text
.
+-- bin
|   +-- sts
+-- conf.d
|   +-- conf.yaml.example
|   +-- VERSION
+-- templates
    +-- topology
```

* `sts` is the CLI. Put sts on your path to use it anywhere on the command line.
* `conf.yaml.example` documents how to configure the url and credentials.
* `VERSION` the version of the CLI.
* `templates` these are topology templates in a format specific to the CLI.

### Configuration

The StackState CLI searches for configuration in `conf.d/conf.yaml`. You need to create this file. In this file, the URLs to the sts APIs, their authentication (if any), and a client must be defined. You can copy the `conf.d/conf.example.yaml` file, and rename it to `conf.yaml` to get a clean start. Or copy the example below.

``` yaml
instances:
 default:
   base_api:
     url: "https://???"
     ## StackState authentication. This type of authentication is exclusive to the `base_api`.
     # auth:
     #   username: "???"
     #   password: "???"
     ## HTTP basic authentication.
     # basic_auth:
     #   username: "???"
     #   password: "???"
   receiver_api:
     url: "https://???:7077"
     ## HTTP basic authentication.
     #basic_auth:
       #username: "???"
       #password: "???"
   admin_api:
     url: "https://???:7071"
     ## HTTP basic authentication.
     #basic_auth:
       #username: "???"
       #password: "???"

   ## The CLI uses a client configuration to identify who is sending to the StackState instance. The client
   ## is used to send topology and/or telemetry to the receiver API.
   ##
   ## Unless the `--client` argument is passed the CLI will pick the `default` instance as configured below.
   ## Other clients follow the exact same configuration pattern as the default client. You may simply copy-paste its config and modify whatever is needed.
   clients:
     default:
       api_key: "???"
       ## The name of the host that is passed to StackState when sending. Leave these values unchanged
       ## if you have no idea what to fill here.
       hostname: "hostname"
       internal_hostname: "internal_hostname"
```

The `conf.yaml` can hold multiple configurations. The example only holds a `default` instance. Other instances can be added on the same level as the default. To use a non default instance use `sts --instance <instance_name> ...`

``` yaml
instances:
 default:
   base_api:
     ...
   clients:
     ...
 Preproduction:
   base_api:
     ...
   clients:
     ...
```
