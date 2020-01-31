---
title: Async script results
kind: Documentation
---

Most API functions execute asynchronously. That means they will not directly return results. Some functions are dependent on the network or other resources in order to complete, therefore they can not immediately return results. Such asynchronous functions return an `AsyncScriptResult`. The concept of an `AsyncScriptResult` is equivalent to how [promises in Javascript](https://www.google.com/search?q=javascript+promise+explained) work.

## Working with `AsyncScriptResult.then`

If the result of your script returns is an `AsyncScriptResult` StackState will automatically wait for the actual result to resolve. If however you want to continue your script with the resolved result of an `AsyncScriptResult` you must use the `.then` method.

The `.then` method expects a [Groovy closure](https://groovy-lang.org/closures.html). The closure will execute soon as the result is gotten. This lambda function can work with the result and return either a new `AsyncScriptResult` or a simple (synchronous) result.

For example:

```
asyncScriptResult = ScriptApi.asyncFn()
asyncScriptResult.then { result -> result.toString() }
```

The Groovy script above can be shortened to:

```
ScriptApi.asyncFn().then { it.toString() }
```

The `it` keyword is default Groovy keyword that you do not need to define a variable in which you receive your result. You might see this being used in our examples.

## Chaining

Multiple asynchronous script results can be chained together. This is useful for combining for example the results of topology with telemetry.

For example:

```
ScriptApi.asyncFn1()
  .then {  ScriptApi.asyncFn2(it)  }
  .then {  ScriptApi.asyncFn3(it)  }
```

Is equivalent to:

```
ScriptApi.asyncFn1()
  .then {  ScriptApi.asyncFn2(it).then { ScriptApi.asyncFn3(it) }  }
```

The above means that the results of `asyncFn1` are passed to `asyncFn2`, then the results of `asyncFn2` in turn are passed to `asyncFn3`.

## Flattening

Since version 1.15 arrays of `AsyncScriptResult` are automatically flattened when returned from a `.then` call. For example:

```
ScriptApi.asyncFn1().then  {
  [ScriptApi.asyncFn2(), ScriptApi.asyncFn3()]
}
```

will return an array of both the result of `asyncFn2` and `asyncFn3`.
