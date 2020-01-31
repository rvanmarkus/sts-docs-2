---
title: Configuring authentication
kind: Documentation
---

Out of the box, StackState is configured with [file-based authentication](#configuring-file-based-authentication), which authenticates users against a file on the server. In addition to this mode, StackState can also authenticate users against an [LDAP](#configuring-the-ldap-authentication-server) server.

When a user is authenticated, the user has one of two possible roles in StackState:

* **guest users** - able to see information but make no changes
* **administrators** - able to see and change all configuration

StackState uses the file `etc/application_stackstate.conf` in the StackState installation directory for authentication configuration. After changing this file restart StackState for any changes to take effect.



## Default username and password

StackState is configured by default with the following administrator account:

* username: `admin`
* password: `topology-telemetry-time`

## Turning off authentication

If StackState runs without authentication, anyone who has access to the StackState URL will be able to use the product without any restrictions.

To turn off authentication completely, use the following configuration setting:

```javascript
stackstate.api.authentication.enabled = false
```

Note that in the [HOCON configuration format](https://github.com/lightbend/config/blob/master/HOCON.md) this has exactly the same meaning as:

```javascript
stackstate { api { authentication { enabled = false } } }
```

## Configuring file-based authentication

Here is an example of `authentication` that configures a user `admin/password` and a user `guest/password`. Place it within the `stackstate { api {` block of the `etc/application_stackstate.conf`. Make sure to remove the line `authentication.enabled = false` to `authentication.enabled = false` in the `application_stackstate.conf` file. Restart StackState to make the change take effect.

```javascript
authentication {
  enabled  = true

  basicAuth = false

  # Amount of time to keep a session when a user does not log in
  sessionLifetime = 7d

  authServer {
    authServerType = "stackstateAuthServer"

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
  adminGroups = ["stackstate-admin"]
  guestGroups = ["stackstate-guest"]
}
```

Configuration field explanation:

1.  **sessionLifeTime** - when users log into StackState, they start a session with StackState during which they can access the system. This setting controls the duration of those sessions.
2.  **authServer** - configures the authentication server StackState uses. It's configuration is specified below.
3.  **password** - the user's password in MD5 hash format.
4.  **roles** - the list of roles the user is a member of.
5.  **adminGroups** - the list of groups whose members StackState grants administrative privileges.
6.  **guestGroups** - the list of groups whose members have guest access privileges(read-only) in StackState.

## Configuring the LDAP authentication server

Follow the instructions on [How to configure LDAP authentication](/rbac/how_to_configure_ldap_authentication) page.

## REST API authentication

If you use StackState's REST API directly (as opposed to via the GUI) you can also enable authentication. The REST API supports basic authentication for authenticating users. StackState authenticates the user against either the configuration file or LDAP server as described above.

```javascript
authentication {
      enabled  = true

      basicAuth = false

      ...


    }
```

1.  **basicAuth** - turn on or off basic authentication for the StackState REST API. Turn this setting on if you use the REST API from external scripts that can not use the HTML form-based login.
