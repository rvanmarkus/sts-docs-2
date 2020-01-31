---
title: Working with Predictions
kind: Documentation
---

Functions for predicting data available to StackState.

## Function: `predictMetrics`

The function executes asynchronously (see )

**Args:**

* `predictorName` - name of prediction preset.

* `horizon` - how much future to predict. The horizon is specified in the REF format.

* `query` - what telemetry to predict. The query is specified in the STQL format REF.

**Return type:**

 `PredictionResponse`, which contains the following fields:

 Fields:

* `PredictionResponse.request` - the request made to the prediction API of type `PredictionRequest`.

* `PredictionResponse.history` - optional, the history used for prediction of type `MetricTelemetry`.

* `PredictionResponse.prediction` - the history used for prediction of type `MetricTelemetry`.

The `PredictionRequest` type has the following fields:

* `PredictionRequest.query` - the query provided to `predictMetrics`.

* `PredictionRequest.predictor` - the name and configuration of the predictor.

* `PredictionRequest.horizon` - the prediction horizon.

* `PredictionRequest.predictionPointCount` - the number of predicted points.

* `PredictionRequest.historyResponse` - options of the history response.

The `MetricTelemetry` has the following fields:

* `MetricTelemetry.result.data` - the two dimensional array with values and time stamps.

Example:

```
Prediction.predictMetrics("linear", "4h"
    Telemetry.query("MyDatasource", "name=myHost").compileQuery()
).dataPoints(500)
```
will predict disk utilization for myHost for one month and print the first value of the prediction.
