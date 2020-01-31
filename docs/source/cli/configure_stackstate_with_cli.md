---
title: Configure StackState with CLI
kind: Documentation
---

Below document explains how to configure StackState using the CLI tool.

## Configuring StackState through the CLI

You can use the `sts graph export` and `sts graph import` commands to export and import different types of configuration nodes from and to StackState. To list all configuration nodes of a type call `sts graph list <type>`.

Some well known configuration nodes are:

* Sync
* TemplateFunction
* ComponentType
* RelationType
* Domain
* Layer
* Environment
* DataSource
* View
* EventHandler
* CheckFunction
* BaselineFunction
* PropagationFunction
* EventHandlerFunction
* MappingFunction
* IdExtractorFunction
* ViewHealthStateConfigurationFunction

It may be handy to write configurations to disk. For example, to write all check function to disk call:

`sts graph list --ids CheckFunction | xargs sts graph export --ids > mycheckfunctions.stj`

To import these check functions call:

`sts graph import < mycheckfunctions.stj`
