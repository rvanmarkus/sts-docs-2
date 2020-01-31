---
title: Working with StackState CLI
kind: Documentation
---

This page provides information about options available in StackState CLI tool.

## Inspecting data with the CLI

###  Data flowing through Kafka topics

Use the `sts topic list` to list all active Kafka topics for a StackState instance. Then use `sts topic show <topic>` to inspect a topic.

###  Topology and Telemetry

To inspect both topology and telemetry a script can be executed with the `sts script` command.

### Agent check

You can check what information is collected by a specific check using the following command:

`sts-agent check <check_name>`

It returns collector log information, Metrics, Events, Topology Instances, Service Checks and Service Metadata.

## Sending data with the CLI

You may not always want to try a new configuration on real data. First, you might want to see if it works correctly with predictable data. The CLI makes it easy to send some test topology or telemetry to StackState.

* For help on sending metrics: `sts metrics send -h`
* For help on sending events: `sts events send -h`
* For help on sending topology: `sts topology send -h` ().

### Metrics

To send metrics the CLI provides `sts metrics send <MetricName> <OptionalNumberValue>` with some predefined settings. Running without any optional arguments sends one data point of the given value.

Using optional arguments provides a way to create historical data for a test metric.

`-p` gives the option to specify a time period. this can be done in weeks `<num>w`, days `<num>d`, hours `<num>h`, minutes `<num>m` and seconds `<num>s`. or any combination thereof. for example: `-p 4w2d6h30m15s`

`-b` provides a bandwidth between which the values will be generated. for example: `-b 100-250`

By default, a metrics pattern is random or when a value is provided a flatline. This can be changed by using a pattern argument. The options are `--linear` and `--baseline`.

* `--linear` creates a line between the values given for `-b`. plotted over the time given for `-p`.
* `--baseline` creates a daily usage curve. On Saturday and Sunday, the metric is much lower than on weekdays. The min and max of the curve are set by `-b` and the time period by `-p`.
* `--csv` reads a cvs file from the stdin and sends it to stacks state. The content of the csv file should be `timestamp,value`.

To see all available options, use `sts metrics send -h`.

### Events

The CLI can send events using `sts events send <eventName>` It will send one event with the given name.

### Topology

Please refer to `usage.md` provided with the CLI for detailed instructions.

## Scripting

It is possible to execute scripts using the CLI. Use `sts script` to execute a script.
