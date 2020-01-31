---
title: Manual topology import/export
kind: Documentation
---

This page describes the process of exporting and importing manual topology data, i.e. components and relations that are not synchronized via StackPacks.

### Requirements

* [StackState CLI](/cli/)
* Unix shell

### Export

#### From version 1.15

To export all manually created components and relations to the file `manual_topo.stj`:

```
sts graph list --manual --ids Component Relation | xargs sts graph export --ids > manual_topo.stj
```

Have a look in `manual_topo.stj` to make sure you see a correct export of all your topology there.

Explanation of the command:
 - `sts graph list --manual --ids Component Relation` lists all ids of manually created components and relations.
 - `sts graph export --ids` exports all graph nodes by ids.
 - `| xargs` connects the `graph list` and `graph export` commands.
 - `> manual_topo.stj` dumps the results in the file `manual_topo.stj`.

 *Note*: manually created relations to synchronized components may fail on import if these synchronized components do not exist anymore.

#### Before version 1.15

Steps:

1. Open StackState
1. Open Explore mode, or use an existing view as starting point.
1. Construct a view visualizing only the topology that is intended for export. Topology selection can either be done by filtering on component names or by filtering out the topology that is synchronized from StackPacks. Filtering can done in basic or advanced mode. Components that are synchronized from StackPacks have labels in format `stackpack:<StackPack name>`. A STQL query can be written to filter synchronized topology from StackPacks. For example, to filter out AWS synchronized components the STQL would be `NOT (label IN ("stackpack:AWS"))`.
1. Copy the STQL query as shown in the advanced mode of the filtering pane.
1. With the use of the STQL query we can execute the following shell commands to create an export of the topology, components and relations. Substitute `<STQL Query>` for the query obtained in the previous step.

```
sts script execute -t 15 "Topology.query('<STQL Query>').then { def result = it.queryResults.result; def ids = (result.components + result.relations).collect { it.id }; ids.flatten() }" | xargs sts graph export --ids > manual_topo.stj
```

*Note*: mind the escaping of quotes when inserting the STQL Query in the command.

Example, to filter out topology that is synchronized from the AWS StackPack:

```
sts script execute -t 15 "Topology.query('NOT (label IN (\"stackpack:AWS\"))').then { def result = it.queryResults.result; def ids = (result.components + result.relations).collect { it.id }; ids.flatten() }" | xargs sts graph export --ids
```

The output of the command can be saved in a file for later use.

Explanation of the commands:

1. StackState is queried to retrieve the components and relations as defined in the view, based on the STQL query, by using the `sts script execute` command. Request timeout is set to 15 seconds as retrieval may consume some time.
1. The response is filtered to obtain a list of the to be exported StackState component and relation identifiers.
1. An export of StackState data is made by providing the identifiers to the `sts graph export` command.

### Import

Importing previously exported topology can be done with the following command, assuming that the file `manual_topo.stj` contains the contents from the [export](#export) section.

```
sts graph import < manual_topo.stj
```
