---
title: Production Installation
kind: Documentation
---

### Requirements

Before starting the installation, ensure your system(s) meet StackState's production deployment [installation requirements](/get_started/installation/requirements/).

### Two-node deployment architecture


The StackState production environment requires two nodes a StackGraph and a StackState node.

Configure StackState to run in the two-node setup requires the following steps:

#### Preparing the StackGraph node

1. Install the package using the instruction for [Installing StackState](/get_started/installation/install_stackstate), using `PRODUCTION-STACKGRAPH` as SETUP configuration parameter.
2. Start the StackGraph process as described in [Starting / Stopping](#starting-and-stopping).

#### Preparing the StackState node

To prepare an additional node for running a StackState component, follow these steps:

1. Install the package using the instruction for [Installing StackState](/get_started/installation/install_stackstate), using `PRODUCTION-STACKSTATE` as SETUP configuration parameter.

#### Further Configuring StackState

After you have installed StackState, refer to the following pages for configuration instructions:

* [Configuring authentication](/get_started/installation/authentication/)
* [Reverse Proxy](/get_started/installation/reverse_proxy/)
* More in for on [configuring StackState](/get_started/installation/configuration/)

#### Starting and Stopping

Note that the StackGraph node always needs to be running before starting StackState

#### Starting and Stopping StackGraph

On the StackGraph node, the following commands will start/stop StackGraph:

`sudo systemctl start stackgraph.service`

`sudo systemctl stop stackgraph.service`

#### Starting and Stopping StackState

On the StackState node, the following commands will start/stop StackState:

`sudo systemctl start stackstate.service`

`sudo systemctl stop stackstate.service`
