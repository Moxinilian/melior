//! Linalg passes.

melior_macro::passes!(
    "Linalg",
    [
        mlirCreateLinalgConvertElementwiseToLinalgPass,
        mlirCreateLinalgLinalgBufferizePass,
        mlirCreateLinalgLinalgDetensorizePass,
        mlirCreateLinalgLinalgElementwiseOpFusionPass,
        mlirCreateLinalgLinalgFoldUnitExtentDimsPass,
        mlirCreateLinalgLinalgInlineScalarOperandsPass,
        mlirCreateLinalgLinalgNamedOpConversionPass,
    ]
);
