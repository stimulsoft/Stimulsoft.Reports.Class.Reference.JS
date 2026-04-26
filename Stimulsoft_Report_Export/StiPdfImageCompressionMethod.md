---
title: "StiPdfImageCompressionMethod Enum"
---

## StiPdfImageCompressionMethod Enum

**Namespace:** `Stimulsoft.Report.Export`

Enumeration which sets an image compression method for PDF export.

### Members

| Member | Value | Description |
| --- | --- | --- |
| **Jpeg** | 1 | A Jpeg method (DCTDecode) will be used for the exporting of the rendered document. |
| **Flate** | 2 | A Flate method (FlateDecode) will be used for the exporting of the rendered document. |
| **Indexed** | 3 | A Indexed method (IndexedColors + FlateDecode) will be used for the exporting of the rendered document. |
