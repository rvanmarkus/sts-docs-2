---
title: Installation
kind: Documentation
---

## Choosing your installation type

Before setting up StackState, you need to choose whether you want to run StackState in development or production mode. Development requires only one machine,
but will be limited to 1000 components per view, due to the limited setup. This is recommended for small trials. Production is what we recommend for bigger
proof-of-concepts or in an actual production environment.

## Requirements

Before starting the installation, ensure your system(s) meet StackState's [installation requirements](/get_started/installation/requirements/).

## Packages

There is an RPM package available that provides easy installation and upgrade of StackState on Fedora, Red Hat or CentOS. For Debian and Ubuntu there is a DEB package available. Packages can be obtained from our [distribution website](/get_started/download/).

## Installation

StackState supports two different installation configurations:

* a [development setup](/get_started/installation/development-installation) suitable for a pilot or demo. This setup can deal with limited amounts of topology (max 1000 per view).
* a [production setup](/get_started/installation/production-installation) suitable for production use.

## Upgrading

To upgrade your StackState installation, see the instructions in our [upgrading guide](/get_started/installation/upgrading/).

## Authentication

StackState provides Role Based Access Control functionality that works with LDAP authentication servers. See [RBAC](/rbac/about_rbac/) pages for more information on the topic. You can also find how to configure LDAP servers [here](/rbac/how_to_configure_ldap_authentication/).

## Troubleshooting

If you have any issues installing StackState, refer to our [troubleshooting guide](/troubleshooting_and_help/troubleshooting) or contact our technical support.
