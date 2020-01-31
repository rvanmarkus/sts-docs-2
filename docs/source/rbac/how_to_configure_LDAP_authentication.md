---
title: How to configure LDAP authentication
kind: Documentation
---

StackState is built to work with one of two authentication configurations: a file-based authentication, and LDAP. This document explains how to configure LDAP authentication.

## Prepare the config file for LDAP authentication

LDAP configuration uses the `etc/application_stackstate.conf` file located in the StackState installation directory. Check out this page -[Configuring authentication - examples](/get_started/installation/authentication/) - for more information about `authentication` block of this file. Out of the box the configuration file is prepared to support [file-based authentication](/get_started/installation/authentication/#configuring-file-based-authentication); following changes are required to enable [LDAP authentication](/get_started/installation/authentication/#configuring-file-based-authentication):

## 1. Enable authentication

At the beginning of the `authentication` block of `application_stackstate.conf` file locate following lines:

```
authentication {
  enabled  = false
...
}  
```

To enable authentication, change this line to:

```
authentication {
  enabled  = true
...
```

## 2. Set the authentication server type

As mentioned above, out of the box StackState configuration is set to a file-based authentication. To use LDAP configuration, locate the `authServerType` block in `authentication`:

```
authServer {
    authServerType = "stackstateAuthServer"
...
}    
```

Now change `stackstateAuthServer` to `ldapAuthServer`. Your configuration file should look like this now:

```
authentication {
  enabled  = true

  basicAuth = false

  # Amount of time to keep a session when a user does not log in
  sessionLifetime = 7d

  authServer {
    authServerType = "ldapAuthServer"

    stackstateAuthServer {
      # echo -n "password" | md5sum
      # Open http://www.md5.net/md5-generator/
      # Enter your password and press submit, you will get an MD5 Hash
      # Set the MD5 Hash into `auth.password`
      logins = [
        { username = "admin", password: "5f4dcc3b5aa765d61d8327deb882cf99", roles = ["stackstate-admin"] }
        { username = "guest", password: "5f4dcc3b5aa765d61d8327deb882cf99", roles = ["stackstate-guest"] }
      ]
    }
  }
...
}
```


## 3. Provide the connection details and bind credentials to LDAP server

Now you need to remove entire `stackstateAuthServer` block and replace it with connection information, such as the LDAP host address, the port number that LDAP is available at, and bind credentials, as below:

```
ldapAuthServer {
      connection {
        host = localhost
        port = 8000
        # ssl {
        #    sslType = ssl
        #    trustCertificatesPath = "/var/lib/ssl/sts-ldap.pem"
        #    trustStorePath = "/var/lib/ssl/cacerts"
        # }
        bindCredentials {
          dn = "administrator@stackstate.com"
          password = "password"
        }
      }
```


Your configuration file should have `authentication` block similar to this:

```
authentication {
  enabled  = true

  basicAuth = false

  # Amount of time to keep a session when a user does not log in
  sessionLifetime = 7d

  authServer {
    authServerType = "ldapAuthServer"

    ldapAuthServer {
      connection {
        host = localhost
        port = 8000
        # ssl {
        #    sslType = ssl
        #    trustCertificatesPath = "/var/lib/ssl/sts-ldap.pem"
        #    trustStorePath = "/var/lib/ssl/cacerts"
        # }
        bindCredentials {
           dn = "administrator@stackstate.com"
           password = "password"
         }
      }
    }
  }
  guestGroups = ["stackstate-guest"]
  adminGroups = ["stackstate-admin"]
}
```

## 4. Set the base directory where the user records are stored

In this step, you need to provide information about the hierarchical structure of entries ([Directory Information Tree](https://ldapwiki.com/wiki/Directory%20Information%20Tree)) used by LDAP. Follow the example below:

```
authentication {
  enabled  = true

  basicAuth = false

  # Amount of time to keep a session when a user does not log in
  sessionLifetime = 7d

  authServer {
    authServerType = "ldapAuthServer"

    ldapAuthServer {
      connection {
        host = localhost
        port = 8000
        # ssl {
        #    sslType = ssl
        #    trustCertificatesPath = "/var/lib/ssl/sts-ldap.pem"
        #    trustStorePath = "/var/lib/ssl/cacerts"
        # }
        bindCredentials {
           dn = "administrator@stackstate.com"
           password = "password"
         }
      }
      userQuery {
        parameters = [
          { ou : management }
          { o : stackstate }
          { cn: people }
          { dc : example }
          { dc : com }
        ]
        usernameKey = cn
      }
    }
  }
  guestGroups = ["stackstate-guest"]
  adminGroups = ["stackstate-admin"]
}
```

Please note that subjects (users or roles) created in StackState are stored in StackGraph, and to ensure they work with your LDAP configuration, subjects created in StackState must reflect the ones from your LDAP. With `bindCredentials` and `userQuery` configured, a username provided during login to StackState is checked against entries inside provided LDAP directories and their children directories.

## 5. Set the base directory where the group membership records are stored

Similarly, as for users, you need to provide information about the group directories used by LDAP:

```
authentication {
  enabled  = true

  basicAuth = false

  # Amount of time to keep a session when a user does not log in
  sessionLifetime = 7d

  authServer {
    authServerType = "ldapAuthServer"

    ldapAuthServer {
      connection {
        host = localhost
        port = 8000
        # ssl {
        #    sslType = ssl
        #    trustCertificatesPath = "/var/lib/ssl/sts-ldap.pem"
        #    trustStorePath = "/var/lib/ssl/cacerts"
        # }
        bindCredentials {
           dn = "administrator@stackstate.com"
           password = "password"
         }
      }
      userQuery {
        parameters = [
          { ou : management }
          { o : stackstate }
          { cn: people }
          { dc : example }
          { dc : com }
        ]
        usernameKey = cn
      }
      groupQuery {
        parameters = [
          { ou : groups }
          { o : stackstate }
          { cn: people }
          { dc : example }
          { dc : com }
        ]
        rolesKey = cn
        groupMemberKey = member
      }
    }
  }
  guestGroups = ["stackstate-guest"]
  adminGroups = ["stackstate-admin"]
}
```

LDAP groups are reflecting [Roles](/rbac/how_to_set_up_roles/) in StackState - the Group name in LDAP must be the same as the Role subject name in StackState.

## 6. Summary

After completion of all above steps your StackState configuration is ready to be used with LDAP in your organization. You can start creating [Subjects](/rbac/subject_configuration/), and setting up [Roles](/rbac/how_to_set_up_roles/). Find out more on pages describing [Scopes](/rbac/scopes_in_rbac/), and [Permissions](/rbac/permissions/).
