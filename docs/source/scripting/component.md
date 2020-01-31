---
title: Script API - Component
kind: Documentation
---

Lot of times it is necessary to access a single component details, for example, to write a propagation function to propagate based on a check's description. This can be accomplished using the component script api.

## Function `withId`

Creates a lazy component query builder for a given component.

**Args:**

* `id` - id of the component we are querying for.

**Builder methods**

Each of the methods below give you a Async result with a set of properties

  `get` - Gets components details in full with following fields

    id
    name
    description
    lastUpdateTimestamp
    type
    layer
    domain
    environments
    state
    runState
    outgoingRelations
    incomingRelations
    synchronized
    failingChecks
    iconbase64
    visible

  `checks` - Gets a list of component checks each with the following fields

    id
    lastUpdateTimestamp`
    name
    description
    remediationHint
    function
    arguments
    state
    syncCreated

  `domain` - Gets the domain the component belongs to with the following fields

    id
    lastUpdateTimestamp
    name
    description
    order
    identifier

  `streams` - Gets a list of component streams each with the following fields

    id
    lastUpdateTimestamp
    name
    description
    priority
    dataType
    dataSource
    query

  `type` - Gets the component type of the given component with the following fields

    id
    lastUpdateTimestamp
    name
    description
    iconbase64
    identifier

  `layer` - Gets the layer for the component with the following fields

    id
    lastUpdateTimestamp
    name
    description
    order
    identifier

  `environments` - Gets a list of environments this component belongs to with following fields

    id
    lastUpdateTimestamp
    name
    description
    identifier
    ownedBy


  `propagation` - Get the propagation for the component if any with the following fields

    id
    lastUpdateTimestamp
    function
    arguments
