---
title: Upgrading
kind: Documentation
---

## Determine the type of upgrade

There are several ways of upgrading StackState, depending on your configuration setup and the changes in the StackState release. Please read the StackState release notes carefully before starting an upgrade.

If you are using the StackState application and have not installed any StackPacks, or are using StackPacks that have not been upgraded in this release, follow these steps:

* Create a backup
* Upgrade StackState
* Verify the new installation

If you are using the StackState application, have installed StackPacks and are planning to upgrade one or more of them:

* Create a backup
* Uninstall StackPacks
* Upgrade StackState
* Install StackPacks
* Verify the new installation

**NOTE**: when you upgrade a StackPack, **any changes you have made to the templates in that StackPack will be overwritten**.

## Create a backup

Before upgrading StackState it is recommended to backup your configuration and topology data. The script `bin/sts-backup.sh` will create a backup and store it inside the `backups/` directory.

**NOTE**: the StackState backup can only be restored in the StackState and StackPack versions prior to the upgrade.

## Uninstall StackPacks

StackPacks that are going to be upgraded must first be uninstalled. This removes all StackPack configuration from StackState.

## Upgrade StackState

Depending on your platform, you can use one of the following commands to upgrade StackState:

* Fedora, RedHat, CentOS:
  * using RPM: `rpm -U <stackstate>.rpm`
  * using yum: `yum localinstall <stackstate>.rpm`
* Debian, Ubuntu:
  * using dpkg: `dpkg -i <stackstate>.deb`
  * using apt: `apt-get upgrade <stackstate>.deb`

## Install StackPacks

StackPacks that have been upgraded can now be installed again. This provisions StackState with configuration information from the new StackPack.

## Verify the new installation

Once StackState has been upgraded and started, verify that the new installation of StackState is reachable and that the application is running.

## Verify Access Control

Please note that permissions are stored in StackGraph, so performing an upgrade with clear all data will also remove permission setup. Because permissions exist in StackGraph, in order to completely remove the user it needs to be removed from LDAP and from StackGraph manually.

## Upgrade to 1.15.0

* Upgrading to 1.15.0 will require you to reregister your license information. See https://docs.stackstate.com/setup/installation/configuration/#registering-your-license-key
* Configuration files for the processmanager (`processmanager.conf` and `processmanager-properties.conf`) have changed. If the current StackState installation has changes (or if these are templated in tools like Puppet or Ansible) they will need to be updated.
* The old Elasticsearch data will remain available but is not automatically migrated and will not be available in StackState. This will result in missing history for stackstate events and all telemetry stored in StackState (events and metrics). After upgrading the data can be restored if needed. Please contact support for the details or use this knowledge base article https://support.stackstate.com/hc/en-us/articles/360010136040. If there is no need to restore the data please manually remove the data to recover the disk space used by completely removing the `/opt/stackstate/var/lib/elasticsearch` directory.

## Upgrade to 1.14.9

* As of this version, the concept of "valid guest groups" is deprecated by newly introduced Role Based Access Control. For more information please follow our
* Upgrading from version 1.14.3 or earlier to this release requires a clean installation including removing the complete `/opt/stackstate` directory.

Please note that permissions are stored in StackGraph, so performing an upgrade with clear all data will also remove permission setup. Because permissions exist in StackGraph, in order to completely remove the user it needs to be removed from LDAP and from StackGraph manually.

## Upgrade to 1.14.6

* `stackstate.api.authentication.adminRoles` renamed to `stackstate.api.authentication.adminGroups`
* The `guestGroups` configuration was removed from `stackstate.api.authentication.ldapAuthServer.guestGroups` and is now present and mandatory under `stackstate.api.authentication`. Just like before, this configuration is used to specify which groups have the guest role in StackState.
* In case of `stackstateAuthServer` the `roles` field in the `stackstate.api.authentication.stackstateAuthServer.logins` is now mandatory. Just like the adminGroups, it should contain all the groups that automatically get guest permissions.

## Upgrade to 1.14.4

* CLEAN UPGRADE: For version 1.14.4 a clean installation is required, including removing the complete `/opt/stackstate` directory.

## Upgrade to 1.14.3

* In version 1.14.3 the LDAP query prefix for users and groups was changed. If you are using LDAP authentication, then there are some changes you need to apply to your `application_stackstate.conf`. For detailed information check the

## Upgrade to 1.14.2

* Before version 1.14.2 some of the temporary files weren’t properly removed. This has been fixed in 1.14.2 but some of the older files before 1.14.2 need to cleaned up. In order to remove them run rm -rfv /tmp/*.sts*
