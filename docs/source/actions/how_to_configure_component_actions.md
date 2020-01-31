---
title: How to configure Component Actions
kind: Documentation
---

This how-to describes the steps to create a Component Action that can be executed from the component context menu in a Topology View.

To start working with Component Actions, go to the Settings page and then in Actions, select "Component Actions". There you can add a new Component Action or edit one that already exists.

<!-- ![Component Actions](/images/component_actions.png) -->

## 1. Provide a name and description

A Component Action requires a name that is displayed in the Quick Actions context menu; it is mandatory to provide a name. The Description, on the other hand, is optional. However, it is a good practice to provide a bit of explanation that gives more context about your Action.

Please note that the Component Action name is case-sensitive.

## 2. Bind components to you Action with STQL query

In this step, you determine which components of your topology are going to be able to use this Action. To do that, provide an STQL query that selects all components that should have access to this specific Action. You can find more about queries in StackState on our page about [using STQL](/how_tos/topology_selection_advanced/).

The below example binds an Action to all components in the "Production" domain that are present in the "databases" layer.

 ```
(domain IN ("Production") AND layer IN ("databases"))
 ```

## 3. Write a script for Action to execute

This step determines Action's behavior when it is executed from the component context menu. The scripting language here is [Groovy](https://groovy-lang.org/), and you can script almost any action you need, from redirecting to another View with context, restarting remote components, to calling predictions for components. Find more about the possibilities of [scripting in StackState](/scripting/).  

The below example shows a script that restarts your Kubernetes pods in the right cluster:

```
def cluster = component.synced.extTopologyelement.data.properties.k8sCluster
def podName = component.name

Http.post("http://myk8scluster.com/${cluster}/${podName}/restart")
```

## 4. Provide a valid Identifier (optional)

A valid Identifier for an Action is a URN that follows the below convention:

```
urn:stackpack:{stackpack-name}:component-action:{component-action-name}
```
