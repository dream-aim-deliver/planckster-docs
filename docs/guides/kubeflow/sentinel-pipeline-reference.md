---
sidebar_label: Sentinel 5P Pipeline Reference
sidebar_position: 3
---

# Sentinel 5P Pipeline Reference

The data from the Sentinel 5P Pipeline requires significantly more processing than most other scrapers. As a result, this Pipeline expects a more sophisticated set of parameters when configured for a run. Most of the parameters, such as `long_left` or `lat_down` (two out of four parameters that define the geographical bounding box) are relatively straightforward. But `dataset_evalscripts` is more complex, identifying the specific types of data evaluation to use in a run of the Sentinel 5P Pipeline.

## Sentinel 5P Pipeline Inputs

- **start_datetime**: The start date and time for the time duration you wish to study. Requires the format `{4-digit-year}-{2-digit-month}-{2-digit-date}T{2-digit-hour}:{2-digit-minute}`. For example, to represent 18 August 2023 at 9:30am, provide `2023-08-18T09:30`
- **end_datetime**: The end date and time for the time duration you wish to study. Requires the format `{4-digit-year}-{2-digit-month}-{2-digit-date}T{2-digit-hour}:{2-digit-minute}`. For example, to represent 18 August 2023 at 9:30am, provide `2023-08-18T09:30`
- **resolution**: The number of meters represented in a single pixel. For Sentinel 5P, this should be set to 60.
- **interval**: The time interval between snapshots, in minutes. For example, a value of 360 represents an image every 6 hours.
- **long_left**: The longitude representing the western, or left-hand side of the bounding box for the area you wish to study.
- **lat_up**: The latitude representing the northern, or top side of the bounding box for the area you wish to study.
- **long_right**: The longitude representing the eatern, or right-hand side of the bounding box for the area you wish to study.
- **lat_down**: The latitude representing the southern, or bottom side of the bounding box for the area you wish to study.
- **dataset_evalscripts**: See [Dataset Evalscripts Format](#dataset-evalscripts-format), below.

## Dataset Evalscripts Format

The `dataset_evalscripts` parameter uses [JSON format](https://en.wikipedia.org/wiki/JSON) to encode all the information necessary for the Pipeline to correctly evaluate its data. Sets of square brackets `[]` are used to denote arrays, or simple lists of things (numbers, text, etc.). Curly brackets `{}` are used to capture more complicated collections of object data that require text labels (e.g. `{"first_name": "Gaius", "middle_name": "Julius", "last_name": "Caesar"}`). JSON elements may be nested within one another, so that it is possible to have arrays of objects, arrays as the value (but not the lable/key) of an object element, etc.

The following is an example of a value to provide the sentinel5p Pipeline, which will focus on carbon monoxide concentrations on a highlighted Sentinel-2 image:

``` JSON
{
  "SENTINEL5P": [
    "climate-bands",
    "climate-mask"
  ],
  "SENTINEL2-L1C": [
    "true-color"
  ]
}
```

## Currently Available Evaluation Scripts

These are all of the evaluation scripts currently available, with descriptions to help you configure your Sentinel Pipeline according to your needs:

| Satellite | Script Name | Script Description |
| --- | --- | --- |
| SENTINEL2-L1C | true-color | A Sentinel-2 image highlighting areas of interest based on water, vegetation, and spectral thresholds in true color. Bands: B04, B03, B02, B08, B11, B12 |
| SENTINEL5P | climate-bands | Carbon monoxide (CO) concentrations using a color ramp from low (blue) to high (red) and processes the image into a grid to determine dominant CO concentrations per grid cell. |
| SENTINEL5P | climate-mask | A mask of the carbon monoxide (CO) concentrations in the image. The mask is created by thresholding the CO concentrations in the image. |
| SENTINEL5P | fire-bands | Sentinel-2 image focussed on detection of wildfires, highlighting areas of interest based on vegetation (NDVI), water content (NDWI), and spectral thresholds in enhanced true color |
| SENTINEL5P | fire-mask | A mask of the wildfire areas in the image. The mask is created by thresholding the NDVI and NDWI values in the image. |
