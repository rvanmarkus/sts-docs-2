---
title: Development Installation
kind: Documentation
---

### Requirements

Before starting the installation, ensure your system(s) meet StackState's development setup  [installation requirements](/get_started/installation/requirements/).

### Installing StackState in a development configuration

For a development setup of StackState, simply follow the instructions for
[Installing StackState](/get_started/installation/install_stackstate), using `DEVELOPMENT` as the SETUP configuration parameter.

### Starting and Stopping

#### SystemD service

The RPM and DEB packages install SystemD services for StackState and StackGraph. StackState can be started with
`sudo systemctl start stackstate.service` this will also start service StackGraph. Starting StackState can take some time.

After starting processes are complete, the service is available at `http://<stackstate_hostname>:7070`.

#### Stopping StackState

StackState can be stopped by `sudo systemctl stop stackstate.service`. StackGraph is not automatically stopped when stopping StackState, StackGraph can be stopped by `sudo systemctl stop stackgraph.service`.

#### StackState Status

Checking the service status can be done with `sudo systemctl status stackstate.service` and `sudo systemctl status stackgraph.service`.
