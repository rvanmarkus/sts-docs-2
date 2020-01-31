---
title: Subject Configuration
description: Subject configuration within StackState
kind: Documentation
---

## Link your existing LDAP to StackState RBAC

StackState authentication is configured in a [config file](/installation/authentication/) that contains already predefined roles for the Guest user (very limited permission level) and the Admin user (full permission level). To change the configuration to use LDAP authentication check out this document: [How to configure LDAP authentication](/rbac/how_to_configure_ldap_authentication/).

## How to make a new user, or a group, with scopes?

To create a new subject (a group or a username), you must follow the StackState CLI route below. When you create a subject, it has no permissions at first. All custom subjects need a scope by design, so they do not have access to the full topology. This is a security requirement that makes sure that users have access only to what they need.

To create the `stackstate` subject with a scope that allows the user to see all elements with the "StackState" label, use the following command:

```
sts subject save stackstate 'label = "StackState"'
```

To give more context and specific limitations you can create the subject called `stackstateManager` that also has the scope of `StackState` label and has access to Business Applications within that label, command looks like this:

```
sts subject save stackstateManager 'label = "StackState" AND type = "Business Application"'
```

Please note that when passing a STQL query in a CLI command, all operators( like `=`, `<`,`AND`, and so on) need to be surrounded by spaces, as in the above example.

Please note that if you are using LDAP authentication, then the subject needs to be provided with a name that exactly matches the username or a group name that is configured in LDAP, as it is case sensitive.
