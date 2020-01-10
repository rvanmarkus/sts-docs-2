---
title: Get started with StackState 
description: 'Installing StackState'
---

> This tutorial walks you through installing and configuring StackState 1.15.x.
> If you're just getting started with using the StackState platform, we
> recommend first completing the [StackState concepts](/getting-started) article.

## Requirements

Before starting the installation, make sure you make a choice whether to make a [development](/getting-started) or [production](/getting-started) setup,
and make sure you have machines available that match our [requirements](/getting-started).

## Installing

### Install using the RPM distribution

**NOTE**: StackState requires **JDK 8** to run. This version of Java must already be present on the installation machine and will not automatically be installed by the `rpm` command.

```bash
rpm -i <stackstate>.rpm
/opt/stackstate/bin/setup.sh
```

* During setup various configuration options will be requested, which are described below

### Install using the DEB distribution

**NOTE**: StackState requires **JDK 8** to run. This version of Java must already be present on the installation machine and will not automatically be installed by the `dpkg` command.

```bash
dpkg -i <stackstate>.deb
```

* During setup various configuration options will be requested, which are described below

### Configuration options required during install

During the installation process StackState requests the user for information about the installation. These are the options that can be chosen:

* `SETUP`: Choose either one of there four options:
  * `DEVELOPMENT`: Create a development setup. Single-node installation with limitations, see [development installation](/getting-started).
  * `PRODUCTION-STACKGRAPH`: Create a StackGraph node for the production setup, see [production installation](/getting-started).
  * `PRODUCTION-STACKSTATE`: Create a StackState node for the production setup, see [production installation](/getting-started).
  * `CUSTOM`: Create a fully customizable StackState installation. For advanced users only.
* `LICENSE_KEY`: Your license key provided by StackState.
* `RECEIVER_BASE_URL`: Configures the endpoint to which agents and external sources can push data to StackState. Typically it is of the form `"http://<<<HOST>>>:7077/"`,
  where `<<<HOST>>>` is the public DNS resolvable hostname external services can use to connect to the installed StackState instance.
* `STACKGRAPH_HOST`: This option is only available for the `PRODUCTION-STACKSTATE` setup type. Please fill in the DNS name here of the StackGraph machine.
* `API_KEY`: Secret key StackState agents must use to authenticate. If it is not provided, one will be generated automatically under /opt/stackstate/etc/APIKEY

Each of these options can also be passed to the install

## Next steps

Check out the following resources to learn more about the basics
of setting up your monitoring using StackState:

<!-- * [Schema basics](/schema/schema/) -->
<!-- * [Fetching data with resolvers](/data/data/) -->
<!-- * [Deploying with Heroku](/deployment/heroku/) -->