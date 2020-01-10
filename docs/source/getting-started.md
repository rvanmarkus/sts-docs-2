---
title: Get started with StackState v1.14.x
description: 'Installing StackState 1.14.x'
---

> This tutorial walks you through installing and configuring StackState 1.14.x.
> If you're just getting started with using the StackState platform, we
> recommend first completing the [StackState concepts](https://www.apollographql.com/docs/tutorial/introduction/) article.

## Requirements

Before starting the installation, ensure your system(s) meet StackState's [installation requirements](/getting-started).

## Install using the RPM distribution

**NOTE**: StackState requires **JDK 8** to run. This version of Java must already be present on the installation machine and will not automatically be installed by the `rpm` command.

```bash
LICENSE_KEY=<<<LICENSE_KEY>>> RECEIVER_BASE_URL="http://<<<HOST>>>:7077/" API_KEY=<<<API_KEY>>> SETUP=<<<PRODUCTION|DEVELOPMENT>>> rpm -i <stackstate>.rpm
```

* `<<<LICENSE_KEY>>>`: Your license key provided by StackState.
* `<<<HOST>>>`: Public DNS resolvable hostname external services can use to connect to
  the installed StackState instance.
* `<<<API_KEY>>>`: Secret key StackState agents must use to authenticate.
* `SETUP`: Choose whether to install in production or development mode. These setups
  should meet the [system-requirements](/getting-started).

## Install using the DEB distribution

**NOTE**: StackState requires **JDK 8** to run. This version of Java must already be present on the installation machine and will not automatically be installed by the `dpkg` command.

```bash
LICENSE_KEY=<<<LICENSE_KEY>>> RECEIVER_BASE_URL="http://<<<HOST>>>:7077/" API_KEY=<<<API_KEY>>> SETUP=<<<PRODUCTION|DEVELOPMENT>>> dpkg -i <stackstate>.deb
```

* `<<<LICENSE_KEY>>>`: Your license key provided by StackState.
* `<<<HOST>>>`: Public DNS resolvable hostname external services can use to connect to
  the installed StackState instance.
* `<<<API_KEY>>>`: Secret key StackState agents must use to authenticate.
* `SETUP`: Choose whether to install in production or development mode. These setups
  should meet the [system-requirements](/getting-started).

## Next steps

Check out the following resources to learn more about the basics
of setting up your monitoring using StackState:

<!-- * [Schema basics](/schema/schema/) -->
<!-- * [Fetching data with resolvers](/data/data/) -->
<!-- * [Deploying with Heroku](/deployment/heroku/) -->