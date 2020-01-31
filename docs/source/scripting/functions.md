---
title: Functions
kind: Documentation
---

StackState is built to deal with a wide variety of different situations. StackState comes with functions to stay flexible enough to account for different types of logic.  

Functions are pre-defined scripts which transform input to output. Functions are called by StackState on-demand. For example when a component change state, some new telemetry flowed in or when the user triggered an action.

## Packaging Functions

Functions give power-users the ability to fully customize StackState. However, everyday users of StackState should not need to know that they exist.

StackPacks pre-package functions and automatically install functions on StackState whenever the StackPack gets installed. You can develop your function in StackState. When you are confident that it does what you want, you can export it and package it with a StackPack. Read more about how to create StackPacks [here](/develop/stackpack/).

## Aysnc vs sync functions

Traditionally functions in StackState were written in a synchronous blocking manner. This limited the capability of what these functions can achieve and how many of these functions can be ran in parallel. So, StackState started supporting a new kind of function called *async* functions that allow anyone to access the [Script APIs](/develop/scripting/). The following functions have started supporting the *async* mode and no longer allows you to edit the older (legacy) synchronous function anymore, though the older synchronous functions will remain working.

- Propagation functions (since 1.15.1)

The following functions do not support async mode:

 - Check function
 - Baseline function
 - View state configuration function
 - Event handler function
 - Id extractor function
 - Component mapper function
 - Relation mapper function
